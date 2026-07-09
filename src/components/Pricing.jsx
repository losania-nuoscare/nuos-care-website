import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';

export default function Pricing() {
  const { t } = useLang();

  const cards = [
    { key: 'step1', accent: false, type: 'desc' },
    { key: 'step2', accent: false, type: 'desc' },
    { key: 'step3', accent: true, type: 'features' },
  ];

  return (
    <section className="section" id="pricing" style={{ background: '#F9F7F5' }}>
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="eyebrow">
              <span className="dot"></span>
              {t('pricing.eyebrow')}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2>{t('pricing.headline')}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p>{t('pricing.subheadline')}</p>
          </Reveal>
        </div>
        <div className="pricing-grid">
          {cards.map((c, i) => (
            <Reveal key={c.key} delay={i + 1}>
              <div className={`price-card ${c.accent ? 'accent' : ''}`}>
                <span className="price-step">{t(`pricing.${c.key}.stepLabel`)}</span>
                <div className="price-name serif">{t(`pricing.${c.key}.name`)}</div>
                {/* Prices always in IDR, regardless of language */}
                <div className="price-big serif">{t(`pricing.${c.key}.price`)}</div>
                <p className="price-note">{t(`pricing.${c.key}.note`)}</p>

                {c.type === 'features' ? (
                  <ul className="price-features price-features-rich">
                    {[1, 2, 3, 4].map((n) => (
                      <li key={n}>
                        <Icon.Check style={{ width: 16, height: 16 }} />
                        <span>{t(`pricing.${c.key}.feature${n}`)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="price-desc">{t(`pricing.${c.key}.description`)}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
