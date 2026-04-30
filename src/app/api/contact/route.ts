import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, subject, programme, message } = data;

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const TO_EMAIL = 'formation@ethsun-institute.org';
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
Envoyé depuis ethsun-institute.org
  `.trim();

  if (BREVO_API_KEY) {
    try {
      // Notification to ETHSUN team
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'ETHSUN Institute Website', email: 'noreply@ethsun-institute.org' },
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

      // Auto-confirmation to visitor
      const programmeHtml = programme
        ? `<p style="margin:4px 0 0;font-size:13px"><strong>Programme :</strong> ${programme}</p>`
        : '';

      const confirmHtml = `<div style="font-family:sans-serif;font-size:14px;line-height:1.8;max-width:600px;margin:auto">
        <div style="background:#0F1E44;padding:24px;text-align:center">
          <h2 style="color:#C9A84C;margin:0;font-size:20px">ETHSUN INSTITUTE</h2>
          <p style="color:#fff;font-size:11px;margin:4px 0 0;letter-spacing:2px">PER DOCTRINAM EXCELSIOR</p>
        </div>
        <div style="padding:32px;background:#fff">
          <p>Bonjour <strong>${name}</strong>,</p>
          <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
          <p>Notre équipe vous contactera dans les meilleurs délais <strong>(sous 24h ouvrées)</strong>.</p>
          <div style="background:#f8f9fa;border-left:4px solid #C9A84C;padding:16px;margin:20px 0;border-radius:4px">
            <p style="margin:0;font-size:13px"><strong>Objet :</strong> ${subject}</p>
            ${programmeHtml}
          </div>
          <p>Pour toute urgence, contactez-nous sur WhatsApp : <a href="https://wa.me/447424201585" style="color:#0F1E44;font-weight:bold">+447424201585</a></p>
        </div>
        <div style="background:#f0f0f0;padding:16px;text-align:center;font-size:11px;color:#666">
          <p style="margin:0">ETHSUN Institute — formation@ethsun-institute.org — +225 05 45 61 30 35</p>
          <p style="margin:4px 0 0">sous licence ETHSUN EXECUTIVE EDUCATION OXFORD</p>
        </div>
      </div>`;

      const confirmText = `Bonjour ${name},\n\nNous avons bien reçu votre message. Notre équipe vous contactera sous 24h ouvrées.\n\nObjet : ${subject}${programme ? '\nProgramme : ' + programme : ''}\n\nWhatsApp urgence : +447424201585\n\nCordialement,\nL'équipe ETHSUN Institute`;

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: 'ETHSUN Institute', email: 'formation@ethsun-institute.org' },
          to: [{ email, name }],
          subject: `ETHSUN Institute — Confirmation de réception de votre message`,
          textContent: confirmText,
          htmlContent: confirmHtml,
        }),
      });
    } catch (e) {
      console.error('Email send error:', e);
    }
  }

  return NextResponse.json({ success: true });
}
