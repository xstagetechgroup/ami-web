import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);
const TO_EMAIL = process.env.TO_EMAIL ?? 'geral@ami.org.ao';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'AMI <no-reply@ami.org.ao>';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body ?? {};

        // validação simples
        if (!email || !message) {
            return NextResponse.json({ success: false, error: 'Campos inválidos' }, { status: 400 });
        }

        const subjectText = subject || `Contacto via site — ${name ?? 'Visitante'}`;

        const html = `
      <h2>Novo contacto via site</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

        // NOTE: a SDK Node usa replyTo (camelCase) — o Resend aceita reply_to na REST; aqui usamos replyTo.
        const { data } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: subjectText,
            html,
            replyTo: email, // garante que respostas vão para o e-mail do utilizador
        });

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err: unknown) {
        console.error('API /api/contact error:', err);
        return NextResponse.json({ success: false, error: (err as Error)?.message ?? 'Erro' }, { status: 500 });
    }
}

// pequena função para escapar HTML e evitar injection
function escapeHtml(unsafe: string | undefined) {
    if (!unsafe) return '';
    return unsafe
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
