import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

const results: { num: DictKey; label: DictKey; color: string; width: string }[] = [
  { num: "r1_n", label: "r1_l", color: "var(--blue)", width: "100%" },
  { num: "r2_n", label: "r2_l", color: "var(--violet)", width: "88%" },
  { num: "r3_n", label: "r3_l", color: "var(--green)", width: "64%" },
  { num: "r4_n", label: "r4_l", color: "var(--amber)", width: "40%" },
];

export function Results() {
  return (
    <section className="section" id="results">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="rs_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="rs_h2" />
          </h2>
        </Reveal>
        <div className="results-grid">
          {results.map((r) => (
            <Reveal key={r.num} className="result">
              <div className="n" style={{ color: r.color }}>
                <T k={r.num} />
              </div>
              <div className="l">
                <T k={r.label} />
              </div>
              <div className="bar">
                <i style={{ width: r.width, background: r.color }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
