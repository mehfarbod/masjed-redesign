import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";

export default function AboutPage() {
  return (
    <main>
      <Section>
        <SectionTitle
          subtitle="About"
          title="درباره ما"
        />

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="max-w-3xl space-y-6 text-sm leading-9 text-slate-600 md:text-base">
            <p>
              پایگاه تخصصی مسجد با هدف معرفی فعالیت‌ها، برنامه‌ها و ظرفیت‌های
              مختلف مسجد شکل گرفته است.
            </p>

            <p>
              این مجموعه تلاش می‌کند بستری برای انتشار اخبار، مطالب آموزشی،
              محتوای فرهنگی، پژوهش‌ها و فعالیت‌های رسانه‌ای مرتبط با مسجد
              فراهم کند.
            </p>

            <p>
              همچنین تلاش شده است ارتباط میان مسجد و جامعه با استفاده از
              ابزارهای ارتباطی و رسانه‌ای جدید تقویت شود.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}