import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { filterBySlugs, getAllFileMeta } from "@/lib/mdxProvider";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/sections/projectCard";
import Container from "@/components/ui/container";

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Container>
        <div className="row w-full pt-16 px-4">
          <div className="my-4">
            <p className="py-4 text-4xl font-bold text-main">Projects</p>
            <p className="text-base text-foreground/70">
              Explore my project portfolio. Get an overview of the works I have
              undertaken and my capabilities in various fields.
            </p>
          </div>
        </div>
        <div className="my-8 w-full flex-wrap flex">
          {projects.map((post, i) => (
            <div key={i} className="basis-1/2">
              <ProjectCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFileMeta("projects");
  console.log(projects);
  // console.log(higlight);
  return {
    props: {
      projects,
    },
  };
}
