import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const TO_EMAIL = "info@aokitchens.co.uk";
const BCC_EMAIL = "sampettiford@googlemail.com";
// Use environment variable if set, otherwise fallback to verified domain
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "info@farehamkitchens.co.uk";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Log API key status (without exposing the key)
  console.log("Resend API Key present:", !!resendApiKey);
  console.log("Resend client initialized:", !!resend);
  console.log("FROM_EMAIL:", FROM_EMAIL);
  console.log("TO_EMAIL:", TO_EMAIL);

  if (!resend) {
    console.error("Resend client not initialized - RESEND_API_KEY is missing or invalid");
    return res.status(500).json({ 
      error: "Email service not configured",
      details: "RESEND_API_KEY environment variable is missing or invalid"
    });
  }

  const { name, email, phone, projectType, message, recaptchaToken } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    message?: string;
    recaptchaToken?: string;
  };

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Verify reCAPTCHA token
  if (recaptchaToken) {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      try {
        const verifyResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
          { method: "POST" }
        );
        const verifyData = await verifyResponse.json();
        
        if (!verifyData.success) {
          console.error("reCAPTCHA verification failed:", verifyData);
          return res.status(400).json({ error: "reCAPTCHA verification failed" });
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return res.status(500).json({ error: "Failed to verify reCAPTCHA" });
      }
    }
  }

  const subject = "New Enquiry From Fareham Kitchens";
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
    console.log("Attempting to send email via Resend...");
    console.log("Email payload:", {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      bcc: BCC_EMAIL,
      replyTo: email,
      subject,
      textLength: textLines.length,
    });

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      bcc: [BCC_EMAIL],
      replyTo: email,
      subject,
      text: textLines,
    });

    console.log("Email sent successfully:", JSON.stringify(result, null, 2));

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Contact form email error - Full error object:", error);
    console.error("Error type:", typeof error);
    console.error("Error constructor:", error?.constructor?.name);
    
    // Log more detailed error information
    if (error?.message) {
      console.error("Error message:", error.message);
    }
    if (error?.response) {
      console.error("Error response:", JSON.stringify(error.response, null, 2));
    }
    if (error?.statusCode) {
      console.error("Error status code:", error.statusCode);
    }
    if (error?.name) {
      console.error("Error name:", error.name);
    }

    // Return more detailed error information
    const errorMessage = error?.message || "Failed to send message";
    const errorDetails = {
      message: errorMessage,
      name: error?.name,
      statusCode: error?.statusCode,
      ...(process.env.NODE_ENV === 'development' && {
        fullError: error?.toString(),
        stack: error?.stack,
      }),
    };

    return res.status(500).json({ 
      error: errorMessage,
      details: errorDetails
    });
  }
}

