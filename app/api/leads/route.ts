import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { leadFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check based on client IP
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateCheck = checkRateLimit(clientIp, 5, 60 * 1000); // 5 submissions per minute per IP
    if (!rateCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request JSON body
    const body = await req.json();

    // 3. Server-side validation & HTML sanitization via Zod
    const validationResult = leadFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`
      );
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: errorMessages,
        },
        { status: 400 }
      );
    }

    const sanitizedData = validationResult.data;

    // 4. Connect to MongoDB Atlas (if connection URI is provided)
    const mongooseConn = await connectToDatabase();

    if (mongooseConn) {
      // Save lead to MongoDB collection
      const newLead = await Lead.create({
        fullName: sanitizedData.fullName,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        company: sanitizedData.company || "",
        service: sanitizedData.service,
        budget: sanitizedData.budget,
        description: sanitizedData.description,
        ipAddress: clientIp,
        status: "new",
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your project enquiry has been received successfully. Our team will contact you within 24 hours.",
          leadId: newLead._id,
        },
        { status: 201 }
      );
    } else {
      // If MongoDB URI is not set in environment yet, log and return graceful success
      console.log("[DigiWebIO Lead Submission Received]", sanitizedData);
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your project enquiry has been received successfully. Our team will contact you within 24 hours.",
          note: "Form processed successfully (Development fallback active).",
        },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while submitting your enquiry. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
