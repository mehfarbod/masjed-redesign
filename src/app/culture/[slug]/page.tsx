import { notFound } from "next/navigation";

import ArticlePage from "@/components/service/ArticlePage";
import { culturePosts } from "@/mocks/culturePosts";

type CultureArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CultureArticlePage({
  params,
}: CultureArticlePageProps) {
  const { slug } = await params;

  const post = culturePosts.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticlePage
    serviceHref="/culture"
      serviceTitle="مسجد فرهنگ"
      title={post.title}
      description={post.description}
      image={post.image}
      content={post.content}
    />
  );
}