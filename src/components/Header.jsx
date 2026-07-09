import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Header({ onCTA }) {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    [t('nav.howItWorks'), '#how'],
    [t('nav.whyNuos'), '#why'],
    [t('nav.pricing'), '#pricing'],
    [t('nav.faq'), '#faq'],
  ];

  return (
    <header
      className="site-header"
      style={{ boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none' }}
    >
      <div className="inner">
        <a href="#top" className="brand">
          <img src="/assets/logo-nuos-2026.png" alt="NUOS" className="brand-mark" />
          <span className="brand-name">NUOS</span>
        </a>
        <nav>
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'id' ? 'active' : ''}
              onClick={() => setLang('id')}
              aria-pressed={lang === 'id'}
            >
              ID
            </button>
          </div>
          <button
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: 14 }}
            onClick={onCTA}
          >
            {t('nav.cta')}
          </button>
        </div>
      </div>
    </header>
  );
}
