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
    border-slate-200
    bg-white
    transition-all
    duration-500
    hover:border-teal-300
    hover:shadow-md
    target:border-teal-500
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
        <span className="text-sm font-semibold text-teal-700">
          {service}
        </span>

        <h3 className="mt-3 text-xl font-bold leading-9 text-slate-800 md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-8 text-slate-500 md:text-base">
          {description}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
        >
          مشاهده بخش
          <ArrowLeft size={17} />
        </Link>
      </div>
    </article>
  );
}