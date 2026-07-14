import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

// Only amoCRM + manual upload are live today; the rest are honestly badged
// "soon". Logos all share the brand blue for a cohesive, on-brand grid.
const integrations: { logo: string; name: DictKey; desc: DictKey; status: "live" | "soon" }[] = [
  { logo: "a", name: "in1_n", desc: "in1_d", status: "live" },
  { logo: "↑", name: "in2_n", desc: "in2_d", status: "live" },
  { logo: "B", name: "in3_n", desc: "in3_d", status: "soon" },
  { logo: "☎", name: "in4_n", desc: "in4_d", status: "soon" },
];

export function Integrations() {
  return (
    <section className="section showcase" id="integrations" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="wrap">
        <Reveal className="section-head" >
          <span className="eyebrow">
            <span className="dot" />
            <span>
              <T k="in_eyebrow" />
            </span>
          </span>
          <h2 className="h2">
            <T k="in_h2" />
          </h2>
          <p className="lede">
            <T k="in_lede" />
          </p>
        </Reveal>
        <div className="integ-grid">
          {integrations.map((it) => (
            <Reveal key={it.name} className="integ">
              <div className="logo" style={{ background: "var(--blueSoft)", color: "var(--blue)" }}>
                {it.logo}
              </div>
              <div className="integ-text">
                <div className="nm">
                  <T k={it.name} />
                </div>
                <div className="ds">
                  <T k={it.desc} />
                </div>
              </div>
              <span className={`integ-badge ${it.status}`}>
                <T k={it.status === "live" ? "in_live" : "in_soon"} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
