import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import { WAITLIST_FORM_URL, trackWaitlistClick } from '../config.js';

export default function Waitlist() {
  const { t, lang } = useLang();

  return (
    <section className="section waitlist-section" id="waitlist">
      <div className="container">
        <Reveal>
          <div className="waitlist-card">
            <span className="eyebrow">
              <span className="dot"></span>
              {t('waitlist.eyebrow')}
            </span>
            <h2>{t('waitlist.headline')}</h2>
            <p>{t('waitlist.subheadline')}</p>
            <a
              className="btn btn-primary waitlist-cta"
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWaitlistClick(lang)}
            >
              {t('waitlist.button')}
            </a>
            <div className="waitlist-meta">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon.Verified /> {t('waitlist.meta1')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon.Heart /> {t('waitlist.meta2')}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
