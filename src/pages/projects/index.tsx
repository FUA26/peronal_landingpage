import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { getAllFileMeta } from "@/lib/mdxProvider";

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={"row"}>
        {projects.map((postPreview, i) => {
          return (
            <div className={"col-6 mb-4"} key={i}>
              <Link href={`/projects/${postPreview.slug}`}>
                <div className={"post-card-content"}>
                  <h2 className={"post-card-title"}>{postPreview.title}</h2>
                  <p>{postPreview.slug}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
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
