import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { serviceHighlights } from "@/mocks/serviceHighlights";
import ServiceHighlight from "./ServiceHighlight";

export default function ServiceHighlights() {
  return (
    <Section>
      <SectionTitle
        subtitle="Explore"
        title="از بخش‌های مختلف مسجد"
      />

      <div className="mt-8 space-y-6">
        {serviceHighlights.map((item, index) => (
          <ServiceHighlight
            key={item.id}
            id={item.anchorId}
            service={item.service}
            title={item.title}
            description={item.description}
            image={item.image}
            href={item.href}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </Section>
  );
}