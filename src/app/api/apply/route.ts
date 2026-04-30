import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const nom = formData.get('nom') as string;
  const prenom = formData.get('prenom') as string;
  const email = formData.get('email') as string;
  const telephone = (formData.get('telephone') as string) || 'Non renseigné';
  const poste = formData.get('poste') as string;
  const cv = formData.get('cv') as File | null;
  const lettre = formData.get('lettre') as File | null;

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  const attachments: { content: string; name: string }[] = [];
  if (cv && cv.size > 0) {
    const buf = await cv.arrayBuffer();
    attachments.push({ content: Buffer.from(buf).toString('base64'), name: cv.name });
  }
  if (lettre && lettre.size > 0) {
    const buf = await lettre.arrayBuffer();
    attachments.push({ content: Buffer.from(buf).toString('base64'), name: lettre.name });
  }

  const bodyText = `
Nouvelle candidature — ETHSUN Institute

Poste : ${poste}
Prénom : ${prenom}
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}

Pièces jointes :
${attachments.length > 0 ? attachments.map(a => `- ${a.name}`).join('\n') : '- Aucune pièce jointe'}

---
Envoyé depuis ethsun-institute.org
  `.trim();

  if (BREVO_API_KEY) {
    try {
      const payload: Record<string, unknown> = {
        sender: { name: 'ETHSUN Institute Website', email: 'noreply@ethsun-institute.org' },
        to: [{ email: 'formation@ethsun-institute.org', name: 'ETHSUN Formations' }],
        cc: [{ email: 'ethsuninstitute@gmail.com', name: 'ETHSUN Institute' }],
        replyTo: { email, name: `${prenom} ${nom}` },
        subject: `Candidature — ${poste} — ${prenom} ${nom}`,
        textContent: bodyText,
        htmlContent: `<pre style="font-family:sans-serif;font-size:14px;line-height:1.6">${bodyText.replace(/</g, '&lt;')}</pre>`,
      };
      if (attachments.length > 0) payload.attachment = attachments;

      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) console.error('Brevo apply error:', await res.text());
    } catch (e) {
      console.error('Apply email error:', e);
    }
  }

  return NextResponse.json({ success: true });
}
