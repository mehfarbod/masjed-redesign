export type Service = {
title: string;
description: string;
icon: string;
href: string;
highlightId?: string;
};

export const services: Service[] = [
{
title: "مسجد خبر",
description: "آخرین اخبار و رویدادها",
icon: "newspaper",
href: "/news",
},
{
title: "مسجد آموز",
description: "مطالب آموزشی و فرهنگی",
icon: "graduation",
href: "/education",
highlightId: "education",
},
{
title: "مسجد نماوا",
description: "ویدیو و محتوای رسانه‌ای",
icon: "video",
href: "/media",
highlightId: "media",
},
{
title: "مسجد نگار",
description: "تصاویر و گالری",
icon: "image",
href: "/gallery",
highlightId: "gallery",
},
{
title: "پژوهش",
description: "مقالات و مطالعات",
icon: "book",
href: "/research",
highlightId: "research",
},
{
title: "مسجد فرهنگ",
description: "فعالیت‌های فرهنگی",
icon: "landmark",
href: "/culture",
highlightId: "culture",
},
];
