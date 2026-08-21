import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ArticlePageProps = {
  serviceTitle: string;
  serviceHref: string;
  title: string;
  description: string;
  image: string;
  content: string[];
};

export default function ArticlePage({
  serviceTitle,
  serviceHref,
  title,
  description,
  image,
  content,
}: ArticlePageProps) {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Back */}
        <Link
          href={serviceHref}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
        >
          <ArrowRight size={17} />
          بازگشت به {serviceTitle}
        </Link>

        {/* Category */}
        <span className="block text-sm font-semibold text-teal-700">
          {serviceTitle}
        </span>

        {/* Title */}
        <h1 className="mt-3 text-3xl font-bold leading-[1.8] text-slate-800 md:text-4xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-5 text-base leading-9 text-slate-500">
          {description}
        </p>

        {/* Image */}
<div className="relative mt-8 aspect-video overflow-hidden rounded-3xl">
        {/* <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl"> */}
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Article Content */}
        <div className="mt-10 space-y-6 text-base leading-9 text-slate-600">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}