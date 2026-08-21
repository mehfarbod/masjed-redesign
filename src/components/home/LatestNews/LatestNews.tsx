import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { latestNews } from "@/mocks/latestNews";
import NewsCard from "./NewsCard";

export default function LatestNews() {
  return (
    <Section>
      <SectionTitle
        subtitle="News"
        title="آخرین اخبار"
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {latestNews.slice(0, 2).map((news) => (
          <NewsCard
            key={news.id}
            category={news.category}
            title={news.title}
            description={news.description}
            image={news.image}
            href={news.href}
          />
        ))}
      </div>
    </Section>
  );
}