import { useLang } from '../i18n/LanguageContext.jsx';
import Icon from './Icon.jsx';

/* In-app "Top 3 Matches" screen shown inside the phone mockup.
   Caregiver names never translate; UI labels + skill tags do. */
export default function PhoneAppPreview() {
  const { t } = useLang();
  const s = (k) => t(`ui.skills.${k}`);

  const caregivers = [
    { name: 'Sari Dewi R.', img: '/assets/caregiver-2.png', rating: 4.9, exp: '5 yrs', skills: [s('infantCare'), s('cooking'), s('english')], rate: 'Rp 4.500.000', loc: 'South Jakarta', match: 97 },
    { name: 'Rina Kusuma W.', img: '/assets/caregiver-3.png', rating: 4.8, exp: '3 yrs', skills: [s('infantCare'), s('earlyEducation')], rate: 'Rp 3.800.000', loc: 'South Tangerang', match: 91 },
    { name: 'Dewi Anggraini', img: '/assets/caregiver-1.png', rating: 4.7, exp: '4 yrs', skills: [s('firstAid'), s('english')], rate: 'Rp 4.000.000', loc: 'Depok', match: 85 },
  ];

  return (
    <div style={{ padding: '38px 12px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <img src="/assets/logo-nuos-2026.png" alt="NUOS" style={{ width: 22, height: 22, borderRadius: '50%' }} />
        <div style={{ flex: 1, fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5BA3D9' }}>
          NUOS Care
        </div>
      </div>
      <div style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: 16, fontWeight: 700, color: '#2A2A33', lineHeight: 1.25 }}>
        {t('ui.topMatches')}
      </div>
      <div style={{ fontSize: 10, color: '#888', marginBottom: 10 }}>{t('ui.matchedFrom')}</div>

      {caregivers.map((c, i) => (
        <div
          key={i}
          style={{
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 8,
            boxShadow: i === 0 ? '0 4px 16px rgba(91,163,217,0.22), 0 0 0 1.5px #B9D8F2' : '0 2px 10px rgba(0,0,0,0.07)',
            background: 'white',
          }}
        >
          <div style={{ position: 'relative', height: 92 }}>
            <img src={c.img} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,40,60,0.78) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', top: 6, left: 6, background: '#5BA3D9', borderRadius: 999, padding: '2px 7px', display: 'flex', alignItems: 'center', gap: 3 }}>
              <Icon.Verified style={{ width: 8, height: 8, color: 'white' }} />
              <span style={{ fontSize: 8, fontWeight: 700, color: 'white' }}>{t('ui.verifiedBadge')}</span>
            </div>
            <div style={{ position: 'absolute', top: 4, right: 4, width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.25)', display: 'grid', placeItems: 'center', color: 'white', fontSize: 9, fontWeight: 800, border: '1.5px solid rgba(255,255,255,0.6)' }}>
              {c.match}%
            </div>
            <div style={{ position: 'absolute', bottom: 6, left: 8, right: 8 }}>
              <div style={{ fontFamily: "'Libre Caslon Text',serif", fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1.1 }}>{c.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                <span style={{ color: '#F59E0B', fontSize: 8 }}>★★★★★</span>
                <span style={{ fontSize: 8.5, fontWeight: 600, color: 'white' }}>{c.rating}</span>
                <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.7)' }}>· {c.exp}</span>
              </div>
            </div>
          </div>
          <div style={{ padding: '7px 9px 8px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 6 }}>
              {c.skills.map((sk) => (
                <span key={sk} style={{ fontSize: 8, fontWeight: 600, background: '#EEF5FB', color: '#5BA3D9', padding: '2px 6px', borderRadius: 999 }}>{sk}</span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 5, borderTop: '1px solid #E8E8E8' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 8.5, color: '#A0A0A0' }}>{c.loc}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#2A2A33' }}>{c.rate}</div>
              </div>
              <span style={{ background: '#5BA3D9', color: 'white', fontSize: 8.5, fontWeight: 600, padding: '5px 9px', borderRadius: 999 }}>{t('ui.interview')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
