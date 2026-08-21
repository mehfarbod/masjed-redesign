import { notFound } from "next/navigation";

import ArticlePage from "@/components/service/ArticlePage";
import { researchPosts } from "@/mocks/researchPosts";

type ResearchArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ResearchArticlePage({
  params,
}: ResearchArticlePageProps) {
  const { slug } = await params;

  const post = researchPosts.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticlePage
      serviceTitle="پژوهش"
      serviceHref="/research"
      title={post.title}
      description={post.description}
      image={post.image}
      content={post.content}
    />
  );
}