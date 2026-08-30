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
className={`         group
        grid
        scroll-mt-24
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:border-[#174C45]/20
        hover:shadow-[0_12px_32px_rgba(23,76,69,0.07)]
        target:border-[#174C45]/30
        target:shadow-[0_14px_36px_rgba(23,76,69,0.09)]
        md:grid-cols-2
        ${reverse ? "md:[&>div:first-child]:order-2" : ""}
      `}
>
{/* Image */} <div className="relative min-h-[260px] overflow-hidden md:min-h-[300px]"> <Image
       src={image}
       alt={title}
       fill
       className="
         object-cover
         transition-transform
         duration-700
         group-hover:scale-[1.03]
       "
       sizes="(max-width: 768px) 100vw, 50vw"
     />

    <div
      aria-hidden="true"
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/20
        via-transparent
        to-transparent
        opacity-0
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
    />
  </div>

  {/* Content */}
  <div className="relative flex flex-col justify-center p-7 md:p-10">
    {/* Decorative line */}
    <div
      aria-hidden="true"
      className="
        absolute
        right-0
        top-10
        h-12
        w-[3px]
        rounded-full
        bg-[#174C45]/20
        transition-colors
        duration-300
        group-hover:bg-[#174C45]
      "
    />

    <span className="text-sm font-semibold text-[#174C45]">
      {service}
    </span>

    <h3 className="mt-3 max-w-xl text-xl font-bold leading-9 text-slate-800 md:text-2xl">
      {title}
    </h3>

    <p className="mt-3 max-w-lg text-sm leading-8 text-slate-500 md:text-base">
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
        text-[#174C45]
        transition-all
        duration-200
        group-hover:gap-3
      "
    >
      مشاهده بخش
      <ArrowLeft size={17} strokeWidth={1.8} />
    </Link>
  </div>
</article>


);
}
