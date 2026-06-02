import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

const integrations: { logo: string; bg: string; fg: string; name: string; desc: DictKey }[] = [
  { logo: "a", bg: "var(--blueSoft)", fg: "var(--blue)", name: "amoCRM", desc: "in1_d" },
  { logo: "☎", bg: "var(--greenSoft)", fg: "var(--green)", name: "SIP / VATS", desc: "in2_d" },
  { logo: "✆", bg: "var(--violetSoft)", fg: "var(--violet)", name: "Telegram", desc: "in3_d" },
  { logo: "{ }", bg: "var(--amberSoft)", fg: "var(--amber)", name: "REST API", desc: "in4_d" },
];

export function Integrations() {
  return (
    <section className="section showcase" id="integrations" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="wrap">
        <Reveal className="section-head" >
          <span className="eyebrow">
            <span className="dot" style={{ background: "var(--blue)" }} />
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
              <div className="logo" style={{ background: it.bg, color: it.fg }}>
                {it.logo}
              </div>
              <div>
                <div className="nm">{it.name}</div>
                <div className="ds">
                  <T k={it.desc} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
