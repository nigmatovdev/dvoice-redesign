/* Recreated product dashboards for the MAHSULOT scrolly section.
   Built from design tokens (var(--...)) so they switch with the light/dark
   theme, and all labels go through useLang() so they switch with UZ/EN too.
   The PNGs in /public are reference only. */

"use client";

import { type CSSProperties } from "react";

import { type Lang } from "@/lib/i18n";

import { useLang } from "../lang-provider";

type Bi = Record<Lang, string>;

/** Pick a string for the active language. */
const pick = (lang: Lang, uz: string, en: string, ru: string) =>
  lang === "uz" ? uz : lang === "ru" ? ru : en;

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

/** Shared period segmented control (Day / Week / Month). */
function periodItems(lang: Lang): string[] {
  if (lang === "ru") return ["День", "Неделя", "Месяц"];
  if (lang === "en") return ["Day", "Week", "Month"];
  return ["Kun", "Hafta", "Oy"];
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
  lab: Bi;
  color: string;
  delta: string;
  up: boolean;
  val: string;
  bars?: number[];
  area?: boolean;
}[] = [
  { lab: { uz: "Yaratildi", en: "Created", ru: "Создано" }, color: "var(--blue)", delta: "+18%", up: true, val: "2.7k", bars: [20, 28, 16, 64, 40, 18] },
  { lab: { uz: "Yutildi", en: "Won", ru: "Выиграно" }, color: "var(--green)", delta: "+24%", up: true, val: "112", bars: [10, 16, 24, 40, 70, 86] },
  { lab: { uz: "Yo‘qotildi", en: "Lost", ru: "Потеряно" }, color: "var(--red)", delta: "−9%", up: false, val: "1.7k", bars: [44, 56, 70, 84, 60, 46] },
  { lab: { uz: "Tushum", en: "Revenue", ru: "Выручка" }, color: "var(--amber)", delta: "+31%", up: true, val: "310M", area: true },
];

export function SalesDynamicsShot() {
  const { lang } = useLang();
  return (
    <Frame addr="app.metrixme.com/dynamics">
      <Head
        title={pick(lang, "Sotuv dinamikasi", "Sales dynamics", "Динамика продаж")}
        sub={pick(lang, "To‘rt ko‘rsatkich · alohida tahlil", "Four metrics · analysed separately", "Четыре показателя · раздельный анализ")}
        seg={<Seg items={periodItems(lang)} active={1} />}
      />
      <div className="sd-grid">
        {SD_CARDS.map((c) => (
          <div className="sd-card" key={c.lab.en}>
            <div className="sd-top">
              <span className="sd-dot" style={{ background: c.color }} />
              <span className="sd-lab">{c.lab[lang]}</span>
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
const DF_KPIS: { lab: Bi; val: string; unit: string; sub: Bi; tone: string }[] = [
  { lab: { uz: "TUSHUM", en: "REVENUE", ru: "ВЫРУЧКА" }, val: "310.3M", unit: "so‘m", sub: { uz: "+31% vs oldingi", en: "+31% vs prev", ru: "+31% к пред." }, tone: "var(--amber)" },
  { lab: { uz: "KONVERSIYA", en: "CONVERSION", ru: "КОНВЕРСИЯ" }, val: "6.0", unit: "%", sub: { uz: "yutildi / yopildi", en: "won / closed", ru: "выигр. / закрыто" }, tone: "var(--green)" },
  { lab: { uz: "YOPILGAN", en: "CLOSED", ru: "ЗАКРЫТО" }, val: "1852", unit: "", sub: { uz: "112 yutildi", en: "112 won", ru: "112 выиграно" }, tone: "var(--ink3)" },
  { lab: { uz: "LID", en: "LEADS", ru: "ЛИДЫ" }, val: "2.7k", unit: "", sub: { uz: "yaratildi", en: "created", ru: "создано" }, tone: "var(--blue)" },
];
const DF_BARS = [
  { x: 196, green: 6, red: 30 },
  { x: 224, green: 8, red: 44 },
  { x: 252, green: 7, red: 58 },
  { x: 280, green: 10, red: 70 },
  { x: 308, green: 8, red: 36 },
];

export function DealFlowShot() {
  const { lang } = useLang();
  const legend: Bi[] = [
    { uz: "Yutildi", en: "Won", ru: "Выиграно" },
    { uz: "Yo‘qotildi", en: "Lost", ru: "Потеряно" },
    { uz: "Tushum", en: "Revenue", ru: "Выручка" },
  ];
  const legendColors = ["var(--green)", "var(--red)", "var(--amber)"];
  return (
    <Frame addr="app.metrixme.com/pipeline">
      <Head
        title={pick(lang, "Sotuv dinamikasi", "Sales dynamics", "Динамика продаж")}
        sub={pick(lang, "Bitimlar oqimi va tushum", "Deal flow and revenue", "Поток сделок и выручка")}
        seg={<Seg items={periodItems(lang)} active={1} />}
      />
      <div className="df-kpis">
        {DF_KPIS.map((k) => (
          <div className="df-kpi" key={k.lab.en}>
            <div className="df-kpi-lab">{k.lab[lang]}</div>
            <div className="df-kpi-val mono">
              {k.val}
              {k.unit && <span className="u">{k.unit}</span>}
            </div>
            <div className="df-kpi-sub" style={{ color: k.tone }}>
              {k.sub[lang]}
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
        {DF_BARS.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={120 - b.red - b.green} width="16" height={b.red} rx="2" fill="var(--red)" opacity="0.8" />
            <rect x={b.x} y={120 - b.green} width="16" height={b.green} rx="2" fill="var(--green)" />
          </g>
        ))}
        <path d="M0,118 L40,116 L80,112 L120,104 L160,86 L200,52 L240,40 L280,24 L312,16 L312,120 L0,120Z" fill="url(#df-fill)" />
        <path d="M0,118 L40,116 L80,112 L120,104 L160,86 L200,52 L240,40 L280,24 L312,16" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="df-legend">
        {legend.map((l, i) => (
          <span key={l.en}>
            <i style={{ background: legendColors[i] }} />
            {l[lang]}
          </span>
        ))}
      </div>
    </Frame>
  );
}

/* ============================================================
   3 — Sotuv qadamlari bo‘yicha menejer profili · multi-line
   ============================================================ */
const ML_STEPS: Bi[] = [
  { uz: "Salomlashish", en: "Greeting", ru: "Приветствие" },
  { uz: "Ehtiyoj", en: "Needs", ru: "Потребность" },
  { uz: "Taqdimot", en: "Pitch", ru: "Презентация" },
  { uz: "E’tiroz", en: "Objection", ru: "Возражение" },
  { uz: "Yopish", en: "Close", ru: "Закрытие" },
];
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
  const { lang } = useLang();
  return (
    <Frame addr="app.metrixme.com/profile">
      <Head
        title={pick(lang, "Sotuv qadamlari bo‘yicha menejer profili", "Manager profile by sales step", "Профиль менеджера по этапам продаж")}
        sub={pick(lang, "Har bir menejer voronka bo‘yicha qayerda kuchsiz", "Where each manager is weak across the funnel", "Где каждый менеджер слаб в воронке")}
        seg={<Seg items={periodItems(lang)} active={1} />}
      />
      <svg className="ml-chart" viewBox={`0 0 ${ML_W} ${ML_H}`} aria-hidden="true">
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
          <span key={s.en}>{s[lang]}</span>
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
const HM_SKILLS: Bi[] = [
  { uz: "Salom", en: "Greet", ru: "Привет." },
  { uz: "Ehtiyoj", en: "Needs", ru: "Потреб." },
  { uz: "Taqdimot", en: "Pitch", ru: "Презент." },
  { uz: "E’tiroz", en: "Obj.", ru: "Возраж." },
  { uz: "Yopish", en: "Close", ru: "Закр." },
];
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
  const { lang } = useLang();
  return (
    <Frame addr="app.metrixme.com/heatmap">
      <Head
        title={pick(lang, "Menejer × ko‘nikma", "Manager × skill", "Менеджер × навык")}
        sub={pick(lang, "Sotuv qadamlari bo‘yicha ball (0–100)", "Score by sales step (0–100)", "Балл по этапам продаж (0–100)")}
        seg={<Seg items={periodItems(lang)} active={1} />}
      />
      <div className="hm-grid">
        <div className="hm-corner" />
        {HM_SKILLS.map((s) => (
          <div key={s.en} className="hm-colh mono">
            {s[lang]}
          </div>
        ))}
        <div className="hm-colh mono hm-avgh">{pick(lang, "O‘RT", "AVG", "СРЕД")}</div>

        {HM_ROWS.map((row) => (
          <HmRow key={row.n} row={row} />
        ))}

        <div className="hm-rowh hm-foot">{pick(lang, "O‘RTACHA", "AVERAGE", "СРЕДНЕЕ")}</div>
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
