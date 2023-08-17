import { promises, readFileSync } from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import { join } from "path";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export async function getAllFiles(type: CategoryType) {
  return getFileList(join(process.cwd(), "contents", type)).then((paths) =>
    paths.map((path) =>
      path
        .replace(join(process.cwd(), "contents", type) + "/", "")
        .replace(".mdx", "")
        .split("/")
    )
  );
}

export async function getFileBySlug(type: CategoryType, slug: string) {
  const source = slug
    ? readFileSync(join(process.cwd(), "contents", type, `${slug}.mdx`), "utf8")
    : readFileSync(join(process.cwd(), "contents", `${type}.mdx`), "utf8");

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrettyCode,
      ];

      return options;
    },
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}

const getFileList = async (dirName: string) => {
  let files: string[] = [];
  const items = await promises.readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...(await getFileList(`${dirName}/${item.name}`))];
    } else {
      files.push(`${dirName}/${item.name}`);
    }
  }

  return files;
};

export async function getAllFileMeta<T extends CategoryType>(type: T) {
  const files = await getFileList(join(process.cwd(), "contents", type));

  return files.reduce((allPosts: Array<PostMeta>, absolutePath) => {
    const source = readFileSync(absolutePath, "utf8");
    const { data } = matter(source);

    const res = [
      {
        ...(data as PostMeta),
        slug: absolutePath
          .replace(join(process.cwd(), "contents", type) + "/", "")
          .replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
    return res;
  }, []);
}

export function filterBySlugs(
  content: PostMeta[],
  slugs: string[]
): PostMeta[] {
  return content.filter((item) => slugs.includes(item.slug));
}
