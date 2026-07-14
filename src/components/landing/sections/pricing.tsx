import { type DictKey } from "@/lib/i18n";

import { AccessButton } from "../contact-modal";
import { T, useLang } from "../lang-provider";
import { Reveal } from "../reveal";

interface Plan {
  name: DictKey;
  desc: DictKey;
  price: DictKey;
  per: DictKey;
  features: DictKey[];
  cta: DictKey;
  ctaPrimary?: boolean;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "pl1_n",
    desc: "pl1_d",
    price: "pl1_p",
    per: "pl1_per",
    features: ["feat_users3", "feat_calls", "feat_score", "feat_dash"],
    cta: "pr_cta_free",
  },
  {
    name: "pl2_n",
    desc: "pl2_d",
    price: "pl2_p",
    per: "pl2_per",
    features: ["feat_score", "feat_amo", "feat_heat", "feat_coach"],
    cta: "pr_cta_pro",
    ctaPrimary: true,
    featured: true,
  },
  {
    name: "pl3_n",
    desc: "pl3_d",
    price: "pl3_p",
    per: "pl3_per",
    features: ["feat_api", "feat_sla", "feat_manager", "feat_heat"],
    cta: "pr_cta_ent",
  },
];

export function Pricing() {
  const { t } = useLang();
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <Reveal className="section-head" >
          <div style={{ textAlign: "center" }}>
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="pr_eyebrow" />
              </span>
            </span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              <T k="pr_h2" />
            </h2>
            <p className="lede" style={{ margin: "14px auto 0" }}>
              <T k="pr_lede" />
            </p>
          </div>
        </Reveal>
        <div className="pricing-grid">
          {plans.map((p) => (
            <Reveal
              key={p.name}
              className={`plan${p.featured ? " featured" : ""}`}
              {...(p.featured ? { "data-badge": t("pr_badge") } : {})}
            >
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <>
      <div className="pname">
        <T k={plan.name} />
      </div>
      <div className="pdesc">
        <T k={plan.desc} />
      </div>
      <div className="price">
        <span className="amt mono">
          <T k={plan.price} />
        </span>
        <span className="per">
          <T k={plan.per} />
        </span>
      </div>
      <ul className="pfeat">
        {plan.features.map((f) => (
          <li key={f}>
            <span className="ck mono">✓</span>
            <span>
              <T k={f} />
            </span>
          </li>
        ))}
      </ul>
      <AccessButton k={plan.cta} className={`btn ${plan.ctaPrimary ? "btn-primary" : "btn-ghost"}`} />
    </>
  );
}
