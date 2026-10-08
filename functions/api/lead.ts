/**
 * Cloudflare Pages Function — receives leads from the /b2b-case-study-writer/ form.
 *
 * No lead-capture backend exists elsewhere on the site today: /contact/ only offers a
 * Calendly popup and a mailto link, there is no <form> anywhere in the repo to reuse. This is
 * new, minimal infrastructure rather than a reused mechanism — see the landing page build
 * summary for what needs setting up in the Cloudflare Pages dashboard before leads actually
 * arrive by email.
 *
 * Sends via Resend (https://resend.com) when RESEND_API_KEY is set. When it isn't, the email
 * send is skipped (not treated as a failure — the page still works end to end) but the full
 * lead is logged via console so nothing is silently lost while email delivery isn't wired up.
 *
 * No npm dependency added for this: Cloudflare Pages Functions run independently of the Astro
 * build, and the Fetch API types already come from the project's existing "dom" lib.
 */

interface Env {
  RESEND_API_KEY?: string;
  LEAD_TO_EMAIL?: string;
  LEAD_FROM_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface LeadPayload {
  name?: string;
  email?: string;
  company?: string;
  hasCustomer?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landingPageUrl?: string;
  referrer?: string;
}

const REQUIRED_FIELDS: (keyof LeadPayload)[] = ['name', 'email', 'hasCustomer'];

const ATTRIBUTION_ROWS: [string, keyof LeadPayload][] = [
  ['Company website', 'company'],
  ['Has a customer in mind?', 'hasCustomer'],
  ['Landing page', 'landingPageUrl'],
  ['Referrer', 'referrer'],
  ['gclid', 'gclid'],
  ['gbraid', 'gbraid'],
  ['wbraid', 'wbraid'],
  ['utm_source', 'utm_source'],
  ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'],
  ['utm_term', 'utm_term'],
  ['utm_content', 'utm_content'],
];

function escapeHtml(value: string): string {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return value.replace(/[&<>"']/g, (c) => map[c]);
}

async function parsePayload(request: Request): Promise<LeadPayload> {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return (await request.json()) as LeadPayload;
  }
  const form = await request.formData();
  const out: Record<string, string> = {};
  for (const [key, value] of form.entries()) {
    out[key] = String(value);
  }
  return out as LeadPayload;
}

function renderLeadHtml(p: LeadPayload): string {
  const rows = ATTRIBUTION_ROWS.filter(([, key]) => p[key]);
  const body = rows
    .map(([label, key]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(String(p[key]))}</td></tr>`)
    .join('');
  return `<p><strong>${escapeHtml(p.name || '')}</strong> (${escapeHtml(p.email || '')})</p><table>${body}</table>`;
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const { request, env } = context;
  const wantsJson = (request.headers.get('accept') || '').includes('application/json');

  let payload: LeadPayload;
  try {
    payload = await parsePayload(request);
  } catch {
    return wantsJson
      ? Response.json({ ok: false, error: 'Could not read submission' }, { status: 400 })
      : new Response('Bad request', { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return wantsJson
      ? Response.json({ ok: false, error: `Missing: ${missing.join(', ')}` }, { status: 400 })
      : new Response('Missing required fields', { status: 400 });
  }

  const toEmail = env.LEAD_TO_EMAIL || 'jon@bestcasestud.io';
  const fromEmail = env.LEAD_FROM_EMAIL || 'leads@bestcasestud.io';

  if (env.RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmail,
          reply_to: payload.email,
          subject: `New Proof Kit lead: ${payload.name}`,
          html: renderLeadHtml(payload),
        }),
      });
      if (!res.ok) {
        console.error('Resend returned an error', res.status, await res.text());
      }
    } catch (err) {
      console.error('Lead email send failed', err);
    }
  } else {
    console.log('RESEND_API_KEY not set — lead captured but not emailed:', JSON.stringify(payload));
  }

  if (wantsJson) {
    return Response.json({ ok: true });
  }
  return Response.redirect(new URL('/b2b-case-study-writer/thanks/', request.url).toString(), 303);
}
