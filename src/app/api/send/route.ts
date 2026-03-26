import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const e_mail = process.env.GMAIL_ACCOUNT!;

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const { name, email, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Note: onboarding@resend.dev only sends to your verified email
            to: e_mail,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h2>New Message from ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ data }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}