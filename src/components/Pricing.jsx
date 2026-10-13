import { useLang } from '../i18n/LanguageContext.jsx';
import { WAITLIST_FORM_URL, trackWaitlistClick } from '../config.js';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';

export default function Pricing() {
  const { t, lang } = useLang();

  const cards = [
    { key: 'step1', accent: false, type: 'desc' },
    { key: 'step2', accent: false, type: 'desc' },
    { key: 'step3', accent: true, type: 'features' },
  ];

  // Optional keys: return null instead of the raw path when missing.
  const opt = (path) => {
    const v = t(path);
    return v === path ? null : v;
  };

  const example = t('pricing.example');

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
          {cards.map((c, i) => {
            const badge = opt(`pricing.${c.key}.badge`);
            const suffix = opt(`pricing.${c.key}.priceSuffix`);
            const footnote = opt(`pricing.${c.key}.footnote`);
            return (
              <Reveal key={c.key} delay={i + 1}>
                <div className={`price-card ${c.accent ? 'accent' : ''}`}>
                  {badge && <span className="price-badge">{badge}</span>}
                  <span className="price-step">{t(`pricing.${c.key}.stepLabel`)}</span>
                  <div className="price-name serif">{t(`pricing.${c.key}.name`)}</div>
                  {/* Prices always in IDR, regardless of language */}
                  <div className="price-big serif">{t(`pricing.${c.key}.price`)}</div>
                  {suffix && <div className="price-suffix">{suffix}</div>}
                  <p className="price-note">{t(`pricing.${c.key}.note`)}</p>

                  {c.type === 'features' ? (
                    <>
                      <ul className="price-features price-features-rich">
                        {t(`pricing.${c.key}.features`).map((f) => (
                          <li key={f}>
                            <Icon.Check style={{ width: 16, height: 16 }} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {footnote && <p className="price-footnote">{footnote}</p>}
                    </>
                  ) : (
                    <p className="price-desc">{t(`pricing.${c.key}.description`)}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="price-example">
            <div className="price-example-title">{example.title}</div>
            <dl className="price-example-rows">
              {example.rows.map(([label, value]) => (
                <div className="price-example-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div className="price-example-row total">
                <dt>{example.totalLabel}</dt>
                <dd>{example.total}</dd>
              </div>
            </dl>
            <p className="price-example-note">{example.note}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="pricing-cta">
            <a
              className="btn btn-primary waitlist-cta"
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWaitlistClick(lang)}
            >
              {t('nav.cta')}
            </a>
            <p className="pricing-legal">{t('pricing.legal')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
