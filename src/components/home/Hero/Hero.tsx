import Container from "@/components/layout/Container";
import { featuredNews } from "@/mocks/featuredNews";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-6 md:py-8">
      <Container>
        <HeroImage
          src="/images/hero/mosque-hero.jpg"
          alt="مسجد"
          category={featuredNews.category}
          title={featuredNews.title}
          description={featuredNews.description}
          href={featuredNews.href}
        />
      </Container>
    </section>
  );
}