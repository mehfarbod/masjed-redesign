export type SocialLink = {
  label: string;
  href: string;
  type: "instagram" | "bale" | "eitaa" | "phone" | "email";
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "#",
    type: "instagram",
  },
  {
    label: "Bale",
    href: "#",
    type: "bale",
  },
  {
    label: "Eitaa",
    href: "#",
    type: "eitaa",
  },
  {
    label: "تماس",
    href: "tel:+980000000000",
    type: "phone",
  },
  {
    label: "ایمیل",
    href: "mailto:info@example.com",
    type: "email",
  },
];