"use client";

import { type DictKey } from "@/lib/i18n";

import { T } from "../lang-provider";
import { Reveal } from "../reveal";

/**
 * About / Company section for the landing page (rendered just before the footer).
 *
 * Everything here is real text in the server HTML — no JS reveal step is needed
 * to read it. This exists so verifiers (e.g. Google for Startups) can confirm
 * what the company is, where it's based, and who is behind it.
 *
 * Team photos are real, downloaded into `/public/team/`. Each card links out
 * to that person's own LinkedIn profile. Roles are localized via the i18n
 * dict like the rest of the page's copy.
 */
interface TeamMember {
  name: string;
  /** i18n dict key for this person's role/title. */
  roleKey: DictKey;
  /** i18n dict key for this person's short background/bio line. Optional — omitted for members without a listed background. */
  bioKey?: DictKey;
  /** Path under /public — e.g. "/team/name.jpg". */
  photo: string;
  /** This person's own LinkedIn profile URL. */
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: "Azizbek Biimbetov",
    roleKey: "tm1_role",
    bioKey: "tm1_bio",
    photo: "/team/azizbek-biimbetov.jpg",
    linkedin: "https://www.linkedin.com/in/azizbek-biyimbetov/",
  },
  {
    name: "Habib Sharopov",
    roleKey: "tm2_role",
    bioKey: "tm2_bio",
    photo: "/team/habib-sharopov.png",
    linkedin: "https://www.linkedin.com/in/habib-sharopov/",
  },
  {
    name: "Arislanbek Kalbaev",
    roleKey: "tm3_role",
    bioKey: "tm3_bio",
    photo: "/team/arislanbek-kalbaev.jpg",
    linkedin: "https://www.linkedin.com/in/arislanbek-kalbaev-5590071b1/",
  },
  {
    name: "Abdusamad Nigmatov",
    roleKey: "tm4_role",
    bioKey: "tm4_bio",
    photo: "/team/abdusamad-nigmatov.jpg",
    linkedin: "https://www.linkedin.com/in/abdusamad-nigmatov/",
  },
];

const LinkedInIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21H9z" />
  </svg>
);

export function Company() {
  return (
    <section className="section" id="about">
      {/*
        Component-scoped styles. This section's shared classes (team-grid,
        tm-card, tm-av, tm-name, tm-role, tm-bg, tm-li, section-head, eyebrow,
        h2, lede…) live in globals.css and are reused as-is below. Everything new
        for this redesign is kept local here — under a `cmp-` prefix, or as a
        compound selector with an existing class (e.g. `.tm-card.cmp-team-card`)
        so it wins on specificity rather than by rule order — instead of
        touching the shared stylesheet.

        About and Team used to read as two disconnected, independently
        centered mini-sections (each with its own full eyebrow+heading+lede
        and the section forced to a full viewport screen, leaving a void
        around short content). This version treats them as one composed
        section: #about drops the viewport-height forcing so it flows at its
        natural content height (mirrors how #problem/#ceo/#ops/#integrations
        already opt out in globals.css — done here via the higher-specificity
        ID selector instead of touching the shared file).

        The About block itself is deliberately NOT the centered
        eyebrow→heading→paragraph stack used elsewhere on the page — that
        read as flat/generic. It borrows the asymmetric, left-aligned grid
        language Hero and Problem already use: a narrow label column
        (eyebrow + "About us") beside a wider column holding the mission
        statement as a larger, more confident line of text — hierarchy and
        layout doing the work instead of decoration. Team then resets to a
        centered rhythm (it's a symmetric 4-up card grid, which wants to be
        centered), bridged by a labeled rule (`cmp-divider`) that acts as the
        connective tissue between the two parts instead of an empty gap.
      */}
      <style>{`
        @media (min-width: 761px) {
          #about { min-height: 0; display: block; }
        }

        .cmp-about-grid {
          display: grid; grid-template-columns: minmax(200px, 340px) 1fr;
          gap: 48px; align-items: start;
        }
        .cmp-about-head .h2 { margin-top: 14px; }
        .lede.cmp-about-copy {
          font-size: clamp(18px, 2vw, 23px); font-weight: 500; line-height: 1.55;
          color: var(--ink2); max-width: none; margin: 0;
        }
        .cmp-about-stage {
          font-size: 13px; color: var(--ink3); margin: 10px 0 0;
        }

        .cmp-team-head { max-width: 600px; margin: 56px auto 40px; text-align: center; }
        .cmp-divider { position: relative; display: flex; justify-content: center; margin: 0 auto 26px; }
        .cmp-divider::before {
          content: ""; position: absolute; left: 0; right: 0; top: 50%;
          height: 1px; background: var(--rule);
        }
        .cmp-divider .eyebrow { position: relative; }
        .cmp-team-title {
          font-family: var(--font-display), var(--font-sans), system-ui, sans-serif;
          font-size: clamp(20px, 2.3vw, 25px); font-weight: 800;
          letter-spacing: -0.5px; margin: 0;
        }

        @media (max-width: 760px) {
          .cmp-about-grid { grid-template-columns: 1fr; gap: 18px; }
          .cmp-team-head { margin: 40px auto 28px; }
          .cmp-divider { margin-bottom: 20px; }
        }

        .tm-card.cmp-team-card { align-items: center; text-align: center; }
        .tm-card.cmp-team-card:hover {
          transform: translateY(-4px);
          border-color: var(--blue);
          box-shadow: 0 16px 40px -20px var(--blueSoft), var(--shadowLg);
        }
        .cmp-avatar {
          width: 76px; height: 76px; border-radius: 999px; padding: 3px;
          margin: 0 auto 18px; background: var(--brand-grad);
          transition: transform .25s cubic-bezier(.2,.7,.2,1), filter .25s ease;
        }
        .tm-card.cmp-team-card:hover .cmp-avatar { transform: scale(1.06); filter: saturate(1.2); }
        .cmp-avatar-img {
          width: 100%; height: 100%; border-radius: 999px; object-fit: cover; display: block;
          background: var(--surface); border: 2px solid var(--card);
        }
        .tm-li.cmp-li-btn {
          margin-top: auto; padding: 7px 13px; border-radius: 999px;
          border: 1px solid var(--rule); background: var(--surface);
        }
        .tm-li.cmp-li-btn:hover {
          border-color: var(--blue); color: var(--blue); background: var(--blueSoft);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="wrap">
        {/*
          Company description — visible in the raw server HTML. Asymmetric
          two-column layout (label column + statement column) instead of a
          centered stack — see the composition note above.
        */}
        <Reveal className="cmp-about-grid">
          <div className="cmp-about-head">
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="about_eyebrow" />
              </span>
            </span>
            <h2 className="h2">
              <T k="about_title" />
            </h2>
          </div>
          <div>
            <p className="lede cmp-about-copy">
              <T k="about_desc" />
            </p>
            <p className="cmp-about-stage">
              <T k="about_stage" />
            </p>
          </div>
        </Reveal>

        {/*
          Team sub-header — deliberately lighter than the About header above
          (smaller title, no standalone eyebrow pill of its own) so it reads
          as part two of the same section rather than a second section. The
          divider carries the "TEAM" eyebrow as the connective element.
        */}
        <Reveal className="cmp-team-head" style={{ transitionDelay: "60ms" }}>
          <div className="cmp-divider">
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="about_team_eyebrow" />
              </span>
            </span>
          </div>
          <h3 className="cmp-team-title">
            <T k="about_team_title" />
          </h3>
        </Reveal>

        <div className="team-grid">
          {team.map((m, i) => (
            <Reveal
              as="article"
              className="tm-card cmp-team-card"
              key={m.name}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="cmp-avatar">
                <img
                  className="cmp-avatar-img"
                  src={m.photo}
                  alt={m.name}
                  width={72}
                  height={72}
                  loading="lazy"
                />
              </div>
              <div className="tm-name">{m.name}</div>
              <div className="tm-role">
                <T k={m.roleKey} />
              </div>
              {m.bioKey && (
                <p className="tm-bg">
                  <T k={m.bioKey} />
                </p>
              )}
              <a
                className="tm-li cmp-li-btn"
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn — ${m.name}`}
              >
                {LinkedInIcon}
                <span>LinkedIn</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
