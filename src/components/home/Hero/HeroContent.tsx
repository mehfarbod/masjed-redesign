import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type HeroContentProps = {
category: string;
title: string;
description: string;
href: string;
};

export default function HeroContent({
category,
title,
description,
href,
}: HeroContentProps) {
return ( <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-9">
{/* Category */} <div className="flex items-center gap-3"> <span className="h-px w-7 bg-[#B39455]/70" />


    <span className="text-sm font-semibold text-[#F7F3EA]">
      {category}
    </span>
  </div>

  {/* Title */}
  <h1
    className="
      mt-3
      max-w-3xl
      text-2xl
      font-bold
      leading-[1.7]
      text-white
      md:text-4xl
      md:leading-[1.65]
    "
  >
    {title}
  </h1>

  {/* Description */}
  <p
    className="
      mt-3
      max-w-2xl
      text-sm
      leading-7
      text-slate-200
      md:text-base
      md:leading-8
    "
  >
    {description}
  </p>

  {/* CTA */}
  <Link
    href={href}
    className="
      mt-5
      inline-flex
      items-center
      gap-2
      rounded-lg
      border
      border-white/20
      bg-[#315A73]/85
      px-4
      py-2.5
      text-sm
      font-semibold
      text-white
      transition-all
      duration-200
      hover:bg-[#315A73]/90
      hover:gap-3
    "
  >
    مشاهده خبر
    <ArrowLeft size={17} strokeWidth={1.8} />
  </Link>
</div>


);
}
