import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { format } from "date-fns";
import { getFileBySlug, getAllFiles } from "@/lib/mdxProvider";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/container";

import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";

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
          <div className="w-full px-6">
            <div className="mt-4">
              <BackButton />
            </div>
            <div className="relative mt-4 h-80 w-full">
              <Image
                className="rounded-2xl"
                src={`/images/banners/${frontmatter.banner}`}
                alt={`Image ${frontmatter.title}`}
                fill
                style={{
                  objectFit: "cover",
                  display: "flex",
                  justifyContent: "center",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="py-6 w-full ">
              <h1 className="text-4xl font-semibold">{frontmatter.title}</h1>
              <p className="text-lg my-2 italic text-foreground/70">
                {frontmatter.desc}
              </p>
              <div className="flex gap-2 my-1 ">
                <div className="  flex items-center gap-1">
                  <CalendarIcon />{" "}
                  {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")}
                </div>
                <div className="  flex items-center gap-1">
                  <TimerIcon /> {frontmatter.readingTime.text}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6">
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
            <section className="mt-6">
              <h3 className="font-medium text-xl">Related:</h3>
              <div className="flex flex-row gap-4">{tags}</div>
            </section>
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
  const posts = await getAllFiles("blogs");

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

  const post = await getFileBySlug("blogs", slug.join("/"));

  return {
    props: { ...post },
  };
};
