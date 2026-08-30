import Link from "next/link";
import { socialLinks } from "@/constants/contact";

function SocialIcon({
type,
}: {
type: "instagram" | "bale" | "eitaa" | "phone" | "email";
}) {
switch (type) {
case "instagram":
return ( <svg
       viewBox="0 0 24 24"
       className="h-4.5 w-4.5"
       fill="none"
       stroke="currentColor"
       strokeWidth="1.8"
     > <rect x="3" y="3" width="18" height="18" rx="5" /> <circle cx="12" cy="12" r="4" /> <circle
         cx="17.5"
         cy="6.5"
         r="0.8"
         fill="currentColor"
         stroke="none"
       /> </svg>
);


case "phone":
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  );

case "email":
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );

case "bale":
  return <span className="text-sm font-bold">Bale</span>;

case "eitaa":
  return <span className="text-sm font-bold">Eitaa</span>;


}
}

export default function SocialLinks() {
return ( <div className="flex items-center gap-2">
{socialLinks.map((social) => ( <Link
       key={social.type}
       href={social.href}
       aria-label={social.label}
       className="
         flex
         h-9
         w-9
         items-center
         justify-center
         rounded-full
         border
         border-slate-200
         bg-white/70
         text-slate-500
         transition-all
         duration-200
         hover:border-[#315A73]
         hover:bg-[#315A73]
         hover:text-white
       "
     > <SocialIcon type={social.type} /> </Link>
))} </div>
);
}
