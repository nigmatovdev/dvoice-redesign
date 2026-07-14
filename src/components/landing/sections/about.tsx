"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { type Lang } from "@/lib/i18n";

import { T, useLang } from "../lang-provider";
import { Reveal } from "../reveal";

interface Member {
  name: string;
  /** Portrait URL. Replace with local /public/team/*.jpg when available. */
  photo: string;
  initials: string;
  bg: string;
  fg: string;
  role: Record<Lang, string>;
  desc: Record<Lang, string>;
}

const members: Member[] = [
  {
    name: "Suhrob Abduaxatov",
    photo: "https://i.pravatar.cc/600?img=12",
    initials: "SA",
    bg: "var(--amberSoft)",
    fg: "var(--amber)",
    role: { uz: "Asoschisi · Bosh direktor", en: "Founder · CEO", ru: "Основатель · CEO" },
    desc: {
      uz: "Sotuv jamoalarini boshqarishda 10 yillik tajriba. Mahsulot strategiyasi va mijozlar bilan ishlashga rahbarlik qiladi.",
      en: "A decade of leading sales teams. Drives product strategy and customer success.",
      ru: "10 лет опыта в управлении отделами продаж. Отвечает за стратегию продукта и работу с клиентами.",
    },
  },
  {
    name: "Madina Yusupova",
    photo: "https://i.pravatar.cc/600?img=45",
    initials: "MY",
    bg: "var(--blueSoft)",
    fg: "var(--blue)",
    role: { uz: "Mahsulot direktori", en: "Head of Product", ru: "Директор по продукту" },
    desc: {
      uz: "Dashboard va tahlil interfeyslarini ishlab chiqadi. Murakkab ma’lumotni sodda qarorlarga aylantiradi.",
      en: "Shapes the dashboard and analytics experience. Turns complex data into simple decisions.",
      ru: "Создаёт интерфейсы дашборда и аналитики. Превращает сложные данные в простые решения.",
    },
  },
  {
    name: "Og‘abek Karimov",
    photo: "https://i.pravatar.cc/600?img=33",
    initials: "OK",
    bg: "var(--greenSoft)",
    fg: "var(--green)",
    role: { uz: "Bosh muhandis", en: "Lead Engineer", ru: "Ведущий инженер" },
    desc: {
      uz: "Nutqni transkripsiya qilish va ballash tizimini quradi. amoCRM integratsiyasiga mas’ul.",
      en: "Builds the transcription and scoring pipeline. Owns the amoCRM integration.",
      ru: "Строит систему транскрипции и оценки. Отвечает за интеграцию с amoCRM.",
    },
  },
  {
    name: "Dilnoza Rahimova",
    photo: "https://i.pravatar.cc/600?img=47",
    initials: "DR",
    bg: "var(--violetSoft)",
    fg: "var(--violet)",
    role: { uz: "AI tadqiqotchi", en: "AI Researcher", ru: "AI-исследователь" },
    desc: {
      uz: "O‘zbek va rus tillari uchun nutq modellarini sozlaydi. E’tirozlar tahlilini takomillashtiradi.",
      en: "Tunes the speech models for Uzbek and Russian. Improves objection analytics.",
      ru: "Настраивает речевые модели для узбекского и русского. Совершенствует анализ возражений.",
    },
  },
];

export function About() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const count = members.length;
  const go = (i: number) => setActive((i + count) % count);

  // Lightweight touch swipe for mobile.
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 45) go(active + (dx < 0 ? 1 : -1));
    startX.current = null;
  };

  return (
    <>
      {/* Title + description */}
      <section className="section" id="about" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="about_eyebrow" />
              </span>
            </span>
            <h1 className="h2" style={{ marginTop: 14 }}>
              <T k="about_title" />
            </h1>
            <p className="lede">
              <T k="about_desc" />
            </p>
          </Reveal>
        </div>
      </section>

      {/* Members carousel */}
      <section className="section showcase" id="team" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">
              <span className="dot" />
              <span>
                <T k="about_team_eyebrow" />
              </span>
            </span>
            <h2 className="h2" style={{ marginTop: 14 }}>
              <T k="about_team_title" />
            </h2>
            <p className="lede">
              <T k="about_team_lede" />
            </p>
          </Reveal>

          <Reveal className="team-carousel">
            <div
              className="carousel-viewport"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {members.map((m, i) => (
                  <div
                    className="carousel-slide"
                    key={m.name}
                    aria-hidden={i !== active}
                  >
                    <article className="member-card">
                      <div className="photo">
                        {m.photo ? (
                          <Image
                            className="member-portrait"
                            src={m.photo}
                            alt={m.name}
                            fill
                            sizes="(max-width: 860px) 100vw, 420px"
                            style={{ objectFit: "cover" }}
                            priority={i === 0}
                          />
                        ) : (
                          <div className="member-av" style={{ background: m.bg, color: m.fg }}>
                            {m.initials}
                          </div>
                        )}
                      </div>
                      <div className="info">
                        <div className="mc-role" style={{ color: m.fg }}>
                          {m.role[lang]}
                        </div>
                        <div className="mc-name">{m.name}</div>
                        <p className="mc-desc">{m.desc[lang]}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => go(active - 1)}
                aria-label="Previous member"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <div className="carousel-dots" role="tablist">
                {members.map((m, i) => (
                  <button
                    key={m.name}
                    type="button"
                    className={`carousel-dot${i === active ? " active" : ""}`}
                    onClick={() => go(i)}
                    aria-label={`Go to ${m.name}`}
                    aria-selected={i === active}
                    role="tab"
                  />
                ))}
              </div>
              <button
                type="button"
                className="carousel-arrow"
                onClick={() => go(active + 1)}
                aria-label="Next member"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
