import Link from "next/link";
import { ArrowLeft, Bell } from "lucide-react";

import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { announcements } from "@/mocks/announcements";

export default function AnnouncementsPage() {
  return (
    <main>
      <Section>
        <SectionTitle
          subtitle="Announcements"
          title="اطلاعیه‌ها"
        />

        <div className="mt-8 space-y-4">
          {announcements.map((announcement) => (
            <article
              key={announcement.id}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-teal-200
                hover:shadow-md
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-teal-50
                    text-teal-700
                    transition-colors
                    group-hover:bg-teal-700
                    group-hover:text-white
                  "
                >
                  <Bell size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-bold text-slate-800">
                      {announcement.title}
                    </h2>

                    <span className="text-xs text-slate-400">
                      {announcement.date}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {announcement.description}
                  </p>

                  <Link
                    href={announcement.href}
                    className="
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-teal-700
                      transition-colors
                      hover:text-teal-900
                    "
                  >
                    مشاهده اطلاعیه
                    <ArrowLeft size={15} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}