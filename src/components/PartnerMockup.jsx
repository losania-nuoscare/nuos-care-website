import { useLang } from '../i18n/LanguageContext.jsx';
import Icon from './Icon.jsx';

/* NUOS Partner — daily record screen (Today's Tasks + Logbook + bottom nav). */
const House = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
  </svg>
);
const Book = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 19.5V5" />
  </svg>
);
const Headset = (p) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="2" y="13" width="4" height="7" rx="1.5" />
    <rect x="18" y="13" width="4" height="7" rx="1.5" />
    <path d="M20 20a3 3 0 0 1-3 3h-2" />
  </svg>
);

export default function PartnerMockup() {
  const { t } = useLang();
  const tasks = [
    { time: '07:30', t: t('ui.tasks.t1'), done: true },
    { time: '09:15', t: t('ui.tasks.t2'), done: true },
    { time: '11:00', t: t('ui.tasks.t3'), done: true },
    { time: '14:00', t: t('ui.tasks.t4'), done: false },
  ];

  return (
    <div className="phone" style={{ width: 280, animation: 'floatYSlow 7s ease-in-out infinite' }}>
      <div className="notch"></div>
      <div className="phone-screen" style={{ minHeight: 520, padding: '38px 0 0', background: '#F7F8FA', position: 'relative', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '0 14px 12px' }}>
          <img src="/assets/caregiver-2.png" style={{ width: 40, height: 40, borderRadius: 999, objectFit: 'cover', objectPosition: 'top center' }} alt="" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#2A2A33', lineHeight: 1.15 }}>Sari Dewi</div>
            <div style={{ fontSize: 9.5, color: '#999', marginTop: 1 }}>{t('ui.partnerDate')}</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#E8F5EF', color: '#1f7a4d', fontSize: 9, fontWeight: 700, padding: '4px 9px', borderRadius: 999 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#22a35c' }}></span>
            {t('ui.active')}
          </span>
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: '0 14px 74px', overflow: 'hidden' }}>
          {/* Tasks card */}
          <div style={{ background: '#fff', borderRadius: 14, padding: '12px 12px 6px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', marginBottom: 11 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#2A2A33' }}>{t('ui.todaysTasks')}</span>
              <span style={{ fontSize: 9, fontWeight: 600, color: '#5BA3D9' }}>{t('ui.tasksProgress')}</span>
            </div>
            {tasks.map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '6px 0', borderTop: i ? '1px solid #F2F2F4' : 'none' }}>
                <span
                  style={{
                    width: 18, height: 18, borderRadius: 6, flexShrink: 0,
                    display: 'grid', placeItems: 'center',
                    background: row.done ? '#5BA3D9' : '#fff',
                    border: row.done ? 'none' : '1.5px solid #D2D6DC',
                    color: '#fff',
                  }}
                >
                  {row.done && <Icon.Check style={{ width: 12, height: 12 }} />}
                </span>
                <span style={{ flex: 1, fontSize: 10.5, color: row.done ? '#2A2A33' : '#999', lineHeight: 1.3 }}>{row.t}</span>
                <span style={{ fontSize: 9, fontWeight: 600, color: row.done ? '#5BA3D9' : '#B8BCC4' }}>{row.time}</span>
              </div>
            ))}
          </div>

          {/* Logbook entry */}
          <div style={{ background: '#FCE4EC', borderRadius: 14, padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 7 }}>
              <Icon.Heart style={{ width: 11, height: 11, color: '#E76A8B' }} />
              <span style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#c05575' }}>
                {t('ui.logbook')} · 11:24
              </span>
            </div>
            <div style={{ fontSize: 11, color: '#8a3a58', lineHeight: 1.5, fontStyle: 'italic', marginBottom: 9 }}>
              {t('ui.logbookNote')}
            </div>
            <img src="/assets/kid-eating-food.png" style={{ width: '100%', height: 78, objectFit: 'cover', borderRadius: 10 }} alt="" />
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 62, background: '#fff', borderTop: '1px solid #EEE', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 12px', boxShadow: '0 -4px 16px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: '#B8BCC4' }}>
            <House />
            <span style={{ fontSize: 8.5, fontWeight: 600, whiteSpace: 'nowrap' }}>{t('ui.navHome')}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, color: '#5BA3D9' }}>
            <Book />
            <span style={{ fontSize: 8.5, fontWeight: 700, whiteSpace: 'nowrap' }}>{t('ui.navLogbook')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#E5484D', color: '#fff', padding: '9px 13px', borderRadius: 999, boxShadow: '0 4px 12px rgba(229,72,77,0.35)' }}>
            <Headset />
            <span style={{ fontSize: 9.5, fontWeight: 700, whiteSpace: 'nowrap' }}>{t('ui.navSupport')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
