import ServicePage from "@/components/service/ServicePage";
import { culturePosts } from "@/mocks/culturePosts";

export default function CulturePage() {
  return (
    <ServicePage
      title="مسجد فرهنگ"
      description="فعالیت‌های فرهنگی، اجتماعی و برنامه‌های مرتبط با مسجد"
      posts={culturePosts}
    />
  );
}