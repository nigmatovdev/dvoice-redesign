"use client";

import { type Lang } from "@/lib/i18n";

import { useLang } from "../lang-provider";

interface Block {
  h: string;
  p?: string[];
  list?: string[];
}
interface Terms {
  title: string;
  updated: string;
  intro: string;
  blocks: Block[];
  contactNote: string;
}

const TELEGRAM = "https://t.me/arislanbek9";
const EMAIL = "info@metrixme.com";

const CONTENT: Record<Lang, Terms> = {
  uz: {
    title: "Foydalanish shartlari",
    updated: "Oxirgi yangilanish: 2026-yil 14-iyul",
    intro:
      "Ushbu Foydalanish shartlari metrixme (metrixme.com) platformasidan foydalanish qoidalarini belgilaydi. Platformadan foydalanib yoki saytdagi formani to‘ldirib, siz ushbu shartlarga rozilik bildirasiz. Agar rozi bo‘lmasangiz, xizmatdan foydalanmang.",
    blocks: [
      {
        h: "1. Xizmat tavsifi",
        p: [
          "metrixme — sotuv qo‘ng‘iroqlari uchun AI asosidagi nutq tahlili platformasi: transkripsiya, 0–100 ball, coaching tavsiyalari va pipeline analitikasi. Mahsulot rivojlanishi bilan imkoniyatlar o‘zgarishi mumkin.",
        ],
      },
      {
        h: "2. Foydalanish huquqi va hisob",
        p: [
          "Xizmat tashkilotlar uchun mo‘ljallangan. Erta kirish davrida kirish huquqi bizning ixtiyorimizga ko‘ra beriladi. Siz taqdim etgan ma’lumotlarning to‘g‘riligi va hisobingiz xavfsizligi uchun javobgarsiz.",
        ],
      },
      {
        h: "3. Qo‘ng‘iroqlar va ma’lumotlar bo‘yicha javobgarlik",
        p: [
          "Qo‘ng‘iroqlarni yozib olish, yuklash va tahlil qilish uchun qonuniy asos hamda zarur roziliklarni (xodimlar va mijozlardan) olish sizning javobgarligingizdir. Ma’lumotlaringiz sizga tegishli bo‘lib qoladi; audio va transkriptlar faqat xizmatni taqdim etish uchun qayta ishlanadi va sotilmaydi.",
        ],
      },
      {
        h: "4. Ruxsat etilmagan foydalanish",
        list: [
          "Xizmatdan noqonuniy maqsadlarda yoki uchinchi tomon huquqlarini buzgan holda foydalanish.",
          "Zararli dastur yuklash yoki xizmat xavfsizligini buzishga urinish.",
          "Xizmatni teskari muhandislik qilish yoki ruxsatsiz qayta sotish.",
        ],
      },
      {
        h: "5. To‘lovlar va sinov",
        p: [
          "Tariflar va bepul sinov shartlari ro‘yxatdan o‘tishda ko‘rsatiladi. Erta kirish davrida ayrim imkoniyatlar bepul bo‘lishi mumkin; narxlar oldindan ogohlantirilgan holda o‘zgarishi mumkin.",
        ],
      },
      {
        h: "6. Intellektual mulk",
        p: [
          "metrixme platformasi, dasturiy ta’minoti, brendi va kontenti bizga tegishli. Sizga xizmatdan foydalanish uchun cheklangan huquq beriladi; bizga esa xizmatni taqdim etish uchun ma’lumotlaringizni qayta ishlash huquqi beriladi.",
        ],
      },
      {
        h: "7. Kafolatlardan voz kechish",
        p: [
          "Xizmat “boricha” taqdim etiladi. Tahlil natijalari avtomatik baholardir va xatoliklarni o‘z ichiga olishi mumkin — ular sizning mustaqil qaroringiz o‘rnini bosmaydi. Biz xizmatning uzluksiz yoki xatosiz ishlashini kafolatlamaymiz.",
        ],
      },
      {
        h: "8. Javobgarlik chegarasi",
        p: [
          "Qonun ruxsat etgan darajada, metrixme bilvosita yoki tasodifiy zararlar uchun javobgar emas. Umumiy javobgarlik siz to‘lagan haq bilan cheklanadi (bepul foydalanish davrida — nominal miqdor bilan).",
        ],
      },
      {
        h: "9. Tugatish va o‘zgarishlar",
        p: [
          "Har ikki tomon xizmatdan foydalanishni yoki uni taqdim etishni to‘xtatishi mumkin; shartlar buzilganda biz kirishni to‘xtatib qo‘yishimiz mumkin. Biz ushbu shartlarni yangilashimiz mumkin — yangilangan sana bilan e’lon qilinadi va davom etayotgan foydalanish rozilik hisoblanadi.",
        ],
      },
      {
        h: "10. Amaldagi qonun",
        p: [
          "Ushbu shartlar O‘zbekiston Respublikasi qonunlariga muvofiq tartibga solinadi. Nizolar Toshkent shahridagi vakolatli organlarda ko‘rib chiqiladi.",
        ],
      },
    ],
    contactNote: "Shartlar bo‘yicha savollaringiz bo‘lsa, biz bilan bog‘laning:",
  },
  en: {
    title: "Terms of Service",
    updated: "Last updated: July 14, 2026",
    intro:
      "These Terms of Service govern your use of the metrixme (metrixme.com) platform. By using the platform or submitting the form on our site, you agree to these terms. If you do not agree, do not use the service.",
    blocks: [
      {
        h: "1. The service",
        p: [
          "metrixme is an AI-based speech-analytics platform for sales calls: transcription, 0–100 scoring, coaching insights, and pipeline analytics. Features may change as the product evolves.",
        ],
      },
      {
        h: "2. Eligibility and accounts",
        p: [
          "The service is intended for businesses. During early access, access is granted at our discretion. You are responsible for the accuracy of the information you provide and for the security of your account.",
        ],
      },
      {
        h: "3. Your calls and data",
        p: [
          "You are responsible for having a lawful basis and any required consent (from employees and customers) to record, upload, and analyze calls. Your data remains yours; audio and transcripts are processed only to provide the service and are never sold.",
        ],
      },
      {
        h: "4. Acceptable use",
        list: [
          "Do not use the service unlawfully or to infringe the rights of others.",
          "Do not upload malware or attempt to compromise the service.",
          "Do not reverse-engineer the service or resell it without permission.",
        ],
      },
      {
        h: "5. Fees and trial",
        p: [
          "Plans and any free-trial terms are shown at signup. During early access some features may be free; pricing may change with prior notice.",
        ],
      },
      {
        h: "6. Intellectual property",
        p: [
          "metrixme and its software, brand, and content are our property. You are granted a limited right to use the service; we are granted a limited right to process your data to provide it.",
        ],
      },
      {
        h: "7. Disclaimers",
        p: [
          "The service is provided “as is.” Analytics are automated estimates and may contain errors — they do not replace your own judgment. We do not warrant uninterrupted or error-free operation.",
        ],
      },
      {
        h: "8. Limitation of liability",
        p: [
          "To the extent permitted by law, metrixme is not liable for indirect or incidental damages. Total liability is limited to the fees you paid (or a nominal amount during free access).",
        ],
      },
      {
        h: "9. Termination and changes",
        p: [
          "Either party may stop using or providing the service; we may suspend access for breach. We may update these terms — the updated version is posted with a revised date, and continued use constitutes acceptance.",
        ],
      },
      {
        h: "10. Governing law",
        p: [
          "These terms are governed by the laws of the Republic of Uzbekistan. Disputes are handled by the competent authorities in Tashkent.",
        ],
      },
    ],
    contactNote: "If you have any questions about these terms, contact us:",
  },
  ru: {
    title: "Условия использования",
    updated: "Последнее обновление: 14 июля 2026 г.",
    intro:
      "Настоящие Условия использования регулируют использование платформы metrixme (metrixme.com). Используя платформу или отправляя форму на сайте, вы соглашаетесь с этими условиями. Если вы не согласны, не используйте сервис.",
    blocks: [
      {
        h: "1. Описание сервиса",
        p: [
          "metrixme — платформа речевой аналитики на базе ИИ для звонков отдела продаж: транскрипция, оценка 0–100, рекомендации по коучингу и аналитика воронки. Возможности могут меняться по мере развития продукта.",
        ],
      },
      {
        h: "2. Доступ и учётная запись",
        p: [
          "Сервис предназначен для бизнеса. В период раннего доступа доступ предоставляется по нашему усмотрению. Вы отвечаете за достоверность предоставленных данных и за безопасность своей учётной записи.",
        ],
      },
      {
        h: "3. Ваши звонки и данные",
        p: [
          "Вы отвечаете за наличие законного основания и необходимых согласий (сотрудников и клиентов) на запись, загрузку и анализ звонков. Ваши данные остаются вашими; аудио и расшифровки обрабатываются только для оказания сервиса и не продаются.",
        ],
      },
      {
        h: "4. Недопустимое использование",
        list: [
          "Не используйте сервис незаконно или для нарушения прав третьих лиц.",
          "Не загружайте вредоносное ПО и не пытайтесь нарушить безопасность сервиса.",
          "Не выполняйте обратную разработку и не перепродавайте сервис без разрешения.",
        ],
      },
      {
        h: "5. Оплата и пробный период",
        p: [
          "Тарифы и условия пробного периода показываются при регистрации. В период раннего доступа часть возможностей может быть бесплатной; цены могут меняться с предварительным уведомлением.",
        ],
      },
      {
        h: "6. Интеллектуальная собственность",
        p: [
          "metrixme, его программное обеспечение, бренд и контент принадлежат нам. Вам предоставляется ограниченное право пользоваться сервисом; нам — ограниченное право обрабатывать ваши данные для его предоставления.",
        ],
      },
      {
        h: "7. Отказ от гарантий",
        p: [
          "Сервис предоставляется «как есть». Результаты аналитики — это автоматические оценки, которые могут содержать ошибки и не заменяют ваше собственное суждение. Мы не гарантируем бесперебойную или безошибочную работу.",
        ],
      },
      {
        h: "8. Ограничение ответственности",
        p: [
          "В пределах, допустимых законом, metrixme не несёт ответственности за косвенный или случайный ущерб. Совокупная ответственность ограничена уплаченной вами суммой (в период бесплатного доступа — номинальной суммой).",
        ],
      },
      {
        h: "9. Прекращение и изменения",
        p: [
          "Любая из сторон может прекратить использование или предоставление сервиса; мы можем приостановить доступ при нарушении. Мы можем обновлять эти условия — обновлённая версия публикуется с новой датой, а продолжение использования означает согласие.",
        ],
      },
      {
        h: "10. Применимое право",
        p: [
          "Настоящие условия регулируются законодательством Республики Узбекистан. Споры рассматриваются компетентными органами в городе Ташкенте.",
        ],
      },
    ],
    contactNote: "Если у вас есть вопросы по условиям, свяжитесь с нами:",
  },
};

/** Language-aware Terms of Service. Follows the live UZ/EN/RU toggle. */
export function Terms() {
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
