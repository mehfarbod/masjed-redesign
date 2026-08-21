export type ServiceHighlight = {
  id: string;
  anchorId: string;
  service: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const serviceHighlights: ServiceHighlight[] = [
  {
    id: "education-1",
    anchorId: "education",
    service: "مسجد آموز",
    title: "آموزش و یادگیری در فضای مسجد",
    description:
      "معرفی برنامه‌های آموزشی و فعالیت‌های علمی و تربیتی در مساجد.",
    image: "/images/news/news-2.jpg",
    href: "/education",
  },

  {
    id: "media-1",
    anchorId: "media",
    service: "مسجد نماوا",
    title: "تازه‌ترین ویدیوهای مسجد نماوا",
    description:
      "گزیده‌ای از ویدیوها، گفتگوها و محتوای تصویری منتشرشده در سامانه.",
    image: "/images/hero/mosque-hero.jpg",
    href: "/media",
  },

  {
    id: "gallery-1",
    anchorId: "gallery",
    service: "مسجد نگار",
    title: "تصاویر منتخب از مساجد",
    description:
      "گالری تصاویر و قاب‌هایی از معماری، برنامه‌ها و رویدادهای مساجد.",
    image: "/images/news/news-1.jpg",
    href: "/gallery",
  },

  {
    id: "research-1",
    anchorId: "research",
    service: "پژوهش",
    title: "پژوهش و مطالعات مسجد",
    description:
      "مروری بر پژوهش‌ها، مقالات و مطالب تخصصی مرتبط با مسجد.",
    image: "/images/news/news-2.jpg",
    href: "/research",
  },

  {
    id: "culture-1",
    anchorId: "culture",
    service: "مسجد فرهنگ",
    title: "نقش مسجد در گسترش فرهنگ و فعالیت‌های اجتماعی",
    description:
      "نگاهی کوتاه به برنامه‌های فرهنگی و اجتماعی مساجد و تأثیر آن‌ها بر جامعه.",
    image: "/images/news/news-1.jpg",
    href: "/culture",
  },
];