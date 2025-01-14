export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  readingTime?: string;
  coverImage?: string;
};

export type BlogCategory = {
  name: string;
  count: number;
  slug: string;
};