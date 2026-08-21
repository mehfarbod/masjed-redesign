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
        grid
        scroll-mt-24
        overflow-hidden
        rounded-3xl
        border
        border-[#E7E0D5]
        bg-white
        transition-all
        duration-500
        hover:border-[#CFC3B3]
        hover:shadow-md
        target:border-[#70543A]
        target:shadow-lg
        md:grid-cols-2
        ${reverse ? "md:[&>div:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}
      <div className="relative min-h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-7 md:p-10">
        <span className="text-sm font-semibold text-[#7A8270]">
          {service}
        </span>

        <h3 className="mt-3 text-xl font-bold leading-9 text-[#302A24] md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-8 text-[#756D63] md:text-base">
          {description}
        </p>

        <Link
          href={href}
          className="
            mt-6
            inline-flex
            w-fit
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#70543A]
            transition-colors
            hover:text-[#5A422D]
          "
        >
          مشاهده بخش
          <ArrowLeft size={17} />
        </Link>
      </div>
    </article>
  );
}