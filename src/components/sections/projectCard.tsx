import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

type Props = {
  post: PostMeta;
};

export default function ProjectCard({ post }: Props) {
  return (
    <div className="group transition-transform duration-700 ease-in-out p-4 w-full basis-full  md:basis-1/2 hover:scale-105">
      <Link href={`/projects/${post.slug}`}>
        <div className="bg-white p dark:bg-gray-800 rounded-2xl w-full h-full min-h-[250px] flex flex-col md:flex-row cursor-grab  group-hover:drop-shadow-xl transition-shadow ease-out duration-200 overflow-auto">
          <div className="basis-1/2 p-4">
            <Badge variant="outline">{post.category}</Badge>
            <h2 className="text-2xl font-bold my-3">{post.title}</h2>
            <p className="text-base">{post.desc}</p>
          </div>
          <div className="basis-1/2 h-full overflow-hidden">
            <div className="relative aspect-[16/9] h-full rounded-2xl group-hover:scale-105 transition ease-in-out duration-700 top-4 left-4 overflow-hidden">
              <Image
                src={`/images/contents/${post.banner}`}
                alt={post.title}
                fill
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
