import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { leadFormSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendEnquiryEmails } from "@/lib/email";

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

    let createdLeadId = null;

    if (mongooseConn) {
      // Save lead to MongoDB collection FIRST
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
      createdLeadId = newLead._id;
    } else {
      // If MongoDB URI is not set in environment yet, log lead data
      console.log("[DigiWebIO Lead Submission Received]", sanitizedData);
    }

    // 5. Trigger Resend Email Notifications ONLY AFTER database save completes
    let emailStatus = null;
    try {
      emailStatus = await sendEnquiryEmails({
        fullName: sanitizedData.fullName,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        company: sanitizedData.company,
        service: sanitizedData.service,
        budget: sanitizedData.budget,
        description: sanitizedData.description,
      });
    } catch (emailError) {
      // Log email warning so database save and user response remain successful
      console.error("[Email Dispatch Warning] Failed to dispatch Resend emails:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your project enquiry has been received successfully. Our team will contact you within 24 hours.",
        ...(createdLeadId && { leadId: createdLeadId }),
        ...(emailStatus && { emailStatus }),
      },
      { status: 201 }
    );
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
