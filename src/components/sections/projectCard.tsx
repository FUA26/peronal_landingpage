import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "../common/NextImage";
import { Button } from "../ui/button";

type Props = {
  post: PostMeta;
};

export default function ProjectCard({ post }: Props) {
  return (
    <li className="flex my-8 flex-col items-center md:flex-row space-y-4 space-x-0 md:space-y-0 md:space-x-8 lg:space-x-12 ">
      <Link
        href={`/projects/${post.slug}`}
        className="flex w-full px-8 pt-8 overflow-hidden bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 hover:shadow-lg group"
      >
        {post?.banner && (
          <div className="flex overflow-hidden transition duration-500 ease-in-out  group-hover:scale-105">
            <Image
              src={`/images/contents/${post.banner}`}
              alt={post.title}
              width={768}
              height={384}
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </Link>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <span className="block mb-1 text-xs font-semibold tracking-widest uppercase text-tertiary">
          {post.category}
        </span>
        <h3 className="mb-1 text-2xl font-semibold text-foreground">
          {post.title}
        </h3>
        <span className="block mb-4 text-md text-tertiary">{post.desc}</span>
        <Link href={`/projects/${post.slug}`} className="w-fullmd:w-auto">
          <Button variant="outline">View Case Study</Button>
        </Link>
      </div>
    </li>
  );
}
