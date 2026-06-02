/* global React, ReactDOM */
// Head of Sales — Operational Dashboard
// Theme toggle lives in the sidebar. Period filter (Kun/Hafta/Oy) is global
// and lives in the page header.

const { LIGHT, DARK } = window.THEMES;
const { Icon, ICONS, NAV, NAV_ICONS } = window;
const ThemeCtx = window.HOS_ThemeCtx;
const FilterCtx = window.HOS_FilterCtx;

// ---- Sidebar (with theme toggle in footer) -------------------

function Sidebar({ onToggleTheme }) {
  const T = React.useContext(ThemeCtx);
  const isDark = T.name === 'dark';
  return (
    <aside style={{
      width: 232, background: T.sidebar, borderRight: '1px solid ' + T.rule,
      display: 'flex', flexDirection: 'column', flexShrink: 0,
    }}>
      <div style={{ padding: '22px 20px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 9, background: T.brand, color: T.brandInk,
          display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 14,
        }}>S.</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.ink, letterSpacing: -0.1 }}>Sales</div>
          <div style={{ fontSize: 11, color: T.ink3, marginTop: 1 }}>Speech analytics</div>
        </div>
      </div>

      <div style={{ padding: '0 12px 14px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px',
          background: T.surface, borderRadius: 9, border: '1px solid ' + T.rule,
        }}>
          <div style={{
            width: 22, height: 22, borderRadius: 5, background: T.blueSoft, color: T.blue,
            display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 800,
          }}>S</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.ink }}>Sales.uz</div>
            <div style={{ fontSize: 10, color: T.ink3 }}>amoCRM · Connect</div>
          </div>
          <div style={{ color: T.ink3 }}><Icon d={ICONS.chevR} size={14} /></div>
        </div>
      </div>

      <nav style={{ padding: '6px 8px', display: 'flex', flexDirection: 'column', gap: 1, flex: 1, overflow: 'auto' }}>
        <SidebarSection T={T} label="Tahlil" items={NAV.slice(0, 7)} />
        <SidebarSection T={T} label="Jamoa"  items={NAV.slice(7, 10)} />
        <SidebarSection T={T} label="Tizim"  items={NAV.slice(10)} />
      </nav>

      {/* Theme toggle — segmented inside sidebar */}
      <div style={{ padding: '12px 12px 0' }}>
        <div style={{
          fontSize: 10, color: T.ink3, fontWeight: 700, letterSpacing: 0.6,
          padding: '0 4px 8px', textTransform: 'uppercase',
        }}>Mavzu</div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: 4,
          background: T.surface, border: '1px solid ' + T.rule, borderRadius: 10,
        }}>
          <button
            onClick={() => { if (isDark) onToggleTheme(); }}
            style={themeBtn(T, !isDark)}
            aria-pressed={!isDark}
          >
            <Icon d={ICONS.sun} size={13} stroke={1.8} />
            Yorug‘
          </button>
          <button
            onClick={() => { if (!isDark) onToggleTheme(); }}
            style={themeBtn(T, isDark)}
            aria-pressed={isDark}
          >
            <Icon d={ICONS.moon} size={13} stroke={1.8} />
            Qorong‘i
          </button>
        </div>
      </div>

      <div style={{ padding: '14px 12px 14px', borderTop: '1px solid ' + T.rule, marginTop: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 4px' }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8, background: T.amberSoft, color: T.amber,
            display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 11,
          }}>SU</div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Suhrob Abduaxatov
            </div>
            <div style={{ fontSize: 10, color: T.ink3 }}>Head of Sales</div>
          </div>
          <div style={{ color: T.ink3 }}><Icon d={ICONS.more} size={14} /></div>
        </div>
      </div>
    </aside>
  );
}

function themeBtn(T, active) {
  return {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
    padding: '7px 8px', borderRadius: 7, border: 0,
    background: active ? T.brand : 'transparent',
    color: active ? T.brandInk : T.ink2,
    fontFamily: 'Manrope, system-ui, sans-serif',
    fontWeight: 700, fontSize: 11, letterSpacing: 0.2, cursor: 'pointer',
  };
}

function SidebarSection({ T, label, items }) {
  return (
    <>
      <div style={{
        fontSize: 10, color: T.ink3, fontWeight: 700, letterSpacing: 0.6,
        padding: '8px 10px 4px', textTransform: 'uppercase',
      }}>{label}</div>
      {items.map((n) => {
        const isActive = n.id === 'dashboard';
        return (
          <div key={n.id} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 10px', borderRadius: 8,
            background: isActive ? T.surface : 'transparent',
            color: isActive ? T.ink : T.ink2,
            fontSize: 13, fontWeight: isActive ? 600 : 500,
            position: 'relative', cursor: 'default',
            border: '1px solid ' + (isActive ? T.rule : 'transparent'),
          }}>
            {isActive && (
              <div style={{
                position: 'absolute', left: -8, top: 8, bottom: 8,
                width: 2, background: T.ink, borderRadius: 1,
              }} />
            )}
            <Icon d={ICONS[NAV_ICONS[n.id]]} size={16} stroke={1.7} />
            <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.label}</span>
            {isActive && <span style={{ width: 6, height: 6, borderRadius: 999, background: T.green }} />}
          </div>
        );
      })}
    </>
  );
}

// ---- Header --------------------------------------------------

function GlobalFilter({ value, onChange }) {
  const T = React.useContext(ThemeCtx);
  return (
    <div style={{
      display: 'inline-flex', padding: 4, gap: 2,
      background: T.card, border: '1px solid ' + T.rule, borderRadius: 9,
    }}>
      {['Kun', 'Hafta', 'Oy'].map((f) => (
        <button key={f}
          onClick={() => onChange(f)}
          style={{
            border: 0, background: value === f ? T.brand : 'transparent',
            color: value === f ? T.brandInk : T.ink2,
            fontFamily: 'Manrope, system-ui, sans-serif',
            fontWeight: 700, fontSize: 12, letterSpacing: 0.2,
            padding: '6px 14px', borderRadius: 7, cursor: 'pointer',
          }}>{f}</button>
      ))}
    </div>
  );
}

function PageHeader({ filter, setFilter }) {
  const T = React.useContext(ThemeCtx);
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      gap: 24, marginBottom: 22,
    }}>
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '4px 8px', borderRadius: 6,
          background: T.chip, color: T.chipText,
          fontSize: 10, fontWeight: 800, letterSpacing: 0.8,
          fontFamily: 'JetBrains Mono, ui-monospace, monospace',
          marginBottom: 10,
        }}>HEAD OF SALES · OPERATSION</div>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, color: T.ink, lineHeight: 1.1 }}>
          Kunlik operatsion dashboard
        </div>
        <div style={{ fontSize: 13, color: T.ink3, marginTop: 6 }}>
          Qo‘ng‘iroq markazi sifati, menejer ko‘nikmasi va pipeline holati — bir ekranda.
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <GlobalFilter value={filter} onChange={setFilter} />
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 12px',
          background: T.card, border: '1px solid ' + T.rule, borderRadius: 9,
          fontSize: 12, color: T.ink2, fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        }}>
          <Icon d={ICONS.cal} size={14} />
          2026-05-25 <span style={{ color: T.ink3 }}>—</span> 2026-05-31
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 14px',
          background: T.brand, color: T.brandInk, borderRadius: 9,
          fontSize: 12, fontWeight: 700,
        }}>
          <Icon d={ICONS.spark} size={13} /> Barcha qo‘ng‘iroqlar
        </div>
      </div>
    </div>
  );
}

// ---- KPI strip -----------------------------------------------

function KpiStrip() {
  const T = React.useContext(ThemeCtx);
  const filter = React.useContext(FilterCtx);
  // Tiny set of mock KPIs that shift with the period
  const sets = {
    Kun: {
      score: '63.1', pickup: '62', closed: '8', conv: '8.9', coach: '38',
      sub: ['kechagi kunga nisbatan', 'jamoa o‘rtachasi', '5 to‘liq + 3 yarim', '64 → 5', 'qo‘ng‘iroqlar 40–60 ballda'],
      delta: ['+0.9', '+1.4', '+1', '+0.3 pp', '−1.2'],
    },
    Hafta: {
      score: '62.4', pickup: '60', closed: '52', conv: '8.4', coach: '40',
      sub: ['o‘tgan haftaga nisbatan', 'jamoa o‘rtachasi', '38 to‘liq + 14 yarim', '450 → 38', 'qo‘ng‘iroqlar 40–60 ballda'],
      delta: ['+1.8', '+3.2', '+8', '+0.6 pp', '−2.1'],
    },
    Oy: {
      score: '61.7', pickup: '58', closed: '188', conv: '8.1', coach: '42',
      sub: ['o‘tgan oyga nisbatan', 'jamoa o‘rtachasi', '152 to‘liq + 36 yarim', '1820 → 152', 'qo‘ng‘iroqlar 40–60 ballda'],
      delta: ['+2.4', '+2.1', '+24', '+0.4 pp', '−1.6'],
    },
  };
  const d = sets[filter];

  const kpis = [
    { label: 'O‘rt. call score',  value: d.score,  unit: '/ 100', tone: T.amber, delta: d.delta[0], sub: d.sub[0] },
    { label: 'Pickup darajasi',   value: d.pickup, unit: '%',     tone: T.blue,  delta: d.delta[1], sub: d.sub[1] },
    { label: 'Yopilgan bitimlar', value: d.closed, unit: '',      tone: T.green, delta: d.delta[2], sub: d.sub[2] },
    { label: 'Funnel konversiya', value: d.conv,   unit: '%',     tone: T.green, delta: d.delta[3], sub: d.sub[3] },
    { label: 'Coaching zonasi',   value: d.coach,  unit: '%',     tone: T.red,   delta: d.delta[4], sub: d.sub[4] },
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14,
      marginBottom: 18,
    }}>
      {kpis.map((k, i) => {
        const pos = k.delta.startsWith('+');
        return (
          <div key={i} style={{
            background: T.card, border: '1px solid ' + T.rule, borderRadius: 12,
            padding: '14px 16px', boxShadow: T.shadow,
            display: 'flex', flexDirection: 'column', gap: 6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{
                fontSize: 10, fontWeight: 700, color: T.ink3,
                textTransform: 'uppercase', letterSpacing: 0.5,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: k.tone }} />
                {k.label}
              </div>
              <span style={{
                fontSize: 10, fontWeight: 800, padding: '2px 6px', borderRadius: 4,
                color: pos ? T.green : T.red,
                background: pos ? T.greenSoft : T.redSoft,
                fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              }}>{k.delta}</span>
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              fontSize: 26, fontWeight: 600, color: T.ink, letterSpacing: -0.6, lineHeight: 1,
            }}>
              {k.value}
              {k.unit && (
                <span style={{ fontSize: 12, color: T.ink3, marginLeft: 4, fontWeight: 500 }}>{k.unit}</span>
              )}
            </div>
            <div style={{ fontSize: 11, color: T.ink3 }}>{k.sub}</div>
          </div>
        );
      })}
    </div>
  );
}

// ---- App -----------------------------------------------------

const {
  CallScoreHistogram, SkillHeatmap, ObjectionFrequency,
  PickupRate, CallsToClose, PipelineFunnel,
} = window.HOS;

function App() {
  const [mode, setMode] = React.useState(() => {
    try { return localStorage.getItem('hos-theme') || 'dark'; }
    catch { return 'dark'; }
  });
  const [filter, setFilter] = React.useState(() => {
    try { return localStorage.getItem('hos-filter') || 'Hafta'; }
    catch { return 'Hafta'; }
  });
  const T = mode === 'light' ? LIGHT : DARK;

  React.useEffect(() => {
    document.body.style.background = T.bg;
    document.documentElement.style.colorScheme = mode;
  }, [T.bg, mode]);

  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    setMode(next);
    try { localStorage.setItem('hos-theme', next); } catch (e) {}
  };
  const setFilterPersist = (f) => {
    setFilter(f);
    try { localStorage.setItem('hos-filter', f); } catch (e) {}
  };

  return (
    <ThemeCtx.Provider value={T}>
      <FilterCtx.Provider value={filter}>
        <div style={{
          display: 'flex', minHeight: '100vh', background: T.bg, color: T.ink,
          fontFamily: 'Manrope, system-ui, sans-serif',
        }}>
          <Sidebar onToggleTheme={toggle} />
          <main style={{ flex: 1, padding: '28px 32px 56px', minWidth: 0 }}>
            <PageHeader filter={filter} setFilter={setFilterPersist} />
            <KpiStrip />

            {/* Call score histogram — top, full width */}
            <div style={{ marginBottom: 16 }}>
              <CallScoreHistogram />
            </div>

            {/* Pipeline funnel + pickup rate */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <PipelineFunnel />
              <PickupRate />
            </div>

            {/* Manager × skill heatmap */}
            <div style={{ marginBottom: 16 }}>
              <SkillHeatmap />
            </div>

            {/* Objection frequency + calls-to-close */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <ObjectionFrequency />
              <CallsToClose />
            </div>
          </main>
        </div>
      </FilterCtx.Provider>
    </ThemeCtx.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
