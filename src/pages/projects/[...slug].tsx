import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";
import { format } from "date-fns";
import { getFileBySlug, getAllFiles } from "@/lib/mdxProvider";
import Layout from "@/components/layout/Layout";
import Container from "@/components/ui/container";
import Image from "next/image";
import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import MDXComponents from "@/components/mdx/mdxComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            <div className="relative aspect-[16/9] w-full ">
              <Image
                className="rounded-2xl"
                src={`/images/contents/${frontmatter.banner}`}
                alt="Profile Image"
                fill
                style={{
                  objectFit: "cover",
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

            <p className="my-6">
              <Link href="/">
                <Button>← Back to home</Button>
              </Link>
            </p>
          </div>
          {/* <div className="w-1/4"></div> */}
        </div>
      </Container>
    </Layout>
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
