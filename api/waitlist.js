// Vercel serverless function — saves a waitlist signup to Supabase.
// Runs server-side only; the Supabase service-role key is never exposed to the browser.
//
// Required environment variables (set in the Vercel dashboard):
//   SUPABASE_URL                — e.g. https://xxxxxxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY   — the "service_role" secret key (Settings → API)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  // Vercel parses JSON bodies automatically, but guard for string bodies too.
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }

  const email = (body?.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'invalid_email' });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('Supabase env vars are missing (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY).');
    return res.status(500).json({ error: 'not_configured' });
  }

  try {
    const resp = await fetch(`${url}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        // Ignore re-signups of the same email instead of erroring (needs a UNIQUE constraint).
        Prefer: 'return=minimal,resolution=ignore-duplicates',
      },
      body: JSON.stringify({
        email,
        source: 'website',
        lang: typeof body?.lang === 'string' ? body.lang.slice(0, 5) : null,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error('Supabase insert failed:', resp.status, detail);
      return res.status(502).json({ error: 'save_failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Waitlist handler error:', err);
    return res.status(500).json({ error: 'server_error' });
  }
}
