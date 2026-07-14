import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

interface Feature {
  bg: string;
  fg: string;
  icon: React.ReactNode;
  title: DictKey;
  desc: DictKey;
  tag: DictKey;
}

const features: Feature[] = [
  {
    bg: "var(--amberSoft)",
    fg: "var(--amber)",
    icon: <path d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5z" />,
    title: "f1_t",
    desc: "f1_d",
    tag: "f1_g",
  },
  {
    bg: "var(--redSoft)",
    fg: "var(--red)",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9.5 12l1.8 1.8L15 10" />
      </>
    ),
    title: "f2_t",
    desc: "f2_d",
    tag: "f2_g",
  },
  {
    bg: "var(--blueSoft)",
    fg: "var(--blue)",
    icon: <path d="M3 6h18l-7 8v6l-4-2v-4z" />,
    title: "f3_t",
    desc: "f3_d",
    tag: "f3_g",
  },
  {
    bg: "var(--greenSoft)",
    fg: "var(--green)",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    title: "f4_t",
    desc: "f4_d",
    tag: "f4_g",
  },
  {
    bg: "var(--violetSoft)",
    fg: "var(--violet)",
    icon: (
      <>
        <path d="M8 10h8M8 14h5" />
        <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-6a8 8 0 0 1 8-12h2a8 8 0 0 1 8 8z" />
      </>
    ),
    title: "f5_t",
    desc: "f5_d",
    tag: "f5_g",
  },
  {
    bg: "var(--blueSoft)",
    fg: "var(--blue)",
    icon: (
      <>
        <path d="M9 3v6M15 3v6" />
        <rect x="6" y="9" width="12" height="6" rx="2" />
        <path d="M12 15v3a3 3 0 0 0 3 3" />
      </>
    ),
    title: "f6_t",
    desc: "f6_d",
    tag: "f6_g",
  },
];

export function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="feat_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="feat_h2" />
          </h2>
          <p className="lede">
            <T k="feat_lede" />
          </p>
        </Reveal>
        <div className="features-grid">
          {features.map((f) => (
            <Reveal key={f.title} className="feature">
              <div className="ico" style={{ background: f.bg, color: f.fg }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {f.icon}
                </svg>
              </div>
              <h3>
                <T k={f.title} />
              </h3>
              <p>
                <T k={f.desc} />
              </p>
              <span className="tag">
                <T k={f.tag} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
