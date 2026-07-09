import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';

export default function WhyNUOS() {
  const { t } = useLang();
  const cards = [
    { key: 'card1', icon: <Icon.Shield /> },
    { key: 'card2', icon: <Icon.Heart /> },
    { key: 'card3', icon: <Icon.Brain /> },
  ];

  return (
    <section className="section" id="why" style={{ background: '#F9F7F5' }}>
      <div className="container">
        <div className="section-header">
          <Reveal>
            <span className="eyebrow">
              <span className="dot"></span>
              {t('why.eyebrow')}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2>{t('why.headline')}</h2>
          </Reveal>
        </div>
        <div className="pillars">
          {cards.map((c, i) => (
            <Reveal key={c.key} delay={i + 1}>
              <div className="pillar pillar-why">
                <div className="pillar-icon">{c.icon}</div>
                <span className="eyebrow">{t(`why.${c.key}.tag`)}</span>
                <h3>{t(`why.${c.key}.headline`)}</h3>
                <p>{t(`why.${c.key}.description`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
