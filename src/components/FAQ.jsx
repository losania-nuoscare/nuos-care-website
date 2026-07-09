import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';

export default function FAQ() {
  const { t } = useLang();
  const items = t('faq.items');
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="eyebrow">
              <span className="dot"></span>
              {t('faq.eyebrow')}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2>{t('faq.headline')}</h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="faq-list">
            {items.map((it, i) => (
              <div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="faq-q">
                  <span>{it.q}</span>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">{it.a}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
