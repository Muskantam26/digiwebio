import { Resend } from "resend";

export interface EnquiryEmailData {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  description: string;
}

export interface SendEmailResult {
  success: boolean;
  ownerSuccess?: boolean;
  userSuccess?: boolean;
  error?: string;
}

/**
 * Sends Resend emails after a lead is saved to MongoDB:
 * 1. Notification email to website owner/admin
 * 2. Confirmation email to the user
 */
export async function sendEnquiryEmails(data: EnquiryEmailData): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Resend Warning] RESEND_API_KEY is not defined in environment. Skipping email sending.");
    return {
      success: false,
      error: "RESEND_API_KEY is missing in environment variables.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    // Default sender email (Resend free tier requires onboarding@resend.dev until custom domain is verified)
    const fromEmail = process.env.RESEND_FROM_EMAIL || "DigiWebIO <onboarding@resend.dev>";
    
    // Website owner destination email
    const ownerEmail = process.env.ADMIN_EMAIL || process.env.ENQUIRY_EMAIL || "digiwebiodigitalagency@gmail.com";

    // Subjects as specified
    const ownerSubject = `New Enquiry Received — ${data.fullName}`;
    const userSubject = `Your Enquiry Has Been Received — DigitalWebSolutions`;

    // 1. Email HTML template for Website Owner
    const ownerHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0A0B0D; color: #F5F7FA; margin: 0; padding: 20px; }
            .card { max-width: 600px; margin: 0 auto; background: #121316; border: 1px solid #252830; border-radius: 16px; overflow: hidden; }
            .header { background: #191B20; padding: 24px; text-align: center; border-bottom: 2px solid #E2F135; }
            .header h2 { color: #FFFFFF; margin: 0; font-size: 20px; text-transform: uppercase; tracking-wide: 1px; }
            .header p { color: #E2F135; margin: 6px 0 0 0; font-size: 13px; font-weight: bold; }
            .body { padding: 28px; font-size: 14px; line-height: 1.6; }
            .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .table td { padding: 12px 0; border-bottom: 1px solid #252830; }
            .label { font-weight: 600; color: #94A3B8; width: 140px; }
            .value { color: #FFFFFF; font-weight: 500; }
            .message-box { background: #0A0B0D; border: 1px solid #252830; border-radius: 10px; padding: 16px; margin-top: 10px; color: #E2E8F0; white-space: pre-wrap; }
            .footer { background: #0A0B0D; padding: 16px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #252830; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h2>New Lead Alert</h2>
              <p>DigiWebIO Agency Notification</p>
            </div>
            <div class="body">
              <table class="table">
                <tr>
                  <td class="label">Client Name:</td>
                  <td class="value"><strong>${data.fullName}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email Address:</td>
                  <td class="value"><a href="mailto:${data.email}" style="color: #E2F135; text-decoration: none;">${data.email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone Number:</td>
                  <td class="value">${data.phone || "Not provided"}</td>
                </tr>
                ${data.company ? `
                <tr>
                  <td class="label">Company:</td>
                  <td class="value">${data.company}</td>
                </tr>
                ` : ""}
                <tr>
                  <td class="label">Service Required:</td>
                  <td class="value"><span style="background: #191B20; border: 1px solid #252830; padding: 4px 10px; border-radius: 6px; color: #E2F135; font-size: 12px;">${data.service}</span></td>
                </tr>
                <tr>
                  <td class="label">Project Budget:</td>
                  <td class="value">${data.budget}</td>
                </tr>
              </table>

              <div style="margin-top: 20px;">
                <span class="label" style="display: block; margin-bottom: 8px;">Project Details / Message:</span>
                <div class="message-box">${data.description}</div>
              </div>
            </div>
            <div class="footer">
              Automated Notification • DigiWebIO Lead Capture System
            </div>
          </div>
        </body>
      </html>
    `;

    // 2. Email HTML template for User Confirmation
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; color: #2d3748; margin: 0; padding: 20px; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e1e4e8; }
            .header { background: #0A0B0D; padding: 28px; text-align: center; border-bottom: 3px solid #E2F135; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 0.5px; }
            .body { padding: 32px; font-size: 15px; line-height: 1.7; color: #334155; }
            .greeting { font-size: 17px; font-weight: 600; color: #0F172A; margin-bottom: 16px; }
            .highlight-box { background: #F8FAFC; border-left: 4px solid #E2F135; border: 1px solid #E2E8F0; border-left-width: 4px; padding: 16px; border-radius: 8px; margin: 20px 0; font-size: 14px; }
            .signoff { margin-top: 28px; font-weight: 600; color: #0F172A; }
            .footer { background: #F8FAFC; padding: 18px; text-align: center; font-size: 12px; color: #94A3B8; border-top: 1px solid #E2E8F0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>DigitalWebSolutions</h1>
            </div>
            <div class="body">
              <div class="greeting">Hi ${data.fullName},</div>
              <p>Thank you for contacting us. Your enquiry has been successfully received.</p>
              <p>Our team has received your request and will get back to you shortly.</p>
              
              <div class="highlight-box">
                <p style="margin: 0 0 6px 0; font-weight: 600; color: #0F172A;">Submitted Enquiry Summary:</p>
                <p style="margin: 0 0 4px 0;">• <strong>Service:</strong> ${data.service}</p>
                <p style="margin: 0 0 4px 0;">• <strong>Budget:</strong> ${data.budget}</p>
              </div>

              <div class="signoff">
                Thank you,<br />
                <span style="color: #0F172A; font-weight: 700;">DigitalWebSolutions</span>
              </div>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} DigitalWebSolutions. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    // 3. Send both emails using Promise.allSettled so an issue with one recipient does not fail the other
    const [ownerResult, userResult] = await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: ownerEmail,
        subject: ownerSubject,
        html: ownerHtml,
        replyTo: data.email,
      }),
      resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: userSubject,
        html: userHtml,
      }),
    ]);

    const ownerSuccess = ownerResult.status === "fulfilled" && !ownerResult.value.error;
    const userSuccess = userResult.status === "fulfilled" && !userResult.value.error;

    if (!ownerSuccess) {
      const err: any = ownerResult.status === "rejected" ? ownerResult.reason : ownerResult.value?.error;
      if (err?.statusCode === 403 || err?.name === "validation_error") {
        console.warn(
          `[Resend Test Mode Restriction]: Owner email (${ownerEmail}) could not be sent. In Resend test mode without a custom domain, emails can only be sent to the registered Resend account email (developermuskan26@gmail.com).`
        );
      } else {
        console.error("[Resend Owner Email Error]:", err);
      }
    } else {
      console.log("[Resend Owner Email Sent Successfully]:", (ownerResult.value as any)?.data);
    }

    if (!userSuccess) {
      const err: any = userResult.status === "rejected" ? userResult.reason : userResult.value?.error;
      if (err?.statusCode === 403 || err?.name === "validation_error") {
        console.warn(
          `[Resend Test Mode Restriction]: Confirmation email to '${data.email}' was blocked by Resend test limits. To send confirmation emails to external user addresses, verify your domain (e.g. digiwebio.in) at https://resend.com/domains and set RESEND_FROM_EMAIL in .env.local.`
        );
      } else {
        console.error("[Resend User Confirmation Email Error]:", err);
      }
    } else {
      console.log("[Resend User Confirmation Email Sent Successfully]:", (userResult.value as any)?.data);
    }

    return {
      success: ownerSuccess || userSuccess,
      ownerSuccess,
      userSuccess,
    };
  } catch (error: any) {
    console.error("[Resend Sending Exception]:", error);
    return {
      success: false,
      error: error?.message || "Unknown error occurred while sending emails via Resend.",
    };
  }
}
