import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const TO_EMAIL = "info@aokitchens.co.uk";
const BCC_EMAIL = "sampettiford@googlemail.com";
const FROM_EMAIL = "notifications@farehamkitchens.com";

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
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      bcc: [BCC_EMAIL],
      replyTo: email,
      subject,
      text: textLines,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form email error", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}

