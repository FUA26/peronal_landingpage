type PostMeta = {
  slug: string;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  tags: string;
  category: string;
  wordCount: number;
  readingTime: ReadTimeResults;
};
type PostType = {
  code: string;
  frontmatter: PostMeta;
};
type CategoryType = 'blog' | 'library' | 'projects';
