import Blog from "@/components/blog/Blog";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";

// 定义 generateMetadata 函数
export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;
  return {
    title: siteConfig.name + " | blog",
    alternates: {
      canonical: `${siteConfig.url}${lang}/blog/`,
    },
  };
}

export default function BlogIndex({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const posts = getAllPosts(lang);
  console.log(posts);
  return <Blog lang={lang} posts={posts} />;
}

