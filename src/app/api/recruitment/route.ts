// app/api/recruitment/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'AMI <no-reply@ami.org.ao>';

type RecruitmentFormData = {
    name: string;
    email: string;
    message: string;
    cv: File;
};

function parseFormData(formData: FormData): RecruitmentFormData {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const cv = formData.get('cv');

    if (typeof name !== 'string' || !name.trim()) {
        throw new Error('Nome inválido.');
    }
    if (typeof email !== 'string' || !email.trim()) {
        throw new Error('Email inválido.');
    }
    if (typeof message !== 'string') {
        throw new Error('Mensagem inválida.');
    }
    if (!(cv instanceof File)) {
        throw new Error('Arquivo do currículo ausente ou inválido.');
    }

    return { name, email, message, cv };
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const { name, email, message, cv } = parseFormData(formData);

        const arrayBuffer = await cv.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        await resend.emails.send({
            from: FROM_EMAIL, // remetente configurado
            to: 'recrutamento@ami.org.ao',
            subject: `Nova Candidatura - ${name}`,
            html: `
        <h2>Nova candidatura recebida</h2>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensagem:</b> ${message}</p>
      `,
            attachments: [
                {
                    filename: cv.name,
                    content: buffer.toString('base64'),
                },
            ],
            replyTo: email, // opcional: para que "Responder" vá ao candidato
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        // `err` é unknown → converter para Error seguro
        const message =
            err instanceof Error ? err.message : 'Erro inesperado ao processar candidatura.';
        console.error(err);
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}
