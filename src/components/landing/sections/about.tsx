import Image from "next/image";

import { type Lang } from "@/lib/i18n";

import { T, useLang } from "../lang-provider";
import { Reveal } from "../reveal";

interface Member {
  name: string;
  /** Photo URL. Replace with local /public/team/*.jpg when available. */
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
    photo: "https://i.pravatar.cc/200?img=12",
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
    photo: "https://i.pravatar.cc/200?img=45",
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
    photo: "https://i.pravatar.cc/200?img=33",
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
    photo: "https://i.pravatar.cc/200?img=47",
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
  {
    name: "Javohir To‘xtayev",
    photo: "https://i.pravatar.cc/200?img=15",
    initials: "JT",
    bg: "var(--redSoft)",
    fg: "var(--red)",
    role: { uz: "Sotuv rahbari", en: "Head of Sales", ru: "Руководитель продаж" },
    desc: {
      uz: "Mijozlarni joriy etishda yordam beradi. Coaching metodikasini jamoalar bilan ulashadi.",
      en: "Guides customer onboarding. Shares coaching methodology with teams.",
      ru: "Помогает клиентам с внедрением. Делится методикой коучинга с командами.",
    },
  },
  {
    name: "Kamola Sodiqova",
    photo: "https://i.pravatar.cc/200?img=26",
    initials: "KS",
    bg: "var(--blueSoft)",
    fg: "var(--blue)",
    role: { uz: "Mijozlar muvaffaqiyati", en: "Customer Success", ru: "Customer Success" },
    desc: {
      uz: "Mijozlar bilan kunma-kun ishlaydi va ularning natijalari o‘sishini ta’minlaydi.",
      en: "Works with customers day to day and makes sure their results keep growing.",
      ru: "Ежедневно работает с клиентами и обеспечивает рост их результатов.",
    },
  },
];

export function About() {
  const { lang } = useLang();
  return (
    <>
      {/* Title + description */}
      <section className="section" id="about" style={{ paddingBottom: 56 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">
              <span className="dot" style={{ background: "var(--blue)" }} />
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

      {/* Members */}
      <section className="section showcase" id="team" style={{ paddingTop: 72 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">
              <span className="dot" style={{ background: "var(--green)" }} />
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

          <div className="team-grid">
            {members.map((m) => (
              <Reveal key={m.name} className="member">
                <div className="member-photo-wrap">
                  {m.photo ? (
                    <Image
                      className="member-photo"
                      src={m.photo}
                      alt={m.name}
                      width={72}
                      height={72}
                    />
                  ) : (
                    <div className="member-av" style={{ background: m.bg, color: m.fg }}>
                      {m.initials}
                    </div>
                  )}
                </div>
                <div className="member-name">{m.name}</div>
                <div className="member-role">{m.role[lang]}</div>
                <p className="member-desc">{m.desc[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
