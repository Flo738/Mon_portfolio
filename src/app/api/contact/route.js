import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const { name, email, message } = await request.json()

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'pacardflo02@gmail.com',
            subject: `Nouveau message de ${name}`,
            html: `
                <h2>Nouveau message de contact</h2>
                <p><strong>Nom:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Erreur' }, { status: 500 })
    }
}