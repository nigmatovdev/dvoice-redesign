/* ============================================================
   Sales — i18n dictionary. Languages: uz (default) · en.
   Ported from the original landing.js I18N table.
   ============================================================ */

export type Lang = "uz" | "en";

export const LANGS: Lang[] = ["uz", "en"];

export const dict = {
  // ---- nav ----
  nav_features: { uz: "Imkoniyatlar", en: "Features" },
  nav_how: { uz: "Qanday ishlaydi", en: "How it works" },
  nav_showcase: { uz: "Dashboard", en: "Dashboard" },
  nav_pricing: { uz: "Narxlar", en: "Pricing" },
  nav_faq: { uz: "Savollar", en: "FAQ" },
  nav_login: { uz: "Kirish", en: "Log in" },
  nav_cta: { uz: "Bepul boshlash", en: "Start free" },

  // ---- hero ----
  hero_eyebrow: { uz: "AI NUTQ TAHLILI · amoCRM", en: "AI SPEECH ANALYTICS · amoCRM" },
  hero_title: {
    uz: "Har bir qo‘ng‘iroqni natijaga aylantiring.",
    en: "Turn every sales call into a score.",
  },
  hero_sub: {
    uz: "Sales barcha qo‘ng‘iroqlarni tinglaydi, ularni 0–100 ball bilan baholaydi va bitimlar qayerda yo‘qolayotganini hamda qaysi menejerga coaching kerakligini avtomatik ko‘rsatadi.",
    en: "Sales listens to 100% of your calls, scores each one 0–100, and shows exactly where deals leak and which managers need coaching — automatically.",
  },
  hero_cta1: { uz: "Bepul boshlash", en: "Start free" },
  hero_cta2: { uz: "Demoni ko‘rish", en: "Watch demo" },
  hero_note1: { uz: "amoCRM integratsiyasi", en: "amoCRM integration" },
  hero_note2: { uz: "14 kunlik bepul sinov", en: "14-day free trial" },
  hero_note3: { uz: "Karta shart emas", en: "No card required" },
  tick1_l: { uz: "tahlil qilingan qo‘ng‘iroq", en: "calls analysed" },
  tick2_l: { uz: "o‘rtacha call score", en: "avg. call score" },
  tick3_l: { uz: "konversiya o‘sishi", en: "conversion lift" },

  // ---- preview ----
  pv_addr: { uz: "app.sales.uz/dashboard", en: "app.sales.uz/dashboard" },
  pv_title: { uz: "Kunlik operatsion panel", en: "Daily operations panel" },
  pv_sub: { uz: "1 742 qo‘ng‘iroq · Hafta", en: "1,742 calls · This week" },
  pv_k1: { uz: "CALL SCORE", en: "CALL SCORE" },
  pv_k2: { uz: "PICKUP", en: "PICKUP" },
  pv_k3: { uz: "KONVERSIYA", en: "CONVERSION" },
  pv_hist: { uz: "Call score taqsimoti · 0–100", en: "Call score distribution · 0–100" },
  lg_crit: { uz: "Tanqidiy", en: "Critical" },
  lg_coach: { uz: "Coaching", en: "Coaching" },
  lg_good: { uz: "Yaxshi", en: "Good" },
  lg_great: { uz: "A’lo", en: "Great" },

  // ---- trust ----
  trust_label: {
    uz: "O‘zbekistondagi sotuv jamoalari ishonadi",
    en: "Trusted by sales teams across Uzbekistan",
  },

  // ---- features ----
  feat_eyebrow: { uz: "IMKONIYATLAR", en: "CAPABILITIES" },
  feat_h2: {
    uz: "Qo‘ng‘iroqlarni tinglashning o‘rniga — natijani o‘qing.",
    en: "Stop listening to calls. Start reading the outcome.",
  },
  feat_lede: {
    uz: "Sales — qo‘ng‘iroq markazingiz uchun nutq tahlili platformasi. Transkripsiya, ballash, coaching va pipeline — bitta tizimda.",
    en: "Sales is the speech-analytics layer for your contact center. Transcription, scoring, coaching and pipeline — in one system.",
  },
  f1_t: { uz: "Avtomatik call scoring", en: "Automatic call scoring" },
  f1_d: {
    uz: "AI har bir qo‘ng‘iroqni sizning sotuv skriptingiz bo‘yicha 0–100 ball bilan baholaydi — qo‘lda tinglashsiz.",
    en: "AI scores every call 0–100 against your own sales script — no manual listening.",
  },
  f1_g: { uz: "100% QO‘NG‘IROQ", en: "100% OF CALLS" },
  f2_t: { uz: "Coaching zonasi", en: "Coaching zone" },
  f2_d: {
    uz: "40–60 ballik “oraliq” qo‘ng‘iroqlarni topadi — aynan shu yerda kichik coaching katta natija beradi.",
    en: "Surfaces the 40–60 “in-between” calls — where a little coaching delivers the biggest lift.",
  },
  f2_g: { uz: "40–60 BALL", en: "40–60 SCORE" },
  f3_t: { uz: "Pipeline konversiya", en: "Pipeline conversion" },
  f3_d: {
    uz: "Bosqichdan bosqichga o‘tish darajasini ko‘rsatadi va bitimlar aynan qayerda to‘kilayotganini belgilaydi.",
    en: "Maps stage-to-stage conversion and pinpoints exactly where deals fall out of the funnel.",
  },
  f3_g: { uz: "FUNNEL", en: "FUNNEL" },
  f4_t: { uz: "Menejer × ko‘nikma heatmap", en: "Manager × skill heatmap" },
  f4_d: {
    uz: "Har bir menejerni sotuv qadamlari bo‘yicha baholaydi — kim salomlashishda, kim e’tirozda kuchsiz.",
    en: "Rates every manager across each sales step — who’s weak at the opening, who’s weak at objections.",
  },
  f4_g: { uz: "HEATMAP", en: "HEATMAP" },
  f5_t: { uz: "E’tirozlar tahlili", en: "Objection analytics" },
  f5_d: {
    uz: "Eng tez-tez uchraydigan e’tirozlarni va ularning yopilishga ta’sirini avtomatik ajratadi.",
    en: "Automatically clusters the most frequent objections and their impact on closing.",
  },
  f5_g: { uz: "NLP", en: "NLP" },
  f6_t: { uz: "amoCRM bilan jonli ulanish", en: "Live amoCRM sync" },
  f6_d: {
    uz: "Qo‘ng‘iroqlar, bosqichlar va bitimlar amoCRM bilan real vaqtda sinxronlanadi — qo‘shimcha ish yo‘q.",
    en: "Calls, stages and deals sync with amoCRM in real time — zero extra busywork.",
  },
  f6_g: { uz: "INTEGRATSIYA", en: "INTEGRATION" },

  // ---- how ----
  how_eyebrow: { uz: "QANDAY ISHLAYDI", en: "HOW IT WORKS" },
  how_h2: { uz: "Uch qadam — tinglashdan o‘sishgacha.", en: "Three steps — from listening to growth." },
  s1_t: { uz: "Ulang", en: "Connect" },
  s1_d: {
    uz: "amoCRM va telefoniyangizni bir necha daqiqada ulang. Tarixiy qo‘ng‘iroqlar avtomatik yuklanadi.",
    en: "Connect amoCRM and your telephony in minutes. Historical calls import automatically.",
  },
  s2_t: { uz: "Tahlil qiladi", en: "It analyses" },
  s2_d: {
    uz: "AI har bir qo‘ng‘iroqni transkripsiya qiladi, skript bo‘yicha ballaydi va zaif nuqtalarni belgilaydi.",
    en: "AI transcribes every call, scores it against your script and flags the weak points.",
  },
  s3_t: { uz: "O‘sing", en: "You grow" },
  s3_d: {
    uz: "Bitta ekranda coaching zonasini, pipeline’ni va menejerlar reytingini ko‘rib, konversiyani oshiring.",
    en: "See the coaching zone, pipeline and manager ranking on one screen — and lift conversion.",
  },

  // ---- showcase ----
  sc_eyebrow: { uz: "MAHSULOT", en: "THE PRODUCT" },
  sc_h2: { uz: "Butun qo‘ng‘iroq markazi — bitta ekranda.", en: "Your whole contact center — on one screen." },
  sc_lede: {
    uz: "Operatsion panel sifat, ko‘nikma va pipeline holatini bir joyda jamlaydi. Aynan shu interfeysni siz uchun moslab beramiz.",
    en: "The operations panel brings quality, skill and pipeline together in one place — the exact interface we tailor for you.",
  },
  sc_l1: { uz: "Call score histogrammasi 4 sifat zonasi bilan", en: "Call-score histogram with 4 quality zones" },
  sc_l2: { uz: "Pipeline funnel va bosqich konversiyasi", en: "Pipeline funnel and stage conversion" },
  sc_l3: { uz: "Menejer × ko‘nikma heatmap va reyting", en: "Manager × skill heatmap and ranking" },
  sc_l4: { uz: "Qorong‘i va yorug‘ rejim · o‘zbek tilida", en: "Dark & light mode · in Uzbek" },
  sc_shot_alt: { uz: "Sales operatsion dashboard", en: "Sales operations dashboard" },

  // ---- results ----
  rs_eyebrow: { uz: "NATIJALAR", en: "RESULTS" },
  rs_h2: { uz: "Tinglashga ketgan vaqt — o‘sishga.", en: "Time spent listening, returned as growth." },
  r1_n: { uz: "100%", en: "100%" },
  r1_l: { uz: "qo‘ng‘iroqlar tahlil qilinadi — tanlangan namuna emas", en: "of calls analysed — not a sampled few" },
  r2_n: { uz: "8st→5daq", en: "8h→5min" },
  r2_l: {
    uz: "kunlik QA — qo‘lda tinglashdan avtomatik hisobotgacha",
    en: "daily QA — from manual listening to an automatic report",
  },
  r3_n: { uz: "+18%", en: "+18%" },
  r3_l: { uz: "coaching’dan keyin o‘rtacha konversiya o‘sishi", en: "average conversion lift after coaching" },
  r4_n: { uz: "<24 soat", en: "<24h" },
  r4_l: { uz: "ulanishdan birinchi tahlilgacha", en: "from connection to first insight" },

  // ---- integrations ----
  in_eyebrow: { uz: "INTEGRATSIYALAR", en: "INTEGRATIONS" },
  in_h2: { uz: "Sizning stack’ingiz bilan ishlaydi.", en: "Works with your stack." },
  in_lede: {
    uz: "amoCRM’dan boshlab telefoniya va xabar almashish kanallarigacha — Sales mavjud jarayoningizga ulanadi.",
    en: "From amoCRM to telephony and messaging — Sales plugs into the workflow you already run.",
  },
  in1_d: { uz: "CRM · jonli sinxron", en: "CRM · live sync" },
  in2_d: { uz: "Telefoniya", en: "Telephony" },
  in3_d: { uz: "Xabar kanallari", en: "Messaging" },
  in4_d: { uz: "Ochiq API", en: "Open API" },

  // ---- pricing ----
  pr_eyebrow: { uz: "NARXLAR", en: "PRICING" },
  pr_h2: { uz: "Jamoangiz hajmiga mos tarif.", en: "A plan that fits your team." },
  pr_lede: {
    uz: "Barcha tariflar 14 kunlik bepul sinov bilan. Istalgan vaqtda bekor qiling.",
    en: "Every plan starts with a 14-day free trial. Cancel anytime.",
  },
  pl1_n: { uz: "START", en: "START" },
  pl1_d: { uz: "Kichik jamoalar va birinchi tajriba uchun.", en: "For small teams and a first pilot." },
  pl1_p: { uz: "0", en: "0" },
  pl1_per: { uz: "so‘m / 14 kun sinov", en: "UZS / 14-day trial" },
  pl2_n: { uz: "PRO", en: "PRO" },
  pl2_d: { uz: "O‘sayotgan sotuv bo‘limlari uchun — to‘liq tahlil.", en: "For growing sales teams — full analytics." },
  pl2_p: { uz: "1.2M", en: "1.2M" },
  pl2_per: { uz: "so‘m / oy · 10 menejer", en: "UZS / mo · 10 managers" },
  pl3_n: { uz: "BIZNES", en: "BUSINESS" },
  pl3_d: { uz: "Yirik qo‘ng‘iroq markazlari va maxsus talablar.", en: "For large contact centers and custom needs." },
  pl3_p: { uz: "Kelishuv", en: "Custom" },
  pl3_per: { uz: "individual taklif", en: "tailored quote" },
  pr_badge: { uz: "OMMABOP", en: "POPULAR" },
  pr_cta_free: { uz: "Bepul boshlash", en: "Start free" },
  pr_cta_pro: { uz: "PRO’ni tanlash", en: "Choose Pro" },
  pr_cta_ent: { uz: "Bog‘lanish", en: "Contact us" },
  feat_calls: { uz: "Cheksiz qo‘ng‘iroq tahlili", en: "Unlimited call analysis" },
  feat_score: { uz: "Avtomatik call scoring", en: "Automatic call scoring" },
  feat_dash: { uz: "Operatsion dashboard", en: "Operations dashboard" },
  feat_amo: { uz: "amoCRM integratsiyasi", en: "amoCRM integration" },
  feat_heat: { uz: "Menejer × ko‘nikma heatmap", en: "Manager × skill heatmap" },
  feat_coach: { uz: "Coaching zonasi va e’tirozlar", en: "Coaching zone & objections" },
  feat_api: { uz: "Ochiq API va webhook’lar", en: "Open API & webhooks" },
  feat_sla: { uz: "Maxsus SLA va onboarding", en: "Dedicated SLA & onboarding" },
  feat_manager: { uz: "Shaxsiy menejer", en: "Personal account manager" },
  feat_users3: { uz: "3 tagacha foydalanuvchi", en: "Up to 3 users" },

  // ---- testimonials ----
  ts_eyebrow: { uz: "MIJOZLAR", en: "CUSTOMERS" },
  ts_h2: { uz: "Sotuv rahbarlari nima deydi.", en: "What sales leaders say." },
  q1: {
    uz: "Avval kuniga 10 ta qo‘ng‘iroq tinglardik. Endi 100% tahlil qilinadi — coaching zonasi to‘g‘ridan-to‘g‘ri ko‘rinadi.",
    en: "We used to listen to 10 calls a day. Now 100% are analysed — the coaching zone is right there in front of you.",
  },
  q1_n: { uz: "Suhrob Abduaxatov", en: "Suhrob Abduaxatov" },
  q1_r: { uz: "Head of Sales · Sales.uz", en: "Head of Sales · Sales.uz" },
  q2: {
    uz: "Heatmap’dan keyin har bir menejer bilan nimaning ustida ishlashni aniq bilamiz. Konversiya ikki oyda sezilarli o‘sdi.",
    en: "After the heatmap we know exactly what to work on with each manager. Conversion grew noticeably in two months.",
  },
  q2_n: { uz: "Madina Yusupova", en: "Madina Yusupova" },
  q2_r: { uz: "Sotuv bo‘limi boshlig‘i", en: "Sales Department Lead" },
  q3: {
    uz: "amoCRM bilan ulash 15 daqiqa oldi. Ertasiga birinchi hisobot tayyor edi — hech qanday qo‘shimcha jadval yo‘q.",
    en: "Connecting amoCRM took 15 minutes. The first report was ready the next day — no extra spreadsheets.",
  },
  q3_n: { uz: "Og‘abek Karimov", en: "Og‘abek Karimov" },
  q3_r: { uz: "Operatsion direktor", en: "Operations Director" },

  // ---- faq ----
  faq_eyebrow: { uz: "SAVOLLAR", en: "FAQ" },
  faq_h2: { uz: "Tez-tez beriladigan savollar.", en: "Frequently asked questions." },
  faq1_q: { uz: "Qo‘ng‘iroqlar qaysi tilda tahlil qilinadi?", en: "Which languages are calls analysed in?" },
  faq1_a: {
    uz: "Sales o‘zbek va rus tillaridagi qo‘ng‘iroqlarni transkripsiya qiladi va tahlil qiladi, shu jumladan aralash nutqni ham.",
    en: "Sales transcribes and analyses calls in Uzbek and Russian, including mixed speech.",
  },
  faq2_q: { uz: "Call score qanday hisoblanadi?", en: "How is the call score calculated?" },
  faq2_a: {
    uz: "Siz o‘z sotuv skriptingiz va bosqichlaringizni belgilaysiz. AI har bir qo‘ng‘iroqni shu qadamlarga muvofiqligi bo‘yicha 0–100 ball bilan baholaydi.",
    en: "You define your own sales script and stages. The AI scores each call 0–100 based on how well it follows those steps.",
  },
  faq3_q: { uz: "amoCRM’dan boshqa CRM’lar qo‘llab-quvvatlanadimi?", en: "Do you support CRMs other than amoCRM?" },
  faq3_a: {
    uz: "amoCRM to‘liq qo‘llab-quvvatlanadi. Boshqa tizimlar uchun ochiq API va webhook’lar mavjud — Biznes tarifida moslashtiramiz.",
    en: "amoCRM is fully supported. For other systems we provide an open API and webhooks — and tailor integrations on the Business plan.",
  },
  faq4_q: { uz: "Ma’lumotlarim xavfsizmi?", en: "Is my data secure?" },
  faq4_a: {
    uz: "Barcha yozuvlar shifrlangan holda saqlanadi va faqat sizning jamoangizga ko‘rinadi. Ma’lumotlaringiz hech qachon uchinchi tomonga sotilmaydi.",
    en: "All recordings are stored encrypted and visible only to your team. Your data is never sold to third parties.",
  },
  faq5_q: { uz: "Ulanish qancha vaqt oladi?", en: "How long does setup take?" },
  faq5_a: {
    uz: "Odatda 15 daqiqa. amoCRM va telefoniyani ulaganingizdan so‘ng birinchi tahlil 24 soat ichida tayyor bo‘ladi.",
    en: "Usually 15 minutes. Once amoCRM and telephony are connected, the first insight is ready within 24 hours.",
  },
  faq6_q: { uz: "Bepul sinov qanday ishlaydi?", en: "How does the free trial work?" },
  faq6_a: {
    uz: "14 kun davomida barcha PRO imkoniyatlaridan karta talab qilinmasdan foydalanasiz. Yoqmasa — hech narsa to‘lamaysiz.",
    en: "You get full PRO features for 14 days with no card required. If it’s not for you — you pay nothing.",
  },

  // ---- final cta ----
  cta_eyebrow: { uz: "BUGUN BOSHLANG", en: "GET STARTED" },
  cta_h2: { uz: "Birinchi 100 ta qo‘ng‘irog‘ingizni bepul ballang.", en: "Score your first 100 calls free." },
  cta_lede: {
    uz: "Emailingizni qoldiring — biz hisob ochib, amoCRM ulashda yordam beramiz.",
    en: "Leave your email — we’ll open your account and help connect amoCRM.",
  },
  cta_input: { uz: "siz@kompaniya.uz", en: "you@company.uz" },
  cta_btn: { uz: "Bepul boshlash", en: "Start free" },

  // ---- footer ----
  ft_blurb: {
    uz: "Qo‘ng‘iroq markazlari uchun AI nutq tahlili. Har bir qo‘ng‘iroq — ball, har bir ball — o‘sish imkoniyati.",
    en: "AI speech analytics for contact centers. Every call a score, every score a chance to grow.",
  },
  ft_product: { uz: "Mahsulot", en: "Product" },
  ft_company: { uz: "Kompaniya", en: "Company" },
  ft_legal: { uz: "Huquqiy", en: "Legal" },
  ft_features: { uz: "Imkoniyatlar", en: "Features" },
  ft_pricing: { uz: "Narxlar", en: "Pricing" },
  ft_integr: { uz: "Integratsiyalar", en: "Integrations" },
  ft_changelog: { uz: "Yangilanishlar", en: "Changelog" },
  ft_about: { uz: "Biz haqimizda", en: "About" },
  ft_blog: { uz: "Blog", en: "Blog" },
  ft_careers: { uz: "Vakansiyalar", en: "Careers" },
  ft_contact: { uz: "Bog‘lanish", en: "Contact" },
  ft_privacy: { uz: "Maxfiylik", en: "Privacy" },
  ft_terms: { uz: "Shartlar", en: "Terms" },
  ft_security: { uz: "Xavfsizlik", en: "Security" },
  ft_cr: {
    uz: "© 2026 Sales — Speech analytics. Toshkent, O‘zbekiston.",
    en: "© 2026 Sales — Speech analytics. Tashkent, Uzbekistan.",
  },

  // ---- access / partner CTAs + contact modal ----
  cta_get_access: { uz: "Ruxsat olish", en: "Get Access" },
  cta_partner: { uz: "Hamkor bo‘lish", en: "Become a Partner" },
  modal_title: { uz: "Ruxsat olish uchun ariza", en: "Request access" },
  modal_sub: {
    uz: "Ma’lumotlaringizni qoldiring — jamoamiz tez orada siz bilan bog‘lanadi.",
    en: "Leave your details and our team will reach out to you shortly.",
  },
  modal_name: { uz: "To‘liq ism", en: "Full name" },
  modal_name_ph: { uz: "Ism Familiya", en: "Jane Doe" },
  modal_email: { uz: "Gmail manzili", en: "Gmail address" },
  modal_email_ph: { uz: "siz@gmail.com", en: "you@gmail.com" },
  modal_phone: { uz: "Telefon raqami", en: "Phone number" },
  modal_phone_ph: { uz: "+998 90 123 45 67", en: "+998 90 123 45 67" },
  modal_submit: { uz: "Yuborish", en: "Submit" },
  modal_sending: { uz: "Yuborilmoqda…", en: "Sending…" },
  modal_success_t: { uz: "Rahmat!", en: "Thank you!" },
  modal_success_d: {
    uz: "Arizangiz qabul qilindi. Tez orada bog‘lanamiz.",
    en: "Your request was received. We’ll be in touch soon.",
  },
  modal_close: { uz: "Yopish", en: "Close" },
  modal_err_email: { uz: "To‘g‘ri Gmail manzilini kiriting.", en: "Please enter a valid Gmail address." },

  // ---- about us page ----
  nav_about: { uz: "Biz", en: "About" },
  about_eyebrow: { uz: "BIZ HAQIMIZDA", en: "ABOUT US" },
  about_title: { uz: "Biz haqimizda", en: "About us" },
  about_desc: {
    uz: "Sales — O‘zbekistondagi sotuv jamoalari uchun AI nutq tahlili platformasini yaratayotgan jamoa. Bizning maqsadimiz — har bir qo‘ng‘iroqni o‘sish imkoniyatiga aylantirish va menejerlarga aniq, ma’lumotga asoslangan coaching berish.",
    en: "Sales is the team building an AI speech-analytics platform for sales teams across Uzbekistan. Our mission is to turn every call into a growth opportunity and give managers clear, data-driven coaching.",
  },
  about_team_eyebrow: { uz: "JAMOA", en: "TEAM" },
  about_team_title: { uz: "Jamoamiz a’zolari", en: "Meet the team" },
  about_team_lede: {
    uz: "Mahsulot, muhandislik va sotuvni birlashtirgan kichik, ammo kuchli jamoa.",
    en: "A small but mighty team spanning product, engineering and sales.",
  },
} as const;

export type DictKey = keyof typeof dict;

/** Translate a key for the given language. */
export function translate(key: DictKey, lang: Lang): string {
  return dict[key][lang];
}
