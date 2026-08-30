import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { services } from "@/constants/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
return ( <Section> <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"> <SectionTitle
       subtitle="خدمات"
       title="خدمات سامانه"
     />


    <p className="max-w-md text-sm leading-7 text-slate-500 md:pb-6">
      دسترسی سریع به بخش‌های خبری، آموزشی، فرهنگی و رسانه‌ای سامانه جامع مساجد
    </p>
  </div>

  <div
    className="
      mt-8
      grid
      grid-cols-1
      gap-5
      sm:grid-cols-2
      lg:grid-cols-3
      lg:gap-6
    "
  >
    {services.map((service) => (
      <ServiceCard
        key={service.href}
        title={service.title}
        description={service.description}
        href={service.href}
        highlightId={service.highlightId}
        icon={service.icon}
      />
    ))}
  </div>
</Section>


);
}
