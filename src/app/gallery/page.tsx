import ServicePage from "@/components/service/ServicePage";
import { galleryPosts } from "@/mocks/galleryPosts";

export default function GalleryPage() {
  return (
    <ServicePage
      title="مسجد نگار"
      description="تصاویر و گالری"
      posts={galleryPosts}
    />
  );
}