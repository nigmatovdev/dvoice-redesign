import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

const steps: { num: string; title: DictKey; desc: DictKey }[] = [
  { num: "01", title: "s1_t", desc: "s1_d" },
  { num: "02", title: "s2_t", desc: "s2_d" },
  { num: "03", title: "s3_t", desc: "s3_d" },
];

export function How() {
  return (
    <section className="section" id="how" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="how_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="how_h2" />
          </h2>
        </Reveal>
        <div className="steps">
          {steps.map((s) => (
            <Reveal key={s.num} className="step">
              <div className="num mono">{s.num}</div>
              <h3>
                <T k={s.title} />
              </h3>
              <p>
                <T k={s.desc} />
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
