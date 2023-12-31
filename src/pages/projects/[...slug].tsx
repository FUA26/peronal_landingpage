import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

import { getFileBySlug, getAllFiles } from "@/lib/mdxProvider";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/container";

import MDXComponents from "@/components/mdx/mdxComponent";
import { Badge } from "@/components/ui/badge";

import Image from "@/components/common/NextImage";
import BackButton from "@/components/common/BackButton";

export default function SingleBlogPage({ code, frontmatter }: PostType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const tags = frontmatter.tags.map((tag, i) => (
    <Badge variant="outline" key={i}>
      {tag}
    </Badge>
  ));
  return (
    <Layout>
      <Container>
        <div className="pt-16 flex flex-wrap">
          <div className="w-full">
            <div className="mt-4">
              <BackButton />
            </div>
            <div className="p-6 w-full md:w-1/2 m-auto text-center">
              <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
              <p className="text-lg my-2 italic text-foreground/70">
                {frontmatter.desc}
              </p>
              {/* <div className="flex gap-2 my-1 justify-center">
                <div className="  flex items-center gap-1">
                  <CalendarIcon />{" "}
                  {format(new Date(frontmatter.publishedAt), "yyyy")}
                </div>
                <div className="  flex items-center gap-1">
                  <TimerIcon /> {frontmatter.readingTime.text}
                </div>
              </div> */}
            </div>
            <div className="relative h-80 ">
              <Image
                className="rounded-2xl"
                src={`/images/contents/${frontmatter.banner}`}
                alt="Profile Image"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="w-3/4 m-auto">
            <div className="">
              <article className="mdx prose max-w-4xl mt-4 w-full transition-colors dark:prose-invert">
                <Component
                  components={
                    {
                      ...MDXComponents,
                    } as any
                  }
                />
              </article>
            </div>
            <div className="py-6">
              <BackButton url="/blog" to="Posts" />
            </div>
          </div>
          {/* <div className="w-1/4"></div> */}
        </div>
      </Container>
    </Layout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFiles("projects");

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
