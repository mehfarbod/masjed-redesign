import ServicePage from "@/components/service/ServicePage";
import { newsPosts } from "@/mocks/newsPosts";

export default function NewsPage() {
  return (
    <ServicePage
      title="مسجد خبر"
      description="آخرین اخبار و رویدادهای مسجد"
      posts={newsPosts}
    />
  );
}