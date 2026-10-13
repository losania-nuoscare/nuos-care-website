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

// WhatsApp Business number (international format, no "+" or leading 0).
export const WHATSAPP_NUMBER = '628118192026';

// Build a wa.me link with a prefilled message.
export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// GA4 event for WhatsApp clicks, tagged with where the click came from.
export function trackWhatsAppClick(location, lang) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'contact', { method: 'whatsapp', location, language: lang });
  }
}
