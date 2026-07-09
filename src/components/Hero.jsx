import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';
import PhoneAppPreview from './PhoneAppPreview.jsx';

export default function Hero({ onCTA }) {
  const { t } = useLang();
  const em = t('hero.headlineEm');

  return (
    <section className="hero" id="top">
      <span className="hero-blob b1" aria-hidden="true"></span>
      <span className="hero-blob b2" aria-hidden="true"></span>
      <div className="container hero-grid">
        <div>
          <Reveal delay={1}>
            <h1>
              {t('hero.headlinePre')}{' '}
              {em ? (
                <>
                  <em>{em}</em>{' '}
                </>
              ) : null}
              <span className="h-grad serif">{t('hero.headlineGrad')}</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead">{t('hero.subheadline')}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={onCTA}>
                {t('hero.ctaPrimary')}
              </button>
              <a href="#how" className="btn btn-ghost">
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon" style={{ color: '#3A7FB5' }}>
                  <Icon.Shield />
                </span>
                {t('hero.trust1')}
              </div>
              <div className="trust-item">
                <span className="trust-icon" style={{ color: '#A78BFA' }}>
                  <Icon.Sparkle />
                </span>
                {t('hero.trust2')}
              </div>
              <div className="trust-item">
                <span className="trust-icon" style={{ color: '#E76A8B' }}>
                  <Icon.Heart />
                </span>
                {t('hero.trust3')}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Phone */}
        <Reveal delay={2}>
          <div className="phone-stage">
            <div className="phone">
              <div className="notch"></div>
              <div className="phone-screen">
                <PhoneAppPreview />
              </div>
            </div>

            <div className="float-card" style={{ top: 60, left: -40 }}>
              <div className="ico" style={{ background: '#E8F5EF', color: '#1f7a4d' }}>
                <Icon.Verified />
              </div>
              <div>
                <div className="label">{t('ui.floatCheck')}</div>
                <div className="value">{t('ui.floatCheckVal')}</div>
              </div>
            </div>

            <div className="float-card" style={{ bottom: 90, right: -56, animationDelay: '1.2s' }}>
              <div className="ico" style={{ background: '#FCE4EC', color: '#E76A8B' }}>
                <Icon.Heart />
              </div>
              <div>
                <div className="label">{t('ui.floatMatch')}</div>
                <div className="value">{t('ui.floatMatchVal')}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
