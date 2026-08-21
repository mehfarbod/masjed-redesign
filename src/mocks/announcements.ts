export type Announcement = {
  id: string;
  title: string;
  description: string;
  date: string;
  href: string;
};

export const announcements: Announcement[] = [
  {
    id: "announcement-1",
    title: "اطلاعیه برگزاری برنامه فرهنگی مسجد",
    description:
      "برنامه فرهنگی مسجد در روزهای آینده برگزار خواهد شد.",
    date: "۱۴۰۵/۰۵/۱۰",
    href: "/announcements/announcement-1",
  },
  {
    id: "announcement-2",
    title: "ثبت‌نام دوره‌های آموزشی جدید",
    description:
      "ثبت‌نام علاقه‌مندان برای شرکت در دوره‌های آموزشی آغاز شد.",
    date: "۱۴۰۵/۰۵/۰۸",
    href: "/announcements/announcement-2",
  },
  {
    id: "announcement-3",
    title: "تغییر زمان برخی برنامه‌های مسجد",
    description:
      "زمان برگزاری برخی از برنامه‌های مسجد تغییر کرده است.",
    date: "۱۴۰۵/۰۵/۰۵",
    href: "/announcements/announcement-3",
  },
];