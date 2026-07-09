# NUOS Care — Website

Bilingual (Bahasa Indonesia / English) marketing site for NUOS Care, built with **React + Vite + Tailwind CSS**. Rebuilt from the Claude Design Kit export.

## Highlights

- **Language toggle** in the navbar (and footer) switches between **EN** and **ID**. Default is **Bahasa Indonesia**. The choice is persisted to `localStorage`.
- All copy lives in [`src/i18n/en.json`](src/i18n/en.json) and [`src/i18n/id.json`](src/i18n/id.json), which share identical keys.
- **Prices always display in IDR** regardless of the active language.
- **Scroll animations** via `IntersectionObserver` ([`src/components/Reveal.jsx`](src/components/Reveal.jsx)): fade + slide-up on entry, `ease-out` 400ms, cards stagger by 100ms.
- NUOS brand names (NUOS Match, NUOS Partner, NUOS Tumbuh, NUOS.AI), caregiver names, and the WHO / BPJS acronyms are never translated.
- **Waitlist signups** are saved to a Supabase (Postgres) table via a serverless function ([`api/waitlist.js`](api/waitlist.js)). See [Waitlist database](#waitlist-database-supabase).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy (Vercel)

The repo is Vercel-ready. Import the project and Vercel auto-detects Vite
(build `npm run build`, output `dist`). [`vercel.json`](vercel.json) pins the
framework and adds a SPA rewrite. Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Waitlist database (Supabase)

Signups from the waitlist form are POSTed to `/api/waitlist`, a Vercel serverless
function that inserts the email into a Supabase table. The Supabase **service-role**
key lives only on the server (never shipped to the browser).

**One-time setup (~5 min):**

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase dashboard → **SQL Editor**, run the contents of
   [`supabase-schema.sql`](supabase-schema.sql) (creates the `waitlist` table).
3. In Supabase → **Settings → API**, copy the **Project URL** and the
   **`service_role`** key.
4. In Vercel → your project → **Settings → Environment Variables**, add:
   - `SUPABASE_URL` = the Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = the service_role key
5. Redeploy. Signups now land in Supabase → **Table Editor → waitlist** (browse /
   export from there).

**Testing locally:** `npm run dev` (Vite) does **not** run the `/api` function, so
the form will report an error locally. To test the full flow, copy `.env.example`
to `.env`, fill in the two values, and run `vercel dev` instead. Otherwise it just
works once deployed to Vercel with the env vars set. Duplicate emails are ignored
gracefully (the `email` column is `UNIQUE`).

## Structure

```
src/
  App.jsx                    # section composition
  main.jsx                   # entry + LanguageProvider
  index.css                  # design tokens + component styles (Tailwind layered)
  i18n/
    LanguageContext.jsx      # lang state, t() helper, default = id
    en.json / id.json        # translation strings
  components/
    Header.jsx               # navbar + language toggle
    Hero.jsx, PhoneAppPreview.jsx
    HowItWorks.jsx           # 3 feature rows: Smart Matching / NUOS Partner / Child Development
    PartnerMockup.jsx, DevelopmentMockup.jsx
    WhyNUOS.jsx, Pricing.jsx, FAQ.jsx, Waitlist.jsx, Footer.jsx
    Reveal.jsx               # IntersectionObserver scroll animation
    Icon.jsx                 # inline SVG icons
api/
  waitlist.js                # Vercel serverless function → inserts email into Supabase
public/assets/               # logo + caregiver/child photos (optimized)
docs/
  NUOS_Bilingual_Content_EN_ID.md   # source spec for all EN/ID copy
supabase-schema.sql          # run once in Supabase to create the waitlist table
.env.example                 # SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY template
vercel.json                  # Vercel framework + routing config
```

> `design-reference/` (the original design HTML + handoff bundle) is kept locally
> for reference but is git-ignored — it's heavy and not needed to build or deploy.
