import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

interface Props {
  params: {
    slug: string;
    lang: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, params.lang);

  return {
    title: `${post.title} - Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug, params.lang);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-8">
        {post.coverImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full object-cover"
            />
          </div>
        )}
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
          <span>{post.author}</span>
          <span>•</span>
          <time>{new Date(post.date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypePrism],
            },
          }}
        />
      </div>
    </article>
  );
}

