import { notFound } from "next/navigation";

import ArticlePage from "@/components/service/ArticlePage";
import { newsPosts } from "@/mocks/newsPosts";

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;

  const post = newsPosts.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticlePage
      serviceTitle="مسجد خبر"
      serviceHref="/news"
      title={post.title}
      description={post.description}
      image={post.image}
      content={post.content}
    />
  );
}