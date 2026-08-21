export type LatestNewsItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const latestNews: LatestNewsItem[] = [
  {
    id: "news-1",
    category: "مسجد خبر",
    title: "برگزاری برنامه‌های فرهنگی و آموزشی در مساجد",
    description:
      "گزارشی کوتاه از تازه‌ترین برنامه‌ها و فعالیت‌های فرهنگی و آموزشی مساجد.",
    image: "/images/news/news-1.jpg",
    href: "/news/1",
  },
  {
    id: "news-2",
    category: "اطلاعیه",
    title: "اعلام برنامه‌های جدید سامانه جامع مساجد",
    description:
      "جزئیات برنامه‌ها و خدمات جدید سامانه جامع مساجد را در این بخش دنبال کنید.",
    image: "/images/news/news-2.jpg",
    href: "/news/2",
  },
];