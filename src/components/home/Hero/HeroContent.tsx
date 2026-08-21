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
  return (
    <div className="absolute inset-x-0 bottom-0  p-6 text-white md:p-8">
      <span className="text-sm font-medium text-teal-200">
        {category}
      </span>

      <h1 className="mt-2 max-w-2xl text-2xl font-bold leading-tight md:text-4xl">
        {title}
      </h1>

      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 md:text-base">
        {description}
      </p>

      <Link
        href={href}
        className="
          mt-4
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-white
          transition-colors
          hover:text-teal-200
        "
      >
        مشاهده خبر
        <ArrowLeft size={17} />
      </Link>
    </div>
  );
}