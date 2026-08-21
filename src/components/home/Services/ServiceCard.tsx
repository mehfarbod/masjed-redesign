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
        border-slate-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Icon */}
      <div
        className="
          mb-4
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-teal-50
          text-teal-700
          transition-colors
          duration-300
          group-hover:bg-teal-700
          group-hover:text-white
        "
      >
        <Newspaper size={20} />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-base font-bold text-slate-800">{title}</h3>

      <p className="text-sm leading-6 text-slate-500">{description}</p>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-2 pt-5">
        <Link
          href={href}
          className="
            inline-flex
            items-center
            justify-between
            rounded-xl
            bg-teal-700
            px-3
            py-2.5
            text-sm
            font-semibold
            text-white
            transition-colors
            hover:bg-teal-800
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
              py-2
              text-xs
              font-medium
              text-slate-500
              transition-colors
              hover:bg-teal-50
              hover:text-teal-700
            "
          >
            آخرین مطلب
          </Link>
        )}
      </div>
    </div>
  );
}
