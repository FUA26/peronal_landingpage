import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

type Props = {
  post: PostMeta;
};

export default function ProjectCard({ post }: Props) {
  return (
    <div className="group  overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
      <Link href={`/projects/${post.slug}`}>
        <div className="bg-white p dark:bg-gray-800 rounded-2xl w-full h-full min-h-[250px] flex flex-col md:flex-row cursor-grab  group-hover:drop-shadow-xl transition-shadow ease-out duration-200 overflow-auto">
          <div className="basis-0 md:basis-1/2 p-4">
            <Badge variant="outline">{post.category}</Badge>
            <h2 className="text-2xl/relaxed font-semibold leading-tight my-3">
              {post.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              {post.desc}
            </p>
          </div>
          <div className=" basis-full md:basis-1/2 h-full overflow-hidden">
            <div className="relative aspect-[16/9] h-auto md:h-full w-full md:w-auto rounded-2xl group-hover:scale-105 transition ease-in-out duration-200 top-4 left-4 overflow-hidden">
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
