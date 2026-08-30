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
return ( <article
   className="
     group
     overflow-hidden
     rounded-2xl
     border
     border-slate-200
     bg-white
     transition-all
     duration-300
     hover:-translate-y-1
     hover:border-[#174C45]/20
     hover:shadow-[0_12px_32px_rgba(23,76,69,0.07)]
   "
 >
{/* Image */} <Link href={href} className="block"> <div className="relative h-52 w-full overflow-hidden"> <Image
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
          from-black/15
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </div>
  </Link>

  {/* Content */}
  <div className="p-5 md:p-6">
    <span className="text-xs font-semibold text-[#174C45]">
      {category}
    </span>

    <h3
      className="
        mt-2
        text-lg
        font-bold
        leading-8
        text-slate-800
      "
    >
      {title}
    </h3>

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
        group-hover:gap-3
      "
    >
      ادامه مطلب
      <ArrowLeft size={16} strokeWidth={1.8} />
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
      group-hover:w-full
    "
  />
</article>


);
}
