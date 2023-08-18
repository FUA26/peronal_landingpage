import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { filterBySlugs, getAllFileMeta } from "@/lib/mdxProvider";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/sections/projectCard";
import Container from "@/components/ui/container";
import NoteCard from "@/components/sections/noteCard";

export default function Blog({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Container>
        <div className="row w-full pt-16">
          <div className="my-4">
            <p className="py-4 text-4xl font-bold text-main">Blog</p>
            <p className="text-base text-foreground/70">
              Explore my project portfolio. Get an overview of the works I have
              undertaken and my capabilities in various fields.
            </p>
          </div>
        </div>
        <div className="grid my-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((post, i) => {
            return (
              <div key={i} className="w-full">
                <NoteCard post={post} />
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFileMeta("projects");
  // console.log(projects);
  // console.log(higlight);
  return {
    props: {
      projects,
    },
  };
}