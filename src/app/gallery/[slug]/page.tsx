import { notFound } from "next/navigation";

import ArticlePage from "@/components/service/ArticlePage";
import { galleryPosts } from "@/mocks/galleryPosts";

type GalleryArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GalleryArticlePage({
  params,
}: GalleryArticlePageProps) {
  const { slug } = await params;

  const post = galleryPosts.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticlePage
      serviceTitle="مسجد نگار"
      serviceHref="/gallery"
      title={post.title}
      description={post.description}
      image={post.image}
      content={post.content}
    />
  );
}