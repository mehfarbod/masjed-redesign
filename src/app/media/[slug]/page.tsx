import { notFound } from "next/navigation";

import ArticlePage from "@/components/service/ArticlePage";
import { mediaPosts } from "@/mocks/mediaPosts";

type MediaArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MediaArticlePage({
  params,
}: MediaArticlePageProps) {
  const { slug } = await params;

  const post = mediaPosts.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticlePage
      serviceTitle="مسجد نماوا"
      serviceHref="/media"
      title={post.title}
      description={post.description}
      image={post.image}
      content={post.content}
    />
  );
}