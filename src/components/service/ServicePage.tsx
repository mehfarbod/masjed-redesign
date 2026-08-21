import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";

type ServicePost = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type ServicePageProps = {
  title: string;
  description: string;
  posts: ServicePost[];
};

export default function ServicePage({
  title,
  description,
  posts,
}: ServicePageProps) {
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main>
      {/* Service Header */}
      <Section className="pb-8">
        <div className="rounded-3xl bg-teal-50 px-6 py-12 md:px-10">
          <span className="text-sm font-semibold text-teal-700">
            Service
          </span>

          <h1 className="mt-3 text-3xl font-bold text-slate-800 md:text-4xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 md:text-base">
            {description}
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      {featuredPost && (
        <Section>
          <SectionTitle
            subtitle="Featured"
            title="مطلب منتخب"
          />

          <article className="mt-8 grid overflow-hidden rounded-3xl border border-slate-200 bg-white md:grid-cols-2">
            {/* <div className="relative min-h-[300px]"> */}
            <div className="relative h-64 md:h-[360px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="text-sm font-semibold text-teal-700">
                {title}
              </span>

              <h2 className="mt-3 text-2xl font-bold leading-10 text-slate-800">
                {featuredPost.title}
              </h2>

              <p className="mt-4 text-sm leading-8 text-slate-500">
                {featuredPost.description}
              </p>

              <Link
                href={featuredPost.href}
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
              >
                ادامه مطلب
                <ArrowLeft size={17} />
              </Link>
            </div>
          </article>
        </Section>
      )}

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <Section>
          <SectionTitle
            subtitle="Latest"
            title="آخرین مطالب"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
<div className="relative h-44 overflow-hidden md:h-48">
                {/* <div className="relative h-52 overflow-hidden"> */}
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold leading-8 text-slate-800">
                    {post.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-500">
                    {post.description}
                  </p>

                  <Link
                    href={post.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
                  >
                    ادامه مطلب
                    <ArrowLeft size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}