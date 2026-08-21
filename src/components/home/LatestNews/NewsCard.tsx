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
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link href={href}>
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>

      <div className="p-5">
        <span className="text-xs font-semibold text-teal-700">
          {category}
        </span>

        <h3 className="mt-2 text-lg font-bold leading-8 text-slate-800">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-500">
          {description}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
        >
          ادامه مطلب
          <ArrowLeft size={16} />
        </Link>
      </div>
    </article>
  );
}