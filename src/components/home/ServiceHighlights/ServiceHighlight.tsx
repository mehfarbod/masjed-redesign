
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ServiceHighlightProps = {
  id: string;
  service: string;
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
};

export default function ServiceHighlight({
  id,
  service,
  title,
  description,
  image,
  href,
  reverse = false,
}: ServiceHighlightProps) {
  return (
    <article
      id={id}
      className={`
        group
        relative
        grid
        scroll-mt-24
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:border-slate-300
        hover:shadow-[0_12px_32px_rgba(23,76,69,0.06)]
        target:border-[#174C45]/25
        target:shadow-[0_12px_32px_rgba(23,76,69,0.08)]
        md:grid-cols-2
        ${reverse ? "md:[&>div:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}
      <div className="relative min-h-[260px] overflow-hidden md:min-h-[300px]">
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
            inset-0
            bg-gradient-to-t
            from-black/15
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center p-7 md:p-10">
        {/* Decorative geometric motif */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-6
            top-6
            h-16
            w-16
            opacity-[0.045]
          "
        >
          <div className="absolute inset-2 rotate-45 border-2 border-[#174C45]" />
          <div className="absolute inset-2 rotate-[22.5deg] border-2 border-[#174C45]" />
        </div>

        {/* Service */}
        <span
          className="
            relative
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-[#315A73]
          "
        >
          {service}
        </span>

        {/* Title */}
        <h3
          className="
            relative
            mt-3
            max-w-xl
            text-xl
            font-bold
            leading-9
            text-[#293331]
            md:text-2xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            relative
            mt-3
            max-w-lg
            text-sm
            leading-8
            text-slate-500
            md:text-base
          "
        >
          {description}
        </p>

        {/* Action */}
        <Link
          href={href}
          className="
            relative
            mt-6
            inline-flex
            w-fit
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#174C45]
            transition-all
            duration-200
            hover:gap-2.5
            hover:text-[#315A73]
          "
        >
          مشاهده بخش

          <ArrowLeft
            size={17}
            strokeWidth={1.8}
          />
        </Link>

        {/* Bottom accent */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            mt-6
            h-[2px]
            w-16
            rounded-full
            bg-[#174C45]/10
            transition-all
            duration-300
            group-hover:w-24
            group-hover:bg-[#174C45]
          "
        />
      </div>
    </article>
  );
}

