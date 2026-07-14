"use client";

import { type Lang } from "@/lib/i18n";

import { useLang } from "../lang-provider";

interface Block {
  h: string;
  p?: string[];
  list?: string[];
}
interface Policy {
  title: string;
  updated: string;
  intro: string;
  blocks: Block[];
  contactNote: string; // text shown before the Telegram link
}

const TELEGRAM = "https://t.me/arislanbek9";
const EMAIL = "info@metrixme.com";

const CONTENT: Record<Lang, Policy> = {
  uz: {
    title: "Maxfiylik siyosati",
    updated: "Oxirgi yangilanish: 2026-yil 24-iyun",
    intro:
      "Ushbu Maxfiylik siyosati metrixme (metrixme.com) platformasi shaxsiy ma'lumotlarni qanday yig‘ishi, ishlatishi va himoya qilishini tushuntiradi. Platformadan foydalanib yoki saytdagi formani to‘ldirib, siz ushbu siyosatga rozilik bildirasiz.",
    blocks: [
      {
        h: "1. Biz yig‘adigan ma'lumotlar",
        p: ["Biz quyidagi ma'lumotlarni yig‘amiz:"],
        list: [
          "Aloqa ma'lumotlari: kompaniya nomi, lavozim, ism, telefon raqami va elektron pochta (saytdagi forma orqali).",
          "Qo‘ng‘iroq yozuvlari va audio: tahlil uchun yuklangan yoki integratsiya orqali olingan sotuv qo‘ng‘iroqlari.",
          "Foydalanish ma'lumotlari: brauzer turi, qurilma, IP-manzil va platformadan foydalanish statistikasi.",
        ],
      },
      {
        h: "2. Ma'lumotlardan foydalanish maqsadi",
        list: [
          "Xizmatni taqdim etish va qo‘ng‘iroqlarni AI yordamida tahlil qilish.",
          "Sizning so‘rovingizga javob berish va demo / kirish huquqini taqdim etish.",
          "Xizmat sifatini yaxshilash va analitik hisobotlar tayyorlash.",
          "Qonuniy talablarni bajarish.",
        ],
      },
      {
        h: "3. Qo‘ng‘iroq yozuvlari va AI tahlili",
        p: [
          "Sotuv qo‘ng‘iroqlari faqat tahlil va hisobot maqsadida qayta ishlanadi. Audio va transkriptlar uchinchi tomonlarga sotilmaydi. Tahlil natijalari faqat sizning tashkilotingizga ko‘rinadi.",
        ],
      },
      {
        h: "4. Ma'lumotlarni ulashish",
        p: [
          "Biz shaxsiy ma'lumotlarni sotmaymiz. Ma'lumotlar faqat xizmatni ta'minlash uchun zarur bo‘lgan ishonchli xizmat ko‘rsatuvchilar (masalan, hosting va infratuzilma) bilan, maxfiylik shartlari asosida ulashilishi mumkin.",
        ],
      },
      {
        h: "5. Saqlash va xavfsizlik",
        p: [
          "Ma'lumotlar shifrlangan kanallar orqali uzatiladi va himoyalangan serverlarda saqlanadi. Biz ruxsatsiz kirish, o‘zgartirish yoki yo‘qotishdan himoya qilish uchun texnik va tashkiliy choralarni qo‘llaymiz.",
        ],
      },
      {
        h: "6. Ma'lumotlarni saqlash muddati",
        p: [
          "Shaxsiy ma'lumotlar yig‘ilgan maqsad uchun zarur bo‘lgan muddatgacha yoki qonun talab qilgan muddatgacha saqlanadi. So‘rov bo‘yicha ma'lumotlaringizni o‘chirib tashlashimiz mumkin.",
        ],
      },
      {
        h: "7. Sizning huquqlaringiz",
        list: [
          "O‘zingiz haqingizdagi ma'lumotlarga kirish va ularni tuzatishni so‘rash.",
          "Ma'lumotlaringizni o‘chirishni so‘rash.",
          "Ma'lumotlarni qayta ishlashga roziligingizni qaytarib olish.",
        ],
      },
      {
        h: "8. Cookie-fayllar",
        p: [
          "Sayt asosiy funksiyalar va afzalliklarni (masalan, til va mavzu tanlovi) saqlash uchun localStorage va shunga o‘xshash texnologiyalardan foydalanadi.",
        ],
      },
      {
        h: "9. Siyosatdagi o‘zgarishlar",
        p: [
          "Biz ushbu siyosatni vaqti-vaqti bilan yangilashimiz mumkin. Yangilangan versiya ushbu sahifada e'lon qilinadi va sana yangilanadi.",
        ],
      },
    ],
    contactNote:
      "Maxfiylik bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning:",
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 24, 2026",
    intro:
      "This Privacy Policy explains how the metrixme platform (metrixme.com) collects, uses, and protects personal data. By using the platform or submitting the form on our site, you agree to this policy.",
    blocks: [
      {
        h: "1. Information we collect",
        p: ["We collect the following data:"],
        list: [
          "Contact details: company name, position, name, phone number, and email (via the site form).",
          "Call recordings and audio: sales calls uploaded for analysis or received through integrations.",
          "Usage data: browser type, device, IP address, and platform usage statistics.",
        ],
      },
      {
        h: "2. How we use data",
        list: [
          "To provide the service and analyze calls with AI.",
          "To respond to your request and grant demo / access.",
          "To improve service quality and produce analytics reports.",
          "To comply with legal obligations.",
        ],
      },
      {
        h: "3. Call recordings and AI analysis",
        p: [
          "Sales calls are processed solely for analysis and reporting. Audio and transcripts are never sold to third parties. Analysis results are visible only to your organization.",
        ],
      },
      {
        h: "4. Data sharing",
        p: [
          "We do not sell personal data. Data may be shared only with trusted service providers necessary to deliver the service (e.g. hosting and infrastructure), under confidentiality terms.",
        ],
      },
      {
        h: "5. Storage and security",
        p: [
          "Data is transmitted over encrypted channels and stored on protected servers. We apply technical and organizational measures to guard against unauthorized access, alteration, or loss.",
        ],
      },
      {
        h: "6. Data retention",
        p: [
          "Personal data is kept only as long as necessary for the purpose collected or as required by law. We can delete your data upon request.",
        ],
      },
      {
        h: "7. Your rights",
        list: [
          "Request access to and correction of your data.",
          "Request deletion of your data.",
          "Withdraw your consent to processing.",
        ],
      },
      {
        h: "8. Cookies",
        p: [
          "The site uses localStorage and similar technologies to keep core functionality and preferences (such as language and theme choice).",
        ],
      },
      {
        h: "9. Changes to this policy",
        p: [
          "We may update this policy from time to time. The updated version will be posted on this page with a revised date.",
        ],
      },
    ],
    contactNote: "If you have any privacy questions, contact us:",
  },
  ru: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 24 июня 2026 г.",
    intro:
      "Настоящая Политика конфиденциальности объясняет, как платформа metrixme (metrixme.com) собирает, использует и защищает персональные данные. Используя платформу или отправляя форму на сайте, вы соглашаетесь с этой политикой.",
    blocks: [
      {
        h: "1. Какие данные мы собираем",
        p: ["Мы собираем следующие данные:"],
        list: [
          "Контактные данные: название компании, должность, имя, номер телефона и электронная почта (через форму на сайте).",
          "Записи звонков и аудио: звонки отдела продаж, загруженные для анализа или полученные через интеграции.",
          "Данные об использовании: тип браузера, устройство, IP-адрес и статистика использования платформы.",
        ],
      },
      {
        h: "2. Как мы используем данные",
        list: [
          "Для предоставления сервиса и анализа звонков с помощью ИИ.",
          "Для ответа на ваш запрос и предоставления демо / доступа.",
          "Для повышения качества сервиса и подготовки аналитических отчётов.",
          "Для выполнения требований законодательства.",
        ],
      },
      {
        h: "3. Записи звонков и анализ ИИ",
        p: [
          "Звонки обрабатываются исключительно для анализа и отчётности. Аудио и расшифровки не продаются третьим лицам. Результаты анализа доступны только вашей организации.",
        ],
      },
      {
        h: "4. Передача данных",
        p: [
          "Мы не продаём персональные данные. Данные могут передаваться только доверенным поставщикам услуг, необходимым для работы сервиса (например, хостинг и инфраструктура), на условиях конфиденциальности.",
        ],
      },
      {
        h: "5. Хранение и безопасность",
        p: [
          "Данные передаются по зашифрованным каналам и хранятся на защищённых серверах. Мы применяем технические и организационные меры для защиты от несанкционированного доступа, изменения или утраты.",
        ],
      },
      {
        h: "6. Срок хранения данных",
        p: [
          "Персональные данные хранятся только в течение срока, необходимого для целей сбора, или срока, требуемого законом. По запросу мы можем удалить ваши данные.",
        ],
      },
      {
        h: "7. Ваши права",
        list: [
          "Запросить доступ к своим данным и их исправление.",
          "Запросить удаление своих данных.",
          "Отозвать согласие на обработку.",
        ],
      },
      {
        h: "8. Файлы cookie",
        p: [
          "Сайт использует localStorage и аналогичные технологии для сохранения основных функций и настроек (например, выбор языка и темы).",
        ],
      },
      {
        h: "9. Изменения политики",
        p: [
          "Мы можем периодически обновлять эту политику. Обновлённая версия будет опубликована на этой странице с новой датой.",
        ],
      },
    ],
    contactNote: "Если у вас есть вопросы о конфиденциальности, свяжитесь с нами:",
  },
};

/** Language-aware privacy policy. Follows the live UZ/EN/RU toggle. */
export function Privacy() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  const eyebrow = lang === "ru" ? "Правовая информация" : lang === "en" ? "Legal" : "Huquqiy";
  const contactTitle = lang === "ru" ? "Контакты" : lang === "en" ? "Contact" : "Aloqa";

  return (
    <section className="section legal-section">
      <div className="wrap legal">
        <header className="legal-head">
          <span className="eyebrow" style={{ background: "var(--blueSoft)", color: "var(--blue)" }}>
            <span className="dot" />
            <span>{eyebrow}</span>
          </span>
          <h1 className="legal-title">{c.title}</h1>
          <p className="legal-updated mono">{c.updated}</p>
        </header>

        <article className="legal-card">
          <p className="legal-intro">{c.intro}</p>

          {c.blocks.map((b) => (
            <section key={b.h} className="legal-block">
              <h2>{b.h}</h2>
              {b.p?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {b.list && (
                <ul>
                  {b.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="legal-block">
            <h2>{contactTitle}</h2>
            <p>{c.contactNote}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>
              Telegram:{" "}
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                @arislanbek9
              </a>
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
