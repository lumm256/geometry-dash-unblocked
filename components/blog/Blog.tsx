"use client";
import { BlogPost } from "@/types/blog";
import { Card, Image } from "@nextui-org/react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

interface BlogProps {
  lang: string;
  posts: BlogPost[];
}

const Blog = ({ lang, posts }: BlogProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            Geometry Dash Blog
          </RoughNotation>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Tips, tutorials, and updates about Geometry Dash Unblocked
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {posts.map((post) => (
          <Link href={`/${lang}/blog/${post.slug}`} key={post.slug}>
            <Card className="hover:shadow-lg transition-shadow h-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
                removeWrapper
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-auto">
                  <span>{post.readingTime}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

