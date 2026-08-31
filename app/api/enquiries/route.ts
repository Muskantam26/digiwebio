import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { enquiryFormSchema, sanitizeInput } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendEnquiryNotificationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting check (Prevent spam / duplicate submissions)
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateCheck = checkRateLimit(clientIp, 10, 60 * 1000);
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

    const rawData = {
      name: body.name || body.fullName || "",
      email: body.email || "",
      phone: body.phone || "",
      company: body.company || "",
      service: body.service || "General Software Enquiry",
      message: body.message || body.description || "",
    };

    // 3. Server-side validation via Zod
    const validationResult = enquiryFormSchema.safeParse(rawData);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map(
        (issue) => `${issue.path.join(".")}: ${issue.message}`
      );
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your form input.",
          details: errorMessages,
        },
        { status: 400 }
      );
    }

    const validated = validationResult.data;
    const sanitizedData = {
      name: sanitizeInput(validated.name),
      email: validated.email.toLowerCase().trim(),
      phone: sanitizeInput(validated.phone),
      company: sanitizeInput(validated.company || ""),
      service: sanitizeInput(validated.service),
      message: sanitizeInput(validated.message),
    };

    // 4. Save Enquiry to Database (mongodb://localhost:27017/digiwebio or production DB)
    let savedEnquiryId: string | null = null;
    let createdAt = new Date();

    try {
      const mongooseConn = await connectToDatabase();
      if (mongooseConn) {
        const enquiryRecord = await Enquiry.create({
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          company: sanitizedData.company,
          service: sanitizedData.service,
          message: sanitizedData.message,
          status: "New",
          ipAddress: clientIp,
        });
        savedEnquiryId = enquiryRecord._id.toString();
        createdAt = enquiryRecord.createdAt || createdAt;
        console.log("[Database Success] Enquiry saved to MongoDB. ID:", savedEnquiryId);
      } else {
        console.warn("[Database Warning]: Mongoose connection could not be established. Payload:", sanitizedData);
      }
    } catch (dbError) {
      console.error("[Database Save Exception]:", dbError);
    }

    // 5. Send Email Notification via Resend
    let emailStatus: { success: boolean; error?: string } = { success: false };
    try {
      emailStatus = await sendEnquiryNotificationEmail({
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        company: sanitizedData.company,
        service: sanitizedData.service,
        message: sanitizedData.message,
        createdAt: createdAt,
      });

      if (!emailStatus.success) {
        console.error("[Resend Email Error]:", emailStatus.error);
      }
    } catch (emailErr) {
      console.error("[Resend Email Exception]:", emailErr);
    }

    // 6. Return Success Response to User
    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.",
        ...(savedEnquiryId && { enquiryId: savedEnquiryId }),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Server Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
