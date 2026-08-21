import { notFound } from "next/navigation";

import ArticlePage from "@/components/service/ArticlePage";
import { educationPosts } from "@/mocks/educationPosts";

type EducationArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EducationArticlePage({
  params,
}: EducationArticlePageProps) {
  const { slug } = await params;

  const post = educationPosts.find((post) => post.id === slug);

  if (!post) {
    notFound();
  }
return (
  <ArticlePage
    serviceTitle="مسجد آموز"
    serviceHref="/education"
    title={post.title}
    description={post.description}
    image={post.image}
    content={post.content}
  />
);
}