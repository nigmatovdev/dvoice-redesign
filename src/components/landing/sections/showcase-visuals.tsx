/* Recreated product dashboards for the MAHSULOT scrolly section.
   Built from design tokens (var(--...)) so they switch with the light/dark
   theme — the PNGs in /public are reference only. */

import { type CSSProperties } from "react";

function Frame({ addr, children }: { addr: string; children: React.ReactNode }) {
  return (
    <div className="preview flat shot">
      <div className="preview-bar">
        <div className="dots">
          <i style={{ background: "var(--red)" }} />
          <i style={{ background: "var(--amber)" }} />
          <i style={{ background: "var(--green)" }} />
        </div>
        <span className="addr mono">{addr}</span>
      </div>
      <div className="shot-body">{children}</div>
    </div>
  );
}

function Seg({ items, active }: { items: string[]; active: number }) {
  return (
    <div className="shot-seg">
      {items.map((it, i) => (
        <span key={it} className={i === active ? "on" : undefined}>
          {it}
        </span>
      ))}
    </div>
  );
}

function Head({ title, sub, seg }: { title: string; sub?: string; seg: React.ReactNode }) {
  return (
    <div className="shot-head">
      <div>
        <div className="shot-title">{title}</div>
        {sub && <div className="shot-sub">{sub}</div>}
      </div>
      {seg}
    </div>
  );
}

/** Maps a 0–100 value to a quality-zone colour. */
function zoneColor(v: number): string {
  if (v >= 80) return "var(--green)";
  if (v >= 65) return "var(--blue)";
  if (v >= 50) return "var(--amber)";
  return "var(--red)";
}

/** Builds an SVG polyline points string for 0–100 values. */
function linePts(vals: number[], w: number, h: number, pad = 8): string {
  const n = vals.length;
  return vals
    .map((v, i) => {
      const x = pad + (i / (n - 1)) * (w - 2 * pad);
      const y = pad + (1 - v / 100) * (h - 2 * pad);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

/* ============================================================
   1 — Sotuv dinamikasi · four KPI cards
   ============================================================ */
const SD_CARDS: {
  lab: string;
  color: string;
  delta: string;
  up: boolean;
  val: string;
  bars?: number[];
  area?: boolean;
}[] = [
  { lab: "Yaratildi", color: "var(--blue)", delta: "+18%", up: true, val: "2.7k", bars: [20, 28, 16, 64, 40, 18] },
  { lab: "Yutildi", color: "var(--green)", delta: "+24%", up: true, val: "112", bars: [10, 16, 24, 40, 70, 86] },
  { lab: "Yo‘qotildi", color: "var(--red)", delta: "−9%", up: false, val: "1.7k", bars: [44, 56, 70, 84, 60, 46] },
  { lab: "Tushum", color: "var(--amber)", delta: "+31%", up: true, val: "310M", area: true },
];

export function SalesDynamicsShot() {
  return (
    <Frame addr="app.sales.uz/dynamics">
      <Head
        title="Sotuv dinamikasi"
        sub="To‘rt ko‘rsatkich · alohida tahlil"
        seg={<Seg items={["Kun", "Hafta", "Oy"]} active={1} />}
      />
      <div className="sd-grid">
        {SD_CARDS.map((c) => (
          <div className="sd-card" key={c.lab}>
            <div className="sd-top">
              <span className="sd-dot" style={{ background: c.color }} />
              <span className="sd-lab">{c.lab}</span>
              <span
                className="sd-delta mono"
                style={{ color: c.up ? "var(--green)" : "var(--red)", background: c.up ? "var(--greenSoft)" : "var(--redSoft)" }}
              >
                {c.delta}
              </span>
            </div>
            <div className="sd-val mono">{c.val}</div>
            {c.area ? (
              <svg className="sd-spark" viewBox="0 0 120 38" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0,32 L24,30 L48,27 L72,19 L96,10 L120,5 L120,38 L0,38Z" fill="var(--amberSoft)" />
                <path d="M0,32 L24,30 L48,27 L72,19 L96,10 L120,5" fill="none" stroke="var(--amber)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <div className="sd-bars">
                {c.bars!.map((h, i) => (
                  <span key={i} style={{ height: `${h}%`, background: c.color }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ============================================================
   2 — Bitimlar oqimi va tushum · KPI strip + combined chart
   ============================================================ */
const DF_KPIS = [
  { lab: "TUSHUM", val: "310.3M", unit: "so‘m", sub: "+31% vs oldingi", tone: "var(--amber)" },
  { lab: "KONVERSIYA", val: "6.0", unit: "%", sub: "yutildi / yopildi", tone: "var(--green)" },
  { lab: "YOPILGAN", val: "1852", unit: "", sub: "112 yutildi", tone: "var(--ink3)" },
  { lab: "LID", val: "2.7k", unit: "", sub: "yaratildi", tone: "var(--blue)" },
];
// Bars for the right-hand weeks: green base + red loss stacked.
const DF_BARS = [
  { x: 196, green: 6, red: 30 },
  { x: 224, green: 8, red: 44 },
  { x: 252, green: 7, red: 58 },
  { x: 280, green: 10, red: 70 },
  { x: 308, green: 8, red: 36 },
];

export function DealFlowShot() {
  return (
    <Frame addr="app.sales.uz/pipeline">
      <Head
        title="Sotuv dinamikasi"
        sub="Bitimlar oqimi va tushum"
        seg={<Seg items={["Kun", "Hafta", "Oy"]} active={1} />}
      />
      <div className="df-kpis">
        {DF_KPIS.map((k) => (
          <div className="df-kpi" key={k.lab}>
            <div className="df-kpi-lab">{k.lab}</div>
            <div className="df-kpi-val mono">
              {k.val}
              {k.unit && <span className="u">{k.unit}</span>}
            </div>
            <div className="df-kpi-sub" style={{ color: k.tone }}>
              {k.sub}
            </div>
          </div>
        ))}
      </div>
      <svg className="df-chart" viewBox="0 0 320 132" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="df-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[26, 62, 98].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="var(--rule)" strokeWidth="1" />
        ))}
        {/* stacked bars (green base + red) */}
        {DF_BARS.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={120 - b.red - b.green} width="16" height={b.red} rx="2" fill="var(--red)" opacity="0.8" />
            <rect x={b.x} y={120 - b.green} width="16" height={b.green} rx="2" fill="var(--green)" />
          </g>
        ))}
        {/* cumulative revenue line + area */}
        <path d="M0,118 L40,116 L80,112 L120,104 L160,86 L200,52 L240,40 L280,24 L312,16 L312,120 L0,120Z" fill="url(#df-fill)" />
        <path d="M0,118 L40,116 L80,112 L120,104 L160,86 L200,52 L240,40 L280,24 L312,16" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="df-legend">
        <span><i style={{ background: "var(--green)" }} />Yutildi</span>
        <span><i style={{ background: "var(--red)" }} />Yo‘qotildi</span>
        <span><i style={{ background: "var(--amber)" }} />Tushum</span>
      </div>
    </Frame>
  );
}

/* ============================================================
   3 — Sotuv qadamlari bo‘yicha menejer profili · multi-line
   ============================================================ */
const ML_STEPS = ["Salomlashish", "Ehtiyoj", "Taqdimot", "E’tiroz", "Yopish"];
const ML_SERIES = [
  { name: "Dilnoza", color: "var(--green)", pts: [92, 88, 85, 82, 90] },
  { name: "Bobur", color: "var(--blue)", pts: [85, 80, 75, 70, 65] },
  { name: "Sarvinoz", color: "var(--amber)", pts: [78, 65, 60, 55, 58] },
  { name: "Jasur", color: "var(--violet)", pts: [80, 55, 45, 40, 35] },
  { name: "Kamola", color: "var(--red)", pts: [70, 38, 32, 28, 25] },
];
const ML_W = 300;
const ML_H = 148;

export function CriteriaShot() {
  return (
    <Frame addr="app.sales.uz/profile">
      <Head
        title="Sotuv qadamlari bo‘yicha menejer profili"
        sub="Har bir menejer voronka bo‘yicha qayerda kuchsiz"
        seg={<Seg items={["Kun", "Hafta", "Oy"]} active={1} />}
      />
      <svg className="ml-chart" viewBox={`0 0 ${ML_W} ${ML_H}`} aria-hidden="true">
        {/* zone bands */}
        <rect x="0" y="8" width={ML_W} height={(20 / 100) * (ML_H - 16)} fill="var(--greenSoft)" />
        <rect x="0" y={8 + (40 / 100) * (ML_H - 16)} width={ML_W} height={(20 / 100) * (ML_H - 16)} fill="var(--amberSoft)" />
        <rect x="0" y={8 + (60 / 100) * (ML_H - 16)} width={ML_W} height={(40 / 100) * (ML_H - 16)} fill="var(--redSoft)" />
        {ML_SERIES.map((s) => (
          <polyline key={s.name} points={linePts(s.pts, ML_W, ML_H)} fill="none" stroke={s.color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        {ML_SERIES.map((s) =>
          s.pts.map((v, i) => {
            const x = 8 + (i / (s.pts.length - 1)) * (ML_W - 16);
            const y = 8 + (1 - v / 100) * (ML_H - 16);
            return <circle key={`${s.name}-${i}`} cx={x} cy={y} r="2.6" fill="var(--card)" stroke={s.color} strokeWidth="2" />;
          }),
        )}
      </svg>
      <div className="ml-x">
        {ML_STEPS.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="ml-legend">
        {ML_SERIES.map((s) => (
          <span key={s.name}>
            <i style={{ background: s.color }} />
            {s.name}
            <b className="mono">{s.pts[s.pts.length - 1]}</b>
          </span>
        ))}
      </div>
    </Frame>
  );
}

/* ============================================================
   4 — Menejer × ko‘nikma · heatmap
   ============================================================ */
const HM_SKILLS = ["Salom", "Ehtiyoj", "Taqdimot", "E’tiroz", "Yopish"];
const HM_ROWS = [
  { n: "Dilnoza", v: [92, 88, 85, 82, 90], avg: 87 },
  { n: "Bobur", v: [85, 80, 75, 70, 65], avg: 75 },
  { n: "Sarvinoz", v: [78, 65, 60, 55, 58], avg: 63 },
  { n: "Jasur", v: [80, 55, 45, 40, 35], avg: 51 },
  { n: "Kamola", v: [70, 38, 32, 28, 25], avg: 39 },
];
const HM_AVG = [81, 65, 59, 55, 55];

function cell(v: number): CSSProperties {
  const c = zoneColor(v);
  return { background: `color-mix(in srgb, ${c} 24%, transparent)`, color: c };
}

export function HeatmapShot() {
  return (
    <Frame addr="app.sales.uz/heatmap">
      <Head
        title="Menejer × ko‘nikma"
        sub="Sotuv qadamlari bo‘yicha ball (0–100)"
        seg={<Seg items={["Kun", "Hafta", "Oy"]} active={1} />}
      />
      <div className="hm-grid">
        <div className="hm-corner" />
        {HM_SKILLS.map((s) => (
          <div key={s} className="hm-colh mono">
            {s}
          </div>
        ))}
        <div className="hm-colh mono hm-avgh">O‘RT</div>

        {HM_ROWS.map((row) => (
          <HmRow key={row.n} row={row} />
        ))}

        <div className="hm-rowh hm-foot">O‘RTACHA</div>
        {HM_AVG.map((v, i) => (
          <div key={i} className="hm-cell mono hm-foot" style={cell(v)}>
            {v}
          </div>
        ))}
        <div className="hm-cell mono hm-foot hm-avgcell">63</div>
      </div>
    </Frame>
  );
}

function HmRow({ row }: { row: { n: string; v: number[]; avg: number } }) {
  return (
    <>
      <div className="hm-rowh">{row.n}</div>
      {row.v.map((v, i) => (
        <div key={i} className="hm-cell mono" style={cell(v)}>
          {v}
        </div>
      ))}
      <div className="hm-cell mono hm-avgcell">{row.avg}</div>
    </>
  );
}
