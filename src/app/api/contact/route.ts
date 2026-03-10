// app/api/contact/route.ts

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Contact API disabled" }, { status: 503 });
}


// app/api/contact/route.ts
/*
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { sanitize } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

// ----------------------
// Zod schema for validation
// ----------------------
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message too long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ----------------------
    // 1. Validate input
    // ----------------------
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.message },
        { status: 400 },
      );
    }

    const { name, email, message } = parsed.data;

    // ----------------------
    // 2. Send email using Resend
    // ----------------------
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.RESEND_TO_EMAIL!],
      subject: `New message from ${sanitize(name)}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 24px; border-radius: 8px; max-width: 480px; margin: auto;">
          <h2 style="color: #2563eb; margin-bottom: 8px;">New Contact Message</h2>
          <table style="width: 100%; margin-bottom: 16px;">
            <tr>
              <td style="font-weight: bold; width: 80px;">Name:</td>
              <td>${sanitize(name)}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email:</td>
              <td>${sanitize(email)}</td>
            </tr>
          </table>
          <div style="margin-top: 12px;">
            <div style="font-weight: bold; margin-bottom: 4px;">Message:</div>
            <div style="background: #fff; border: 1px solid #e5e7eb; padding: 12px; border-radius: 4px;">
              ${sanitize(message).replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 },
      );
    }

    // ----------------------
    // 3. Success response
    // ----------------------
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
*/
