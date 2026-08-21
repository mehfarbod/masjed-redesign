import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import SocialLinks from "@/components/common/SocialLinks";

export default function ContactPage() {
  return (
    <main>
      <Section>
        <SectionTitle
          subtitle="Contact"
          title="ارتباط با ما"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800">
              راه‌های ارتباطی
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  ایمیل
                </p>

                <a
                  href="mailto:info@masjed.ir"
                  className="mt-1 block text-sm text-slate-500 transition-colors hover:text-teal-700"
                >
                  info@masjed.ir
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  تلفن
                </p>

                <a
                  href="tel:+982112345678"
                  className="mt-1 block text-sm text-slate-500 transition-colors hover:text-teal-700"
                >
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  آدرس
                </p>

                <p className="mt-1 text-sm leading-7 text-slate-500">
                  تهران، ایران
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="mb-4 text-sm font-semibold text-slate-700">
                ما را دنبال کنید
              </p>

              <SocialLinks />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-slate-800">
              ارسال پیام
            </h2>

            <form className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  نام
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="نام شما"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  ایمیل
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  پیام
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="پیام خود را بنویسید..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}