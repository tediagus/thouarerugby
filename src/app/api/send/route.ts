// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Thouare rugby <thouareRugby@gmail.com>',
            to: ['thouareRugby@gmail.com'],
            subject: 'Réponse au sondage',
            react: (
                <>
                <p>email body</ p >
            </>
        ),
    });

    return NextResponse.json(data);
} catch (error) {
    return NextResponse.json({ error });
}
}
