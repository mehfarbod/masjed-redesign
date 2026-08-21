import ServicePage from "@/components/service/ServicePage";
import { researchPosts } from "@/mocks/researchPosts";

export default function ResearchPage() {
  return (
    <ServicePage
      title="پژوهش"
      description="مقالات و مطالعات"
      posts={researchPosts}
    />
  );
}