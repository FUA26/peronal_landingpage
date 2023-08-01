import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";

import { getFileBySlug, getAllFiles } from "@/lib/mdxProvider";

export default function SingleBlogPage({ code, frontmatter }: PostType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <h1 className="mt-4">{frontmatter.title}</h1>
      <article className="mdx prose mx-auto mt-4 w-full transition-colors dark:prose-invert">
        <Component />
      </article>
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFiles("projects");
  console.log(posts);
  return {
    paths: posts.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string[];
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const post = await getFileBySlug("projects", slug.join("/"));

  return {
    props: { ...post },
  };
};
