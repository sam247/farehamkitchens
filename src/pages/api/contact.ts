import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const TO_EMAIL = "sam@betterranking.co.uk";
const BCC_EMAIL = "sampettiford@googlemail.com";
// Use environment variable if set, otherwise fallback to verified domain
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "info@farehamkitchens.co.uk";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!resend) {
    return res.status(500).json({ error: "Email service not configured" });
  }

  const { name, email, phone, projectType, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const subject = `New enquiry from ${name}`;
  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    projectType ? `Project Type: ${projectType}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      bcc: [BCC_EMAIL],
      replyTo: email,
      subject,
      text: textLines,
    });

    console.log("Email sent successfully:", result);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Contact form email error:", error);
    
    // Log more detailed error information
    if (error?.message) {
      console.error("Error message:", error.message);
    }
    if (error?.response) {
      console.error("Error response:", error.response);
    }

    // Return more detailed error in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error?.message || "Failed to send message"
      : "Failed to send message";

    return res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}

