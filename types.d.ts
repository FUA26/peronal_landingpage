type PostMeta = {
  slug: string;
  title: string;
  desc: string;
  banner: string;
  publishedAt: string;
  tags: string[];
  category: string;
  wordCount: number;
  readingTime: ReadTimeResults;
  highlight: number;
  toc: any
};
type PostType = {
  code: string;
  frontmatter: PostMeta;
};
type CategoryType = 'blogs' | 'library' | 'projects';
