import { InferGetStaticPropsType } from "next";
import Layout from "@/components/layout/Layout";

import { getAllFileMeta } from "@/lib/mdxProvider";
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
        <div className="my-8 p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
          {projects.map((post, i) => {
            return <ProjectCard key={i} post={post} />;
          })}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFileMeta("projects");

  return {
    props: {
      projects,
    },
  };
}
