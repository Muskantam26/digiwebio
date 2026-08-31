import { Resend } from "resend";

export interface SendEnquiryEmailParams {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  createdAt?: string | Date;
}

export async function sendEnquiryNotificationEmail(data: SendEnquiryEmailParams): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[Resend Warning] RESEND_API_KEY is not defined in environment variables.");
    return { success: false, error: "RESEND_API_KEY is not configured" };
  }

  try {
    const resend = new Resend(apiKey);

    const fromEmail = process.env.EMAIL_FROM || process.env.RESEND_FROM_EMAIL || "DigiWebIO <onboarding@resend.dev>";
    const receiverEmail = process.env.ENQUIRY_RECEIVER_EMAIL || process.env.ADMIN_EMAIL || process.env.ENQUIRY_EMAIL || "developermuskan26@gmail.com";

    const formattedDate = data.createdAt
      ? new Date(data.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const subject = "New Enquiry Received — DigiWebIO";

    const textContent = `New enquiry received from DigiWebIO website.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company/Business: ${data.company || "N/A"}
Service: ${data.service}

Message:
${data.message}

Submitted At:
${formattedDate}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0B0D; color: #F5F7FA; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #121316; border: 1px solid #252830; border-radius: 16px; overflow: hidden; }
            .header { background-color: #191B20; padding: 24px; text-align: center; border-bottom: 2px solid #E2F135; }
            .header h2 { color: #FFFFFF; margin: 0; font-size: 20px; }
            .content { padding: 28px; line-height: 1.6; font-size: 14px; }
            .field { margin-bottom: 12px; }
            .label { color: #94A3B8; font-weight: 600; width: 140px; display: inline-block; }
            .value { color: #FFFFFF; font-weight: 500; }
            .message-box { background: #0A0B0D; border: 1px solid #252830; padding: 16px; border-radius: 10px; margin-top: 12px; color: #F5F7FA; white-space: pre-wrap; }
            .footer { background-color: #0A0B0D; padding: 16px; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #252830; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Enquiry Received — DigiWebIO</h2>
            </div>
            <div class="content">
              <p style="margin-top:0;">New enquiry received from DigiWebIO website.</p>
              <div class="field"><span class="label">Name:</span> <span class="value">${data.name}</span></div>
              <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${data.email}" style="color:#E2F135;">${data.email}</a></span></div>
              <div class="field"><span class="label">Phone:</span> <span class="value">${data.phone}</span></div>
              <div class="field"><span class="label">Company/Business:</span> <span class="value">${data.company || "N/A"}</span></div>
              <div class="field"><span class="label">Service:</span> <span class="value">${data.service}</span></div>
              <div style="margin-top:16px;">
                <span class="label">Message:</span>
                <div class="message-box">${data.message}</div>
              </div>
              <div class="field" style="margin-top:16px;"><span class="label">Submitted At:</span> <span class="value">${formattedDate}</span></div>
            </div>
            <div class="footer">
              Automated Notification • DigiWebIO
            </div>
          </div>
        </body>
      </html>
    `;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: receiverEmail,
      replyTo: data.email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    });

    if (resendError) {
      console.error("[Resend Error]:", resendError);
      return { success: false, error: resendError.message };
    }

    console.log("[Resend Email Sent Successfully]:", resendData?.id);
    return { success: true };
  } catch (err: any) {
    console.error("[Email Dispatch Exception]:", err);
    return { success: false, error: err?.message || "Email error" };
  }
}
