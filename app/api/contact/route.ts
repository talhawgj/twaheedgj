import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  // Lazy init — runs only at request time, never during `next build` page-data collection
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }
  const resend = new Resend(apiKey);
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "talhawaheed7807@gmail.com";

  try {
    const body: ContactBody = await req.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name?.trim() || name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!subject?.trim()) {
      return NextResponse.json({ error: "Please select a subject." }, { status: 400 });
    }
    if (!message?.trim() || message.trim().length < 20) {
      return NextResponse.json({ error: "Message must be at least 20 characters." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #eab308; margin: 0 0 24px 0; font-size: 20px;">New Portfolio Enquiry</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; width: 90px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #f1f5f9; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #f1f5f9;"><a href="mailto:${email}" style="color: #eab308;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #f1f5f9;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #0f172a; border-radius: 8px; border: 1px solid #1e293b;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="color: #e2e8f0; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; color: #475569; font-size: 12px;">
            Sent via Talha Waheed's portfolio contact form. Reply directly to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
