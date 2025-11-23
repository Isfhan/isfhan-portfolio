import { NextRequest, NextResponse } from "next/server";
import { portfolioData } from "@/lib/data";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // TODO: Implement actual email sending here
        // Options:
        // 1. Use Resend: https://resend.com/docs/send-with-nextjs
        // 2. Use SendGrid: https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send
        // 3. Use Nodemailer with SMTP
        // 4. Use a form service like Formspree or Web3Forms

        // For now, log the form submission (replace with actual email sending)
        console.log("Contact form submission:", {
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
        });

        // Simulate email sending success
        // In production, replace this with actual email sending logic
        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully! We'll get back to you soon.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
