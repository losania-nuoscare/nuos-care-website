import { useLang } from '../i18n/LanguageContext.jsx';
import { whatsappUrl, trackWhatsAppClick } from '../config.js';
import Icon from './Icon.jsx';

// Floating WhatsApp button, fixed bottom-right on every screen size.
export default function WhatsAppFloat() {
  const { t, lang } = useLang();
  return (
    <a
      className="wa-float"
      href={whatsappUrl(t('whatsapp.message'))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.floatLabel')}
      onClick={() => trackWhatsAppClick('floating', lang)}
    >
      <Icon.WA style={{ width: 28, height: 28 }} />
      <span className="wa-float-label">{t('whatsapp.floatLabel')}</span>
    </a>
  );
}
