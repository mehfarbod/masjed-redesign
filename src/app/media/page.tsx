import ServicePage from "@/components/service/ServicePage";
import { mediaPosts } from "@/mocks/mediaPosts";

export default function MediaPage() {
  return (
    <ServicePage
      title="مسجد نماوا"
      description="ویدیو و محتوای رسانه‌ای"
      posts={mediaPosts}
    />
  );
}