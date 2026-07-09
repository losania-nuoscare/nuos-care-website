import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import PhoneAppPreview from './PhoneAppPreview.jsx';
import PartnerMockup from './PartnerMockup.jsx';
import DevelopmentMockup from './DevelopmentMockup.jsx';

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="section" id="how" style={{ background: '#F9F7F5' }}>
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="eyebrow">
              <span className="dot"></span>
              {t('how.eyebrow')}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2>{t('how.headline')}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p>{t('how.subheadline')}</p>
          </Reveal>
        </div>

        {/* Step 1 — Smart Matching */}
        <div className="feature-row">
          <Reveal>
            <div className="feature-text">
              <span className="eyebrow">
                <span className="dot"></span>
                {t('how.step1.label')}
              </span>
              <h3>{t('how.step1.headline')}</h3>
              <p style={{ marginBottom: 0 }}>{t('how.step1.description')}</p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="feature-visual">
              <div className="phone" style={{ width: 280, animation: 'floatYSlow 7s ease-in-out infinite' }}>
                <div className="notch"></div>
                <div className="phone-screen" style={{ minHeight: 520 }}>
                  <PhoneAppPreview />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Step 2 — NUOS Partner */}
        <div className="feature-row reverse">
          <Reveal>
            <div className="feature-text">
              <span className="eyebrow">
                <span className="dot"></span>
                {t('how.step2.label')}
              </span>
              <h3>{t('how.step2.headline')}</h3>
              <p style={{ marginBottom: 0 }}>{t('how.step2.description')}</p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="feature-visual">
              <PartnerMockup />
            </div>
          </Reveal>
        </div>

        {/* Step 3 — Child Development Intelligence */}
        <div className="feature-row">
          <Reveal>
            <div className="feature-text">
              <span className="eyebrow">
                <span className="dot"></span>
                {t('how.step3.label')}
              </span>
              <h3>{t('how.step3.headline')}</h3>
              <p style={{ marginBottom: 0 }}>{t('how.step3.description')}</p>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="feature-visual">
              <DevelopmentMockup />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
