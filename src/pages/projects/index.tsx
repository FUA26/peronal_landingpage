import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import { filterBySlugs, getAllFileMeta } from "@/lib/mdxProvider";
import { Badge } from "@/components/ui/badge";

export default function Home({
  higlight,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className={"row"}>
        {higlight.map((postPreview, i) => {
          return (
            <div className={"col-6 mb-4"} key={i}>
              <Link href={`/projects/${postPreview.slug}`}>
                <div className={"post-card-content"}>
                  {/* <Badge variant="outline">{postPreview.category}</Badge> */}
                  <h2 className={"post-card-title"}>{postPreview.title}</h2>
                  <p>{postPreview.desc}</p>
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
  const selectedSlugs = ["pre-rendering", "sepasang"];
  const higlight = await filterBySlugs(projects, selectedSlugs);
  // console.log(higlight);
  return {
    props: {
      higlight,
    },
  };
}
