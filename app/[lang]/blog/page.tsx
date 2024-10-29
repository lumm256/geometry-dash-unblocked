import Blog from "@/components/blog/Blog";
import { siteConfig } from "@/config/site";
import { defaultLocale } from "@/lib/i18n";
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

function BlogIndex({ params: { lang } }: { params: { lang: string } }) {
  const langName = lang || defaultLocale;

  return <Blog lang={langName} />;
}

export default BlogIndex;

