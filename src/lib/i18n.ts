/* ============================================================
   Sales — i18n dictionary. Languages: uz (default) · en · ru.
   Ported from the original landing.js I18N table.
   ============================================================ */

export type Lang = "uz" | "en" | "ru";

export const LANGS: Lang[] = ["uz", "en", "ru"];

export const dict = {
  // ---- nav ----
  nav_features: { uz: "Imkoniyatlar", en: "Features", ru: "Возможности" },
  nav_how: { uz: "Qanday ishlaydi", en: "How it works", ru: "Как работает" },
  nav_showcase: { uz: "Dashboard", en: "Dashboard", ru: "Дашборд" },
  nav_pricing: { uz: "Narxlar", en: "Pricing", ru: "Цены" },
  nav_faq: { uz: "Savollar", en: "FAQ", ru: "Вопросы" },
  nav_login: { uz: "Kirish", en: "Log in", ru: "Вход" },
  nav_cta: { uz: "Bepul boshlash", en: "Start free", ru: "Начать бесплатно" },

  // ---- hero ----
  hero_eyebrow: { uz: "AI NUTQ TAHLILI · amoCRM", en: "AI SPEECH ANALYTICS · amoCRM", ru: "AI-АНАЛИЗ РЕЧИ · amoCRM" },
  hero_title: {
    uz: "Har bir qo‘ng‘iroqni natijaga aylantiring.",
    en: "Turn every sales call into a score.",
    ru: "Превратите каждый звонок в результат.",
  },
  hero_sub: {
    uz: "Sales barcha qo‘ng‘iroqlarni tinglaydi, ularni 0–100 ball bilan baholaydi va bitimlar qayerda yo‘qolayotganini hamda qaysi menejerga coaching kerakligini avtomatik ko‘rsatadi.",
    en: "Sales listens to 100% of your calls, scores each one 0–100, and shows exactly where deals leak and which managers need coaching — automatically.",
    ru: "Sales слушает все звонки, оценивает каждый по шкале 0–100 и автоматически показывает, где теряются сделки и какому менеджеру нужен коучинг.",
  },
  hero_cta1: { uz: "Bepul boshlash", en: "Start free", ru: "Начать бесплатно" },
  hero_note1: { uz: "amoCRM integratsiyasi", en: "amoCRM integration", ru: "Интеграция с amoCRM" },
  hero_note2: { uz: "14 kunlik bepul sinov", en: "14-day free trial", ru: "14 дней бесплатно" },
  hero_note3: { uz: "Karta shart emas", en: "No card required", ru: "Без карты" },
  tick1_l: { uz: "tahlil qilingan qo‘ng‘iroq", en: "calls analysed", ru: "проанализированных звонков" },
  tick2_l: { uz: "o‘rtacha call score", en: "avg. call score", ru: "средний балл звонка" },
  tick3_l: { uz: "konversiya o‘sishi", en: "conversion lift", ru: "рост конверсии" },

  // ---- preview ----
  pv_addr: { uz: "app.sales.uz/dashboard", en: "app.sales.uz/dashboard", ru: "app.sales.uz/dashboard" },
  pv_title: { uz: "Kunlik operatsion panel", en: "Daily operations panel", ru: "Ежедневная операционная панель" },
  pv_sub: { uz: "1 742 qo‘ng‘iroq · Hafta", en: "1,742 calls · This week", ru: "1 742 звонка · Неделя" },
  pv_k1: { uz: "CALL SCORE", en: "CALL SCORE", ru: "CALL SCORE" },
  pv_k2: { uz: "PICKUP", en: "PICKUP", ru: "ДОЗВОН" },
  pv_k3: { uz: "KONVERSIYA", en: "CONVERSION", ru: "КОНВЕРСИЯ" },
  pv_hist: { uz: "Call score taqsimoti · 0–100", en: "Call score distribution · 0–100", ru: "Распределение баллов · 0–100" },
  lg_crit: { uz: "Tanqidiy", en: "Critical", ru: "Критично" },
  lg_coach: { uz: "Coaching", en: "Coaching", ru: "Коучинг" },
  lg_good: { uz: "Yaxshi", en: "Good", ru: "Хорошо" },
  lg_great: { uz: "A’lo", en: "Great", ru: "Отлично" },

  // ---- trust ----
  trust_label: {
    uz: "O‘zbekistondagi sotuv jamoalari ishonadi",
    en: "Trusted by sales teams across Uzbekistan",
    ru: "Нам доверяют отделы продаж по всему Узбекистану",
  },

  // ---- features ----
  feat_eyebrow: { uz: "IMKONIYATLAR", en: "CAPABILITIES", ru: "ВОЗМОЖНОСТИ" },
  feat_h2: {
    uz: "Qo‘ng‘iroqlarni tinglashning o‘rniga — natijani o‘qing.",
    en: "Stop listening to calls. Start reading the outcome.",
    ru: "Не слушайте звонки — читайте результат.",
  },
  feat_lede: {
    uz: "Sales — qo‘ng‘iroq markazingiz uchun nutq tahlili platformasi. Transkripsiya, ballash, coaching va pipeline — bitta tizimda.",
    en: "Sales is the speech-analytics layer for your contact center. Transcription, scoring, coaching and pipeline — in one system.",
    ru: "Sales — платформа речевой аналитики для вашего контакт-центра. Транскрипция, оценка, коучинг и воронка — в одной системе.",
  },
  f1_t: { uz: "Avtomatik call scoring", en: "Automatic call scoring", ru: "Автоматическая оценка звонков" },
  f1_d: {
    uz: "AI har bir qo‘ng‘iroqni sizning sotuv skriptingiz bo‘yicha 0–100 ball bilan baholaydi — qo‘lda tinglashsiz.",
    en: "AI scores every call 0–100 against your own sales script — no manual listening.",
    ru: "AI оценивает каждый звонок от 0 до 100 по вашему скрипту продаж — без ручного прослушивания.",
  },
  f1_g: { uz: "100% QO‘NG‘IROQ", en: "100% OF CALLS", ru: "100% ЗВОНКОВ" },
  f2_t: { uz: "Coaching zonasi", en: "Coaching zone", ru: "Зона коучинга" },
  f2_d: {
    uz: "40–60 ballik “oraliq” qo‘ng‘iroqlarni topadi — aynan shu yerda kichik coaching katta natija beradi.",
    en: "Surfaces the 40–60 “in-between” calls — where a little coaching delivers the biggest lift.",
    ru: "Находит «промежуточные» звонки с баллом 40–60 — именно там небольшой коучинг даёт наибольший рост.",
  },
  f2_g: { uz: "40–60 BALL", en: "40–60 SCORE", ru: "40–60 БАЛЛОВ" },
  f3_t: { uz: "Pipeline konversiya", en: "Pipeline conversion", ru: "Конверсия воронки" },
  f3_d: {
    uz: "Bosqichdan bosqichga o‘tish darajasini ko‘rsatadi va bitimlar aynan qayerda to‘kilayotganini belgilaydi.",
    en: "Maps stage-to-stage conversion and pinpoints exactly where deals fall out of the funnel.",
    ru: "Показывает переходы между этапами и точно указывает, где сделки выпадают из воронки.",
  },
  f3_g: { uz: "FUNNEL", en: "FUNNEL", ru: "ВОРОНКА" },
  f4_t: { uz: "Menejer × ko‘nikma heatmap", en: "Manager × skill heatmap", ru: "Тепловая карта менеджер × навык" },
  f4_d: {
    uz: "Har bir menejerni sotuv qadamlari bo‘yicha baholaydi — kim salomlashishda, kim e’tirozda kuchsiz.",
    en: "Rates every manager across each sales step — who’s weak at the opening, who’s weak at objections.",
    ru: "Оценивает каждого менеджера по этапам продаж — кто слаб в приветствии, кто в работе с возражениями.",
  },
  f4_g: { uz: "HEATMAP", en: "HEATMAP", ru: "HEATMAP" },
  f5_t: { uz: "E’tirozlar tahlili", en: "Objection analytics", ru: "Анализ возражений" },
  f5_d: {
    uz: "Eng tez-tez uchraydigan e’tirozlarni va ularning yopilishga ta’sirini avtomatik ajratadi.",
    en: "Automatically clusters the most frequent objections and their impact on closing.",
    ru: "Автоматически группирует самые частые возражения и их влияние на закрытие сделок.",
  },
  f5_g: { uz: "NLP", en: "NLP", ru: "NLP" },
  f6_t: { uz: "amoCRM bilan jonli ulanish", en: "Live amoCRM sync", ru: "Живая синхронизация с amoCRM" },
  f6_d: {
    uz: "Qo‘ng‘iroqlar, bosqichlar va bitimlar amoCRM bilan real vaqtda sinxronlanadi — qo‘shimcha ish yo‘q.",
    en: "Calls, stages and deals sync with amoCRM in real time — zero extra busywork.",
    ru: "Звонки, этапы и сделки синхронизируются с amoCRM в реальном времени — без лишней работы.",
  },
  f6_g: { uz: "INTEGRATSIYA", en: "INTEGRATION", ru: "ИНТЕГРАЦИЯ" },

  // ---- how ----
  how_eyebrow: { uz: "QANDAY ISHLAYDI", en: "HOW IT WORKS", ru: "КАК ЭТО РАБОТАЕТ" },
  how_h2: { uz: "Uch qadam — tinglashdan o‘sishgacha.", en: "Three steps — from listening to growth.", ru: "Три шага — от прослушивания к росту." },
  s1_t: { uz: "Ulang", en: "Connect", ru: "Подключите" },
  s1_d: {
    uz: "amoCRM va telefoniyangizni bir necha daqiqada ulang. Tarixiy qo‘ng‘iroqlar avtomatik yuklanadi.",
    en: "Connect amoCRM and your telephony in minutes. Historical calls import automatically.",
    ru: "Подключите amoCRM и телефонию за несколько минут. Исторические звонки загружаются автоматически.",
  },
  s2_t: { uz: "Tahlil qiladi", en: "It analyses", ru: "Анализирует" },
  s2_d: {
    uz: "AI har bir qo‘ng‘iroqni transkripsiya qiladi, skript bo‘yicha ballaydi va zaif nuqtalarni belgilaydi.",
    en: "AI transcribes every call, scores it against your script and flags the weak points.",
    ru: "AI транскрибирует каждый звонок, оценивает по скрипту и отмечает слабые места.",
  },
  s3_t: { uz: "O‘sing", en: "You grow", ru: "Растите" },
  s3_d: {
    uz: "Bitta ekranda coaching zonasini, pipeline’ni va menejerlar reytingini ko‘rib, konversiyani oshiring.",
    en: "See the coaching zone, pipeline and manager ranking on one screen — and lift conversion.",
    ru: "Видите зону коучинга, воронку и рейтинг менеджеров на одном экране — и повышаете конверсию.",
  },

  // ---- showcase ----
  sc_eyebrow: { uz: "MAHSULOT", en: "THE PRODUCT", ru: "ПРОДУКТ" },
  sc_h2: { uz: "Butun qo‘ng‘iroq markazi — bitta ekranda.", en: "Your whole contact center — on one screen.", ru: "Весь контакт-центр — на одном экране." },
  sc_lede: {
    uz: "Operatsion panel sifat, ko‘nikma va pipeline holatini bir joyda jamlaydi. Aynan shu interfeysni siz uchun moslab beramiz.",
    en: "The operations panel brings quality, skill and pipeline together in one place — the exact interface we tailor for you.",
    ru: "Операционная панель объединяет качество, навыки и воронку в одном месте — этот интерфейс мы настроим под вас.",
  },
  sc_l1: { uz: "Call score histogrammasi 4 sifat zonasi bilan", en: "Call-score histogram with 4 quality zones", ru: "Гистограмма баллов звонков с 4 зонами качества" },
  sc_l2: { uz: "Pipeline funnel va bosqich konversiyasi", en: "Pipeline funnel and stage conversion", ru: "Воронка продаж и конверсия по этапам" },
  sc_l3: { uz: "Menejer × ko‘nikma heatmap va reyting", en: "Manager × skill heatmap and ranking", ru: "Тепловая карта менеджер × навык и рейтинг" },
  sc_l4: { uz: "Qorong‘i va yorug‘ rejim · o‘zbek tilida", en: "Dark & light mode · in Uzbek", ru: "Тёмная и светлая темы" },
  sc_shot_alt: { uz: "Sales operatsion dashboard", en: "Sales operations dashboard", ru: "Операционный дашборд Sales" },
  sc_hint: { uz: "Ko‘rish uchun pastga aylantiring", en: "Scroll to explore", ru: "Листайте, чтобы посмотреть" },
  sc_i1_t: { uz: "Savdo Dinamikasi", en: "Sales Dynamics", ru: "Динамика продаж" },
  sc_i1_d: {
    uz: "Kunlar bo‘yicha qo‘ng‘iroqlar va konversiya dinamikasi.",
    en: "Calls and conversion trends over time.",
    ru: "Динамика звонков и конверсии по дням.",
  },
  sc_i2_t: { uz: "Bitimlar Oqimi va Tushum", en: "Deal Flow & Revenue", ru: "Поток сделок и выручка" },
  sc_i2_d: {
    uz: "Bitimlar oqimi, konversiya va tushum bitta ko‘rinishda.",
    en: "Deal flow, conversion and revenue in a single view.",
    ru: "Поток сделок, конверсия и выручка в одном представлении.",
  },
  sc_i3_t: { uz: "Baholash Mezonlari", en: "Scoring Criteria", ru: "Критерии оценки" },
  sc_i3_d: {
    uz: "Sotuv qadamlari bo‘yicha menejer profili va baholash.",
    en: "Manager profile and scoring across every sales step.",
    ru: "Профиль менеджера и оценка по этапам продаж.",
  },
  sc_i4_t: { uz: "Menejer × Ko‘nikma Heatmap", en: "Manager × Skill Heatmap", ru: "Тепловая карта менеджер × навык" },
  sc_i4_d: {
    uz: "Menejerlar va ko‘nikmalar bo‘yicha issiqlik xaritasi.",
    en: "A heatmap across managers and individual skills.",
    ru: "Тепловая карта по менеджерам и отдельным навыкам.",
  },

  // ---- results ----
  rs_eyebrow: { uz: "NATIJALAR", en: "RESULTS", ru: "РЕЗУЛЬТАТЫ" },
  rs_h2: { uz: "Tinglashga ketgan vaqt — o‘sishga.", en: "Time spent listening, returned as growth.", ru: "Время, потраченное на прослушивание, — в рост." },
  r1_n: { uz: "100%", en: "100%", ru: "100%" },
  r1_l: { uz: "qo‘ng‘iroqlar tahlil qilinadi — tanlangan namuna emas", en: "of calls analysed — not a sampled few", ru: "звонков анализируется — не выборка" },
  r2_n: { uz: "8st→5daq", en: "8h→5min", ru: "8ч→5мин" },
  r2_l: {
    uz: "kunlik QA — qo‘lda tinglashdan avtomatik hisobotgacha",
    en: "daily QA — from manual listening to an automatic report",
    ru: "ежедневный QA — от ручного прослушивания к авто-отчёту",
  },
  r3_n: { uz: "+18%", en: "+18%", ru: "+18%" },
  r3_l: { uz: "coaching’dan keyin o‘rtacha konversiya o‘sishi", en: "average conversion lift after coaching", ru: "средний рост конверсии после коучинга" },
  r4_n: { uz: "<24 soat", en: "<24h", ru: "<24ч" },
  r4_l: { uz: "ulanishdan birinchi tahlilgacha", en: "from connection to first insight", ru: "от подключения до первого инсайта" },

  // ---- integrations ----
  in_eyebrow: { uz: "INTEGRATSIYALAR", en: "INTEGRATIONS", ru: "ИНТЕГРАЦИИ" },
  in_h2: { uz: "Sizning stack’ingiz bilan ishlaydi.", en: "Works with your stack.", ru: "Работает с вашим стеком." },
  in_lede: {
    uz: "amoCRM’dan boshlab telefoniya va xabar almashish kanallarigacha — Sales mavjud jarayoningizga ulanadi.",
    en: "From amoCRM to telephony and messaging — Sales plugs into the workflow you already run.",
    ru: "От amoCRM до телефонии и мессенджеров — Sales встраивается в ваш текущий процесс.",
  },
  in1_d: { uz: "CRM · jonli sinxron", en: "CRM · live sync", ru: "CRM · живая синхронизация" },
  in2_d: { uz: "Telefoniya", en: "Telephony", ru: "Телефония" },
  in3_d: { uz: "Xabar kanallari", en: "Messaging", ru: "Мессенджеры" },
  in4_d: { uz: "Ochiq API", en: "Open API", ru: "Открытый API" },

  // ---- pricing ----
  pr_eyebrow: { uz: "NARXLAR", en: "PRICING", ru: "ЦЕНЫ" },
  pr_h2: { uz: "Jamoangiz hajmiga mos tarif.", en: "A plan that fits your team.", ru: "Тариф под размер вашей команды." },
  pr_lede: {
    uz: "Barcha tariflar 14 kunlik bepul sinov bilan. Istalgan vaqtda bekor qiling.",
    en: "Every plan starts with a 14-day free trial. Cancel anytime.",
    ru: "Все тарифы с 14-дневным бесплатным периодом. Отмена в любой момент.",
  },
  pl1_n: { uz: "START", en: "START", ru: "СТАРТ" },
  pl1_d: { uz: "Kichik jamoalar va birinchi tajriba uchun.", en: "For small teams and a first pilot.", ru: "Для небольших команд и первого пилота." },
  pl1_p: { uz: "0", en: "0", ru: "0" },
  pl1_per: { uz: "so‘m / 14 kun sinov", en: "UZS / 14-day trial", ru: "сум / 14 дней пробно" },
  pl2_n: { uz: "PRO", en: "PRO", ru: "PRO" },
  pl2_d: { uz: "O‘sayotgan sotuv bo‘limlari uchun — to‘liq tahlil.", en: "For growing sales teams — full analytics.", ru: "Для растущих отделов продаж — полная аналитика." },
  pl2_p: { uz: "1.2M", en: "1.2M", ru: "1.2M" },
  pl2_per: { uz: "so‘m / oy · 10 menejer", en: "UZS / mo · 10 managers", ru: "сум / мес · 10 менеджеров" },
  pl3_n: { uz: "BIZNES", en: "BUSINESS", ru: "БИЗНЕС" },
  pl3_d: { uz: "Yirik qo‘ng‘iroq markazlari va maxsus talablar.", en: "For large contact centers and custom needs.", ru: "Для крупных контакт-центров и особых требований." },
  pl3_p: { uz: "Kelishuv", en: "Custom", ru: "Договорная" },
  pl3_per: { uz: "individual taklif", en: "tailored quote", ru: "индивидуальное предложение" },
  pr_badge: { uz: "OMMABOP", en: "POPULAR", ru: "ПОПУЛЯРНЫЙ" },
  pr_cta_free: { uz: "Bepul boshlash", en: "Start free", ru: "Начать бесплатно" },
  pr_cta_pro: { uz: "PRO’ni tanlash", en: "Choose Pro", ru: "Выбрать PRO" },
  pr_cta_ent: { uz: "Bog‘lanish", en: "Contact us", ru: "Связаться" },
  feat_calls: { uz: "Cheksiz qo‘ng‘iroq tahlili", en: "Unlimited call analysis", ru: "Безлимитный анализ звонков" },
  feat_score: { uz: "Avtomatik call scoring", en: "Automatic call scoring", ru: "Автоматическая оценка звонков" },
  feat_dash: { uz: "Operatsion dashboard", en: "Operations dashboard", ru: "Операционный дашборд" },
  feat_amo: { uz: "amoCRM integratsiyasi", en: "amoCRM integration", ru: "Интеграция с amoCRM" },
  feat_heat: { uz: "Menejer × ko‘nikma heatmap", en: "Manager × skill heatmap", ru: "Тепловая карта менеджер × навык" },
  feat_coach: { uz: "Coaching zonasi va e’tirozlar", en: "Coaching zone & objections", ru: "Зона коучинга и возражения" },
  feat_api: { uz: "Ochiq API va webhook’lar", en: "Open API & webhooks", ru: "Открытый API и вебхуки" },
  feat_sla: { uz: "Maxsus SLA va onboarding", en: "Dedicated SLA & onboarding", ru: "Выделенный SLA и онбординг" },
  feat_manager: { uz: "Shaxsiy menejer", en: "Personal account manager", ru: "Персональный менеджер" },
  feat_users3: { uz: "3 tagacha foydalanuvchi", en: "Up to 3 users", ru: "До 3 пользователей" },

  // ---- testimonials ----
  ts_eyebrow: { uz: "MIJOZLAR", en: "CUSTOMERS", ru: "КЛИЕНТЫ" },
  ts_h2: { uz: "Sotuv rahbarlari nima deydi.", en: "What sales leaders say.", ru: "Что говорят руководители продаж." },
  q1: {
    uz: "Avval kuniga 10 ta qo‘ng‘iroq tinglardik. Endi 100% tahlil qilinadi — coaching zonasi to‘g‘ridan-to‘g‘ri ko‘rinadi.",
    en: "We used to listen to 10 calls a day. Now 100% are analysed — the coaching zone is right there in front of you.",
    ru: "Раньше слушали 10 звонков в день. Теперь анализируется 100% — зона коучинга прямо перед глазами.",
  },
  q1_n: { uz: "Suhrob Abduaxatov", en: "Suhrob Abduaxatov", ru: "Сухроб Абдуахатов" },
  q1_r: { uz: "Head of Sales · Sales.uz", en: "Head of Sales · Sales.uz", ru: "Руководитель продаж · Sales.uz" },
  q2: {
    uz: "Heatmap’dan keyin har bir menejer bilan nimaning ustida ishlashni aniq bilamiz. Konversiya ikki oyda sezilarli o‘sdi.",
    en: "After the heatmap we know exactly what to work on with each manager. Conversion grew noticeably in two months.",
    ru: "После тепловой карты мы точно знаем, над чем работать с каждым менеджером. Конверсия заметно выросла за два месяца.",
  },
  q2_n: { uz: "Madina Yusupova", en: "Madina Yusupova", ru: "Мадина Юсупова" },
  q2_r: { uz: "Sotuv bo‘limi boshlig‘i", en: "Sales Department Lead", ru: "Руководитель отдела продаж" },
  q3: {
    uz: "amoCRM bilan ulash 15 daqiqa oldi. Ertasiga birinchi hisobot tayyor edi — hech qanday qo‘shimcha jadval yo‘q.",
    en: "Connecting amoCRM took 15 minutes. The first report was ready the next day — no extra spreadsheets.",
    ru: "Подключение amoCRM заняло 15 минут. На следующий день был готов первый отчёт — без лишних таблиц.",
  },
  q3_n: { uz: "Og‘abek Karimov", en: "Og‘abek Karimov", ru: "Огабек Каримов" },
  q3_r: { uz: "Operatsion direktor", en: "Operations Director", ru: "Операционный директор" },

  // ---- faq ----
  faq_eyebrow: { uz: "SAVOLLAR", en: "FAQ", ru: "ВОПРОСЫ" },
  faq_h2: { uz: "Tez-tez beriladigan savollar.", en: "Frequently asked questions.", ru: "Часто задаваемые вопросы." },
  faq1_q: { uz: "Qo‘ng‘iroqlar qaysi tilda tahlil qilinadi?", en: "Which languages are calls analysed in?", ru: "На каких языках анализируются звонки?" },
  faq1_a: {
    uz: "Sales o‘zbek va rus tillaridagi qo‘ng‘iroqlarni transkripsiya qiladi va tahlil qiladi, shu jumladan aralash nutqni ham.",
    en: "Sales transcribes and analyses calls in Uzbek and Russian, including mixed speech.",
    ru: "Sales транскрибирует и анализирует звонки на узбекском и русском, включая смешанную речь.",
  },
  faq2_q: { uz: "Call score qanday hisoblanadi?", en: "How is the call score calculated?", ru: "Как рассчитывается балл звонка?" },
  faq2_a: {
    uz: "Siz o‘z sotuv skriptingiz va bosqichlaringizni belgilaysiz. AI har bir qo‘ng‘iroqni shu qadamlarga muvofiqligi bo‘yicha 0–100 ball bilan baholaydi.",
    en: "You define your own sales script and stages. The AI scores each call 0–100 based on how well it follows those steps.",
    ru: "Вы задаёте свой скрипт продаж и этапы. AI оценивает каждый звонок от 0 до 100 по соответствию этим шагам.",
  },
  faq3_q: { uz: "amoCRM’dan boshqa CRM’lar qo‘llab-quvvatlanadimi?", en: "Do you support CRMs other than amoCRM?", ru: "Поддерживаются ли CRM кроме amoCRM?" },
  faq3_a: {
    uz: "amoCRM to‘liq qo‘llab-quvvatlanadi. Boshqa tizimlar uchun ochiq API va webhook’lar mavjud — Biznes tarifida moslashtiramiz.",
    en: "amoCRM is fully supported. For other systems we provide an open API and webhooks — and tailor integrations on the Business plan.",
    ru: "amoCRM поддерживается полностью. Для других систем есть открытый API и вебхуки — настроим на тарифе «Бизнес».",
  },
  faq4_q: { uz: "Ma’lumotlarim xavfsizmi?", en: "Is my data secure?", ru: "Мои данные в безопасности?" },
  faq4_a: {
    uz: "Barcha yozuvlar shifrlangan holda saqlanadi va faqat sizning jamoangizga ko‘rinadi. Ma’lumotlaringiz hech qachon uchinchi tomonga sotilmaydi.",
    en: "All recordings are stored encrypted and visible only to your team. Your data is never sold to third parties.",
    ru: "Все записи хранятся в зашифрованном виде и видны только вашей команде. Ваши данные никогда не продаются третьим лицам.",
  },
  faq5_q: { uz: "Ulanish qancha vaqt oladi?", en: "How long does setup take?", ru: "Сколько занимает подключение?" },
  faq5_a: {
    uz: "Odatda 15 daqiqa. amoCRM va telefoniyani ulaganingizdan so‘ng birinchi tahlil 24 soat ichida tayyor bo‘ladi.",
    en: "Usually 15 minutes. Once amoCRM and telephony are connected, the first insight is ready within 24 hours.",
    ru: "Обычно 15 минут. После подключения amoCRM и телефонии первый инсайт готов в течение 24 часов.",
  },
  faq6_q: { uz: "Bepul sinov qanday ishlaydi?", en: "How does the free trial work?", ru: "Как работает бесплатный период?" },
  faq6_a: {
    uz: "14 kun davomida barcha PRO imkoniyatlaridan karta talab qilinmasdan foydalanasiz. Yoqmasa — hech narsa to‘lamaysiz.",
    en: "You get full PRO features for 14 days with no card required. If it’s not for you — you pay nothing.",
    ru: "14 дней все возможности PRO без карты. Не понравится — ничего не платите.",
  },

  // ---- final cta ----
  cta_eyebrow: { uz: "ERTA KIRISH", en: "EARLY ACCESS", ru: "РАННИЙ ДОСТУП" },
  cta_h2: {
    uz: "Birinchi 20 ta qo‘ng‘irog‘ingizni bepul tahlil qiling va natijani 2 daqiqa ichida oling.",
    en: "Analyse your first 20 calls free and get the result within 2 minutes.",
    ru: "Проанализируйте первые 20 звонков бесплатно и получите результат за 2 минуты.",
  },
  cta_lede: {
    uz: "Ma’lumotlaringizni qoldiring — jamoamiz 24 soat ichida siz bilan bog‘lanib, hisobni ishga tushiramiz.",
    en: "Leave your details — our team will get in touch within 24 hours and set up your account.",
    ru: "Оставьте свои данные — наша команда свяжется с вами в течение 24 часов и настроит аккаунт.",
  },
  cta_input: { uz: "siz@kompaniya.uz", en: "you@company.uz", ru: "you@company.uz" },
  cta_btn: { uz: "Bepul boshlash", en: "Start free", ru: "Начать бесплатно" },

  // ---- footer ----
  ft_blurb: {
    uz: "Qo‘ng‘iroq markazlari uchun AI nutq tahlili. Har bir qo‘ng‘iroq — ball, har bir ball — o‘sish imkoniyati.",
    en: "AI speech analytics for contact centers. Every call a score, every score a chance to grow.",
    ru: "AI речевая аналитика для контакт-центров. Каждый звонок — балл, каждый балл — шанс вырасти.",
  },
  ft_product: { uz: "Mahsulot", en: "Product", ru: "Продукт" },
  ft_company: { uz: "Kompaniya", en: "Company", ru: "Компания" },
  ft_legal: { uz: "Huquqiy", en: "Legal", ru: "Правовое" },
  ft_features: { uz: "Imkoniyatlar", en: "Features", ru: "Возможности" },
  ft_pricing: { uz: "Narxlar", en: "Pricing", ru: "Цены" },
  ft_integr: { uz: "Integratsiyalar", en: "Integrations", ru: "Интеграции" },
  ft_changelog: { uz: "Yangilanishlar", en: "Changelog", ru: "Обновления" },
  ft_about: { uz: "Biz haqimizda", en: "About", ru: "О нас" },
  ft_blog: { uz: "Blog", en: "Blog", ru: "Блог" },
  ft_careers: { uz: "Vakansiyalar", en: "Careers", ru: "Вакансии" },
  ft_contact: { uz: "Bog‘lanish", en: "Contact", ru: "Контакты" },
  ft_privacy: { uz: "Maxfiylik", en: "Privacy", ru: "Конфиденциальность" },
  ft_terms: { uz: "Shartlar", en: "Terms", ru: "Условия" },
  ft_security: { uz: "Xavfsizlik", en: "Security", ru: "Безопасность" },
  ft_cr: {
    uz: "© 2026 Sales — Speech analytics. Toshkent, O‘zbekiston.",
    en: "© 2026 Sales — Speech analytics. Tashkent, Uzbekistan.",
    ru: "© 2026 Sales — Speech analytics. Ташкент, Узбекистан.",
  },

  // ---- access / partner CTAs + contact modal ----
  cta_get_access: { uz: "Ruxsat olish", en: "Get Access", ru: "Получить доступ" },
  cta_partner: { uz: "Hamkor bo‘lish", en: "Become a Partner", ru: "Стать партнёром" },
  modal_title: { uz: "Ruxsat olish uchun ariza", en: "Request access", ru: "Запрос доступа" },
  modal_sub: {
    uz: "Ma’lumotlaringizni qoldiring — jamoamiz tez orada siz bilan bog‘lanadi.",
    en: "Leave your details and our team will reach out to you shortly.",
    ru: "Оставьте свои данные — наша команда свяжется с вами в ближайшее время.",
  },
  modal_name: { uz: "To‘liq ism", en: "Full name", ru: "Полное имя" },
  modal_name_ph: { uz: "Ism Familiya", en: "Jane Doe", ru: "Иван Иванов" },
  modal_email: { uz: "Gmail manzili", en: "Gmail address", ru: "Адрес Gmail" },
  modal_email_ph: { uz: "siz@gmail.com", en: "you@gmail.com", ru: "you@gmail.com" },
  modal_phone: { uz: "Telefon raqami", en: "Phone number", ru: "Номер телефона" },
  modal_phone_ph: { uz: "+998 90 123 45 67", en: "+998 90 123 45 67", ru: "+998 90 123 45 67" },
  modal_submit: { uz: "Yuborish", en: "Submit", ru: "Отправить" },
  modal_sending: { uz: "Yuborilmoqda…", en: "Sending…", ru: "Отправка…" },
  modal_success_t: { uz: "Rahmat!", en: "Thank you!", ru: "Спасибо!" },
  modal_success_d: {
    uz: "Arizangiz qabul qilindi. Tez orada bog‘lanamiz.",
    en: "Your request was received. We’ll be in touch soon.",
    ru: "Заявка принята. Скоро свяжемся с вами.",
  },
  modal_close: { uz: "Yopish", en: "Close", ru: "Закрыть" },
  modal_err_email: { uz: "To‘g‘ri Gmail manzilini kiriting.", en: "Please enter a valid Gmail address.", ru: "Введите корректный адрес Gmail." },

  // ---- about us page ----
  nav_about: { uz: "Biz", en: "About", ru: "О нас" },
  about_eyebrow: { uz: "BIZ HAQIMIZDA", en: "ABOUT US", ru: "О НАС" },
  about_title: { uz: "Biz haqimizda", en: "About us", ru: "О нас" },
  about_desc: {
    uz: "Sales — O‘zbekistondagi sotuv jamoalari uchun AI nutq tahlili platformasini yaratayotgan jamoa. Bizning maqsadimiz — har bir qo‘ng‘iroqni o‘sish imkoniyatiga aylantirish va menejerlarga aniq, ma’lumotga asoslangan coaching berish.",
    en: "Sales is the team building an AI speech-analytics platform for sales teams across Uzbekistan. Our mission is to turn every call into a growth opportunity and give managers clear, data-driven coaching.",
    ru: "Sales — команда, создающая платформу AI-аналитики речи для отделов продаж в Узбекистане. Наша цель — превратить каждый звонок в возможность роста и дать менеджерам понятный коучинг на основе данных.",
  },
  about_team_eyebrow: { uz: "JAMOA", en: "TEAM", ru: "КОМАНДА" },
  about_team_title: { uz: "Jamoamiz a’zolari", en: "Meet the team", ru: "Наша команда" },
  about_team_lede: {
    uz: "Mahsulot, muhandislik va sotuvni birlashtirgan kichik, ammo kuchli jamoa.",
    en: "A small but mighty team spanning product, engineering and sales.",
    ru: "Небольшая, но сильная команда: продукт, инженерия и продажи.",
  },
} as const;

export type DictKey = keyof typeof dict;

/** Translate a key for the given language. */
export function translate(key: DictKey, lang: Lang): string {
  return dict[key][lang];
}
