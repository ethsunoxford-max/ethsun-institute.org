import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, subject, programme, message } = data;

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const TO_EMAIL = 'formation@ethsun-institute.com';
  const CC_EMAIL = 'ethsuninstitute@gmail.com';

  const emailBody = `
Nouveau message depuis le site ETHSUN Institute

Nom : ${name}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Objet : ${subject}
Programme d'intérêt : ${programme || 'Non spécifié'}

Message :
${message}

---
Envoyé depuis ethsun-institute.com
  `.trim();

  if (BREVO_API_KEY) {
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'ETHSUN Institute Website', email: 'noreply@ethsun-institute.com' },
          to: [{ email: TO_EMAIL, name: 'ETHSUN Formations' }],
          cc: [{ email: CC_EMAIL, name: 'ETHSUN Institute' }],
          replyTo: { email, name },
          subject: `Nouveau message de ${name} — ${subject}`,
          textContent: emailBody,
          htmlContent: `<pre style="font-family:sans-serif;font-size:14px;line-height:1.6">${emailBody.replace(/</g,'&lt;')}</pre>`,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error('Brevo error:', err);
      }
    } catch (e) {
      console.error('Email send error:', e);
    }
  }

  return NextResponse.json({ success: true });
}
