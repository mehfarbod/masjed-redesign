import Link from "next/link";

import { ArrowLeft, Newspaper } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  highlightId?: string;
};

export default function ServiceCard({
  title,
  description,
  href,
  highlightId,
}: ServiceCardProps) {
  return (
    <div
      className="
        group
        flex
        h-full
        flex-col
        rounded-2xl
        border
        border-[#E7E0D5]
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#D5CCBF]
        hover:shadow-md
        sm:p-5
      "
    >
      {/* Icon */}
      <div
        className="
          mb-3
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-[#EEF0E9]
          text-[#7A8270]
          transition-colors
          duration-300
          group-hover:bg-[#7A8270]
          group-hover:text-white
          sm:mb-4
        "
      >
        <Newspaper size={20} />
      </div>

      {/* Content */}
      <h3 className="mb-1.5 text-base font-bold text-[#302A24] sm:mb-2">
        {title}
      </h3>

      <p className="text-sm leading-6 text-[#756D63]">
        {description}
      </p>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-1.5 pt-4 sm:gap-2 sm:pt-5">
        <Link
          href={href}
          className="
            inline-flex
            items-center
            justify-between
            rounded-xl
            bg-[#70543A]
            px-3
            py-2
            text-sm
            font-semibold
            text-white
            transition-colors
            hover:bg-[#5A422D]
            sm:py-2.5
          "
        >
          ورود به بخش
          <ArrowLeft size={16} />
        </Link>

        {highlightId && (
          <Link
            href={`/#${highlightId}`}
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#756D63]
              transition-colors
              hover:bg-[#EEF0E9]
              hover:text-[#70543A]
              sm:py-2
            "
          >
            آخرین مطلب
          </Link>
        )}
      </div>
    </div>
  );
}