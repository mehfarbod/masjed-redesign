import Link from "next/link";
import {
ArrowLeft,
BookOpen,
GraduationCap,
Image as ImageIcon,
Landmark,
Newspaper,
Video,
} from "lucide-react";

type ServiceCardProps = {
title: string;
description: string;
href: string;
highlightId?: string;
icon: string;
};

const iconMap = {
newspaper: Newspaper,
graduation: GraduationCap,
video: Video,
image: ImageIcon,
book: BookOpen,
landmark: Landmark,
};

export default function ServiceCard({
title,
description,
href,
highlightId,
icon,
}: ServiceCardProps) {
const Icon = iconMap[icon as keyof typeof iconMap];

return ( <article
   className="
     group
     relative
     flex
     min-h-[235px]
     w-full
     flex-col
     overflow-hidden
     rounded-2xl
     border
     border-slate-200
     bg-white
     p-6
     text-right
     transition-all
     duration-300
     hover:-translate-y-1
     hover:border-[#174C45]/25
     hover:shadow-[0_12px_30px_rgba(23,76,69,0.07)]
   "
 >
{/* Top accent */} <div
     aria-hidden="true"
     className="
       absolute
       inset-x-0
       top-0
       h-[3px]
       bg-[#174C45]/10
       transition-colors
       duration-300
       group-hover:bg-[#174C45]
     "
   />


  {/* Icon */}
  <div className="flex w-full">
    <div
      className="
        ml-auto
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-[#174C45]/10
        bg-[#174C45]/[0.06]
        text-[#174C45]
        transition-all
        duration-300
        group-hover:border-[#174C45]/20
        group-hover:bg-[#174C45]
        group-hover:text-white
      "
    >
      {Icon && <Icon size={21} strokeWidth={1.8} />}
    </div>
  </div>

  {/* Content */}
  <div className="mt-5">
    <h3 className="text-lg font-bold leading-8 text-slate-800">
      {title}
    </h3>

    <p className="mt-1.5 text-sm leading-7 text-slate-500">
      {description}
    </p>
  </div>

  {/* Divider */}
  <div
    className="
      mt-auto
      border-t
      border-slate-100
      pt-4
    "
  >
    <div className="flex items-center">
      <Link
        href={href}
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#174C45]
          transition-all
          duration-200
          group-hover:gap-3
        "
      >
        ورود به بخش
        <ArrowLeft size={16} strokeWidth={1.8} />
      </Link>

      {highlightId && (
        <>
          <span
            aria-hidden="true"
            className="mx-3 h-3 w-px bg-slate-200"
          />

          <Link
            href={`/#${highlightId}`}
            className="
              text-xs
              font-medium
              text-slate-400
              transition-colors
              hover:text-[#315A73]
            "
          >
            آخرین مطلب
          </Link>
        </>
      )}
    </div>
  </div>

  {/* Bottom accent */}
  <div
    aria-hidden="true"
    className="
      absolute
      bottom-0
      right-0
      h-[2px]
      w-0
      bg-[#174C45]
      transition-all
      duration-300
      group-hover:w-full
    "
  />
</article>


);
}
