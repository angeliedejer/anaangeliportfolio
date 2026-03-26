import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("messages").insert({
      name,
      email,
      subject,
      message,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    // Send email via Resend if API key is available
    if (resend) {
      const { error: emailError } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "angeliedejer@gmail.com",
        replyTo: email,
        subject: `[Portfolio Contact] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="padding: 20px; border-left: 4px solid #3b82f6;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent from your portfolio contact form. You can reply directly to this email to respond to ${name}.
            </p>
          </div>
        `,
      });

      if (emailError) {
        console.error("Email error:", emailError);
        // Still return success since message was saved to database
        return NextResponse.json({
          success: true,
          warning: "Message saved but email notification failed",
        });
      }
    } else {
      console.warn("Resend API key missing. Email not sent.");
      return NextResponse.json({
        success: true,
        warning: "Message saved but email notification skipped (API key missing)",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
