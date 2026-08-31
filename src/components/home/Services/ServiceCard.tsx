
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

  return (
    <article
      className="
        group
        relative
        flex
        min-h-[245px]
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[#D9D2C6]
        bg-[#FCFAF5]
        p-6
        text-right
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#174C45]/25
        hover:bg-[#FFFEFB]
        hover:shadow-[0_16px_36px_rgba(23,76,69,0.07)]
      "
    >
      {/* Eight-point geometric motif */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-3
          top-3
          h-14
          w-14
          opacity-[0.07]
          transition-transform
          duration-700
          ease-out
          group-hover:rotate-45
        "
      >
        <div
          className="
            absolute
            inset-1
            rotate-45
            border
            border-[#174C45]
          "
        />

        <div
          className="
            absolute
            inset-1
            rotate-[22.5deg]
            border
            border-[#174C45]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rotate-45
            border
            border-[#174C45]
          "
        />
      </div>

      {/* Icon */}
      <div className="relative flex w-full">
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-[#174C45]/15
            bg-[#174C45]/[0.07]
            text-[#174C45]
            transition-all
            duration-300
            group-hover:border-[#315A73]/[0.90]
            group-hover:bg-[#315A73]/[0.90]
            group-hover:text-white
          "
        >
          <Icon size={21} strokeWidth={1.8} />
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-5">
        <h3
          className="
            text-lg
            font-bold
            leading-8
            text-[#293331]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1.5
            text-sm
            leading-7
            text-[#756D63]
          "
        >
          {description}
        </p>
      </div>

      {/* Action */}
      <div
        className="
          relative
          mt-auto
          flex
          items-center
          border-t
          border-[#E8E2D8]
          pt-4
        "
      >
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
            hover:text-[#315A73]
          "
        >
          ورود به بخش

          <ArrowLeft
            size={16}
            strokeWidth={1.8}
          />
        </Link>

        {highlightId && (
          <>
            <span
              aria-hidden="true"
              className="
                mx-3
                h-3
                w-px
                bg-[#DDD6CA]
              "
            />

            <Link
              href={`/#${highlightId}`}
              className="
                text-xs
                font-medium
                text-[#9A9287]
                transition-colors
                hover:text-[#315A73]
              "
            >
              آخرین مطلب
            </Link>
          </>
        )}
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
          group-hover:w-20
        "
      />
    </article>
  );
}
