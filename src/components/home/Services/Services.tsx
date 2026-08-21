import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { services } from "@/constants/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section>
      <SectionTitle
        subtitle="Services"
        title="خدمات سامانه"
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.href}
            title={service.title}
            description={service.description}
            href={service.href}
            highlightId={service.highlightId}
          />
        ))}
      </div>
    </Section>
  );
}