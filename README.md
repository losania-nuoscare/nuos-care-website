# NUOS Care — Website

Bilingual (Bahasa Indonesia / English) marketing site for NUOS Care, built with **React + Vite + Tailwind CSS**. Rebuilt from the Claude Design Kit export.

## Highlights

- **Language toggle** in the navbar (and footer) switches between **EN** and **ID**. Default is **Bahasa Indonesia**. The choice is persisted to `localStorage`.
- All copy lives in [`src/i18n/en.json`](src/i18n/en.json) and [`src/i18n/id.json`](src/i18n/id.json), which share identical keys.
- **Prices always display in IDR** regardless of the active language.
- **Scroll animations** via `IntersectionObserver` ([`src/components/Reveal.jsx`](src/components/Reveal.jsx)): fade + slide-up on entry, `ease-out` 400ms, cards stagger by 100ms.
- NUOS brand names (NUOS Match, NUOS Partner, NUOS Tumbuh, NUOS.AI), caregiver names, and the WHO / BPJS acronyms are never translated.
- **Signups** ("Find your match" buttons) open a **Google Form** in a new tab; Google collects responses and sends the confirmation email. The form URL lives in [`src/config.js`](src/config.js), which also fires a GA4 `generate_lead` conversion on click.

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

## Signups (Google Form)

The "Find your match" buttons (navbar, hero, and the bottom section) open a Google
Form in a new tab. Google stores responses in its own Sheet and sends the responder
a confirmation email (Form → Settings → Responses → "Send responders a copy").

- **To change the form:** edit `WAITLIST_FORM_URL` in [`src/config.js`](src/config.js).
- **Ads tracking:** clicking a button fires a GA4 `generate_lead` event
  (`trackWaitlistClick` in the same file), which you can mark as a Key event and
  import into Google Ads as a conversion.

There is no backend/database to run — the earlier Supabase + email function was
removed once signups moved to the Google Form.

## Structure

```
src/
  App.jsx                    # section composition
  main.jsx                   # entry + LanguageProvider
  config.js                  # Google Form URL + GA4 conversion helper
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
public/assets/               # logo + caregiver/child photos (optimized)
docs/
  NUOS_Bilingual_Content_EN_ID.md   # source spec for all EN/ID copy
vercel.json                  # Vercel framework + routing config
```

> `design-reference/` (the original design HTML + handoff bundle) is kept locally
> for reference but is git-ignored — it's heavy and not needed to build or deploy.
