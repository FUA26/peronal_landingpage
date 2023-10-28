import { InferGetStaticPropsType } from "next";
import Layout from "@/components/layout/Layout";
import { getAllFileMeta } from "@/lib/mdxProvider";
import Container from "@/components/ui/container";
import NoteCard from "@/components/sections/noteCard";

export default function Blog({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Container>
        <div className="row w-full pt-16">
          <div className="my-4 p-4">
            <p className="py-4 text-4xl font-bold text-main">Blog</p>
            <p className="text-base text-foreground/70">
              Explore my project portfolio. Get an overview of the works I have
              undertaken and my capabilities in various fields.
            </p>
          </div>
        </div>
        <div className="grid p-4 my-8 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
  const projects = await getAllFileMeta("blogs");

  return {
    props: {
      projects,
    },
  };
}
