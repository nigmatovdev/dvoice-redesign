import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

const faqs: { q: DictKey; a: DictKey }[] = [
  { q: "faq1_q", a: "faq1_a" },
  { q: "faq2_q", a: "faq2_a" },
  { q: "faq3_q", a: "faq3_a" },
  { q: "faq4_q", a: "faq4_a" },
  { q: "faq5_q", a: "faq5_a" },
];

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="faq_eyebrow" />
              </span>
            </span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              <T k="faq_h2" />
            </h2>
          </div>
        </Reveal>
        <div className="faq-grid">
          {faqs.map((f) => (
            <Reveal key={f.q} as="details" className="faq">
              <summary>
                <span>
                  <T k={f.q} />
                </span>
                <span className="plus" />
              </summary>
              <div className="a">
                <T k={f.a} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
