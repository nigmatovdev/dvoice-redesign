import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

interface Quote {
  text: DictKey;
  name: DictKey;
  role: DictKey;
  initials: string;
  bg: string;
  fg: string;
}

const quotes: Quote[] = [
  { text: "q1", name: "q1_n", role: "q1_r", initials: "SA", bg: "var(--amberSoft)", fg: "var(--amber)" },
  { text: "q2", name: "q2_n", role: "q2_r", initials: "MY", bg: "var(--blueSoft)", fg: "var(--blue)" },
  { text: "q3", name: "q3_n", role: "q3_r", initials: "OK", bg: "var(--greenSoft)", fg: "var(--green)" },
];

export function Testimonials() {
  return (
    <section className="section showcase" id="customers">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="ts_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="ts_h2" />
          </h2>
        </Reveal>
        <div className="quotes">
          {quotes.map((q) => (
            <Reveal key={q.text} className="quote">
              <div className="mk">“</div>
              <p>
                <T k={q.text} />
              </p>
              <div className="who">
                <div className="av" style={{ background: q.bg, color: q.fg }}>
                  {q.initials}
                </div>
                <div>
                  <div className="nm">
                    <T k={q.name} />
                  </div>
                  <div className="rl">
                    <T k={q.role} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
