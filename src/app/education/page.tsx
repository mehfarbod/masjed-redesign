import ServicePage from "@/components/service/ServicePage";
import { educationPosts } from "@/mocks/educationPosts";

export default function EducationPage() {
  return (
    <ServicePage
      title="مسجد آموز"
      description="مطالب آموزشی و فرهنگی"
      posts={educationPosts}
    />
  );
}