import {
  Newspaper,
  Bell,
  Clapperboard,
  Images,
  type LucideIcon,
} from "lucide-react";

export type NavigationChild = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationChild[];
};

export const navigationItems: NavigationItem[] = [
  {
    label: "خانه",
    href: "/",
  },

  {
    label: "اخبار",
    children: [
      {
        label: "آخرین اخبار",
        description: "تازه‌ترین اخبار و رویدادها",
        href: "/news",
        icon: Newspaper,
      },
      {
        label: "اطلاعیه‌ها",
        description: "اطلاعیه‌های رسمی",
        href: "/announcements",
        icon: Bell,
      },
    ],
  },

  {
    label: "رسانه",
    children: [
      {
        label: "مسجد نماوا",
        description: "ویدیوها و رسانه",
        href: "/media",
        icon: Clapperboard,
      },
      {
        label: "مسجد نگار",
        description: "تصاویر و گالری",
        href: "/gallery",
        icon: Images,
      },
    ],
  },

  {
    label: "درباره ما",
    href: "/about",
  },

  {
    label: "ارتباط با ما",
    href: "/contact",
  },
];