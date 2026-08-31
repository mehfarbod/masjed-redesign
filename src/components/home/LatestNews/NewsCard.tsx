
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type NewsCardProps = {
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function NewsCard({
  category,
  title,
  description,
  image,
  href,
}: NewsCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-[0_10px_28px_rgba(23,76,69,0.06)]
      "
    >
      {/* Image */}
      <Link href={href} className="block">
        <div className="relative h-48 w-full overflow-hidden sm:h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-[1.025]
            "
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Subtle image overlay */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              bottom-0
              h-16
              bg-gradient-to-t
              from-black/10
              to-transparent
            "
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Category */}
        <span
          className="
            inline-flex
            items-center
            gap-2
            text-xs
            font-semibold
            text-[#174C45]
          "
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-[#315A73]"
          />
          {category}
        </span>

        {/* Title */}
        <h3
          className="
            mt-2.5
            text-lg
            font-bold
            leading-8
            text-[#293331]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            leading-7
            text-slate-500
          "
        >
          {description}
        </p>

        {/* Action */}
        <Link
          href={href}
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#174C45]
            transition-all
            duration-200
            hover:text-[#315A73]
            group-hover:gap-2.5
          "
        >
          ادامه مطلب
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />
        </Link>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="
          h-[2px]
          w-0
          bg-[#174C45]
          transition-all
          duration-300
          group-hover:w-10
        "
      />
    </article>
  );
}

