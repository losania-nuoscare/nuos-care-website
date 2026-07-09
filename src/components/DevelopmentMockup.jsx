import { useLang } from '../i18n/LanguageContext.jsx';

/* NUOS Tumbuh — child development report shown inside the phone mockup. */
export default function DevelopmentMockup() {
  const { t } = useLang();
  const measures = [
    { label: t('ui.weight'), val: '10.4', unit: ' kg', status: t('ui.onTrack'), color: '#5BA3D9', barColor: '#5BA3D9', pct: 72 },
    { label: t('ui.height'), val: '81', unit: ' cm', status: t('ui.aboveAvg'), color: '#7C3AED', barColor: '#A78BFA', pct: 88 },
    { label: t('ui.vocabulary'), val: '10', unit: ` ${t('ui.words')}`, status: t('ui.watch'), color: '#E65100', barColor: '#FF9800', pct: 44 },
  ];

  return (
    <div className="phone" style={{ width: 280, animation: 'floatYSlow 7s ease-in-out infinite' }}>
      <div className="notch"></div>
      <div
        className="phone-screen"
        style={{
          minHeight: 520,
          padding: '38px 14px 14px',
          background:
            'radial-gradient(ellipse at 0% 0%, #F7C6D9 0%, transparent 65%), radial-gradient(ellipse at 100% 0%, #EDE9FE 0%, transparent 55%), #fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#2A2A33' }}>{t('ui.developmentReport')}</div>
          <img src="/assets/logo-nuos-2026.png" style={{ width: 24, height: 24, borderRadius: 999 }} alt="" />
        </div>

        {/* Hero card */}
        <div style={{ background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(8px)', borderRadius: 16, padding: 12, marginBottom: 12, boxShadow: '0 2px 14px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <img src="/assets/maya-photo.png" style={{ width: 44, height: 44, borderRadius: 999, objectFit: 'cover', objectPosition: 'center 20%' }} alt="" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Libre Caslon Text', serif", fontSize: 18, fontWeight: 700, color: '#2A2A33', lineHeight: 1.1 }}>Maya</div>
              <div style={{ fontSize: 9.5, color: '#888', marginTop: 1 }}>
                {t('ui.caregiverLabel')}: Sari R. · {t('ui.since')}
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #5BA3D9, #A78BFA)', borderRadius: 11, padding: '6px 9px', textAlign: 'center', boxShadow: '0 3px 10px rgba(91,163,217,0.3)' }}>
              <div style={{ fontFamily: "'Libre Caslon Text', serif", fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1 }}>18</div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.85)', marginTop: 1 }}>{t('ui.months')}</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontSize: 10, color: '#888' }}>{t('ui.growthScore')}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#5BA3D9' }}>
              78<span style={{ color: '#888', fontWeight: 400 }}>/100</span>
            </span>
          </div>
          <div style={{ height: 6, background: '#F0F0F0', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '78%', background: 'linear-gradient(90deg, #5BA3D9, #A78BFA)', borderRadius: 999 }}></div>
          </div>
        </div>

        {/* AI summary */}
        <div style={{ background: 'linear-gradient(135deg, rgba(91,163,217,0.08), rgba(167,139,250,0.08))', border: '1px solid rgba(91,163,217,0.18)', borderRadius: 12, padding: '9px 11px', marginBottom: 10 }}>
          <div style={{ fontSize: 9.5, fontWeight: 700, color: '#5BA3D9', marginBottom: 4 }}>{t('ui.aiSummary')}</div>
          <div style={{ fontSize: 10, color: '#444', lineHeight: 1.5 }}>{t('ui.aiSummaryText')}</div>
        </div>

        {/* Measurements */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 11, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#2A2A33', marginBottom: 8 }}>{t('ui.measurements')}</div>
          {measures.map((m) => (
            <div key={m.label} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                <span style={{ fontSize: 10.5, color: '#2A2A33', fontWeight: 500 }}>{m.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: '#2A2A33' }}>
                    {m.val}
                    <span style={{ fontSize: 9, color: '#888', fontWeight: 400 }}>{m.unit}</span>
                  </span>
                  <span style={{ fontSize: 8.5, fontWeight: 600, color: m.color, background: m.color + '18', padding: '2px 6px', borderRadius: 999 }}>{m.status}</span>
                </div>
              </div>
              <div style={{ height: 4, background: '#F0F0F0', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${m.pct}%`, background: m.barColor, borderRadius: 999 }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
