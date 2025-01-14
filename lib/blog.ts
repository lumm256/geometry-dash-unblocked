import { BlogCategory, BlogPost } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostBySlug(slug: string, lang: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    author: data.author,
    category: data.category,
    tags: data.tags || [],
    excerpt: data.excerpt || '',
    readingTime: calculateReadingTime(content),
    coverImage: data.coverImage || '/images/blog/default-cover.jpg', // 添加默认封面图
  };
}

export function getAllPosts(lang: string): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug, lang);
    })
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));

  return allPosts;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllCategories(posts: BlogPost[]): BlogCategory[] {
  const categories = posts.reduce((acc, post) => {
    const category = post.category;
    if (!acc[category]) {
      acc[category] = { name: category, count: 0, slug: category.toLowerCase() };
    }
    acc[category].count++;
    return acc;
  }, {} as Record<string, BlogCategory>);

  return Object.values(categories);
}