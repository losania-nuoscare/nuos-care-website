import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import Icon from './Icon.jsx';

export default function Waitlist() {
  const { t, lang } = useLang();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error

  const submit = async (e) => {
    e.preventDefault();
    if (!email.includes('@') || status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('done');
      // Fire a GA4 conversion event so Google Ads can optimize toward signups.
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', { method: 'waitlist', language: lang });
      }
    } catch {
      setStatus('error');
    }
  };

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
            {status === 'done' ? (
              <div className="waitlist-success">
                <Icon.Check style={{ width: 22, height: 22 }} /> {t('waitlist.success')}
              </div>
            ) : (
              <form className="waitlist-form" onSubmit={submit}>
                <input
                  type="email"
                  required
                  placeholder={t('waitlist.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                />
                <button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? t('waitlist.sending') : t('waitlist.button')}
                </button>
              </form>
            )}
            {status === 'error' && (
              <div className="waitlist-error">{t('waitlist.error')}</div>
            )}
            <div className="waitlist-meta">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon.Verified /> {t('waitlist.meta1')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon.Heart /> {t('waitlist.meta2')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Icon.Clock /> {t('waitlist.meta3')}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
