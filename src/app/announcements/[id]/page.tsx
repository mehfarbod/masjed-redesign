import { notFound } from "next/navigation";

import Section from "@/components/layout/Section";
import { announcements } from "@/mocks/announcements";

type AnnouncementPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AnnouncementPage({
  params,
}: AnnouncementPageProps) {
  const { id } = await params;

  const announcement = announcements.find(
    (item) => item.id === id
  );

  if (!announcement) {
    notFound();
  }

  return (
    <main>
      <Section>
        <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <span className="text-sm font-semibold text-teal-700">
            اطلاعیه
          </span>

          <h1 className="mt-3 text-2xl font-bold leading-10 text-slate-800 md:text-3xl">
            {announcement.title}
          </h1>

          <p className="mt-3 text-sm text-slate-400">
            {announcement.date}
          </p>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-base leading-9 text-slate-600">
              {announcement.description}
            </p>

            <p className="mt-6 text-base leading-9 text-slate-600">
              جزئیات این اطلاعیه در این بخش قرار خواهد گرفت. در نسخه نهایی
              می‌توان اطلاعات کامل، زمان برگزاری، محل، شرایط و سایر جزئیات
              مربوط به اطلاعیه را در این صفحه نمایش داد.
            </p>
          </div>
        </article>
      </Section>
    </main>
  );
}