// Central config for the Batch 1 signup (Google Form).
export const WAITLIST_FORM_URL = 'https://forms.gle/kxdEh2ktndSLJ27Y6';

// Fire a GA4 conversion when someone clicks a "Join Batch 1" button.
// The form itself lives on Google, so this click is the trackable conversion
// for Google Ads. Safe to call even if GA hasn't loaded yet.
export function trackWaitlistClick(lang) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { method: 'batch_1', language: lang });
  }
}
