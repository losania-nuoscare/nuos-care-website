import { useLang } from '../i18n/LanguageContext.jsx';
import Icon from './Icon.jsx';

export default function Footer() {
  const { t, lang, setLang } = useLang();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/assets/logo-nuos-2026.png" alt="NUOS" style={{ width: 40, height: 40 }} />
              <span style={{ fontFamily: "'Libre Caslon Text', serif", fontSize: 22, fontWeight: 700, color: 'white', letterSpacing: '0.06em' }}>
                NUOS
              </span>
            </div>
            <p>{t('footer.tagline')}</p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <Icon.IG />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Icon.LI />
              </a>
              <a href="#" aria-label="TikTok">
                <Icon.TT />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.platform')}</h4>
            <ul>
              <li><a href="#how">{t('footer.link1')}</a></li>
              <li><a href="#how">{t('footer.link2')}</a></li>
              <li><a href="#pricing">{t('footer.link3')}</a></li>
              <li><a href="#">{t('footer.link4')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><a href="#faq">{t('footer.link5')}</a></li>
            </ul>
            <h4 style={{ marginTop: 24 }}>{t('footer.langLabel')}</h4>
            <div className="footer-lang">
              <button
                type="button"
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
              >
                {t('footer.langEn')}
              </button>
              <span style={{ color: '#444' }}>·</span>
              <button
                type="button"
                className={lang === 'id' ? 'active' : ''}
                onClick={() => setLang('id')}
              >
                {t('footer.langId')}
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t('footer.rights')}</div>
          <div>{t('footer.madeWith')}</div>
        </div>
      </div>
    </footer>
  );
}
