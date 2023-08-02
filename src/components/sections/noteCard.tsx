import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";

type Props = {
  post: PostMeta;
};

export default function NoteCard({ post }: Props) {
  return (
    <div className="group transition-transform duration-200 ease-in-out p-4 w-full basis-full  md:basis-1/2 lg:basis-1/3 hover:scale-105">
      <Link href={`/projects/${post.slug}`}>
        <div className="bg-white p dark:bg-gray-800 rounded-2xl w-full h-full aspect-square flex flex-col  cursor-grab  group-hover:drop-shadow-xl transition-shadow ease-out duration-200 overflow-auto">
          <div className="h-1/2 overflow-hidden">
            <div className="relative  h-full rounded-2xl group-hover:scale-105 transition ease-in-out duration-200 overflow-hidden">
              <Image
                src={`/images/contents/${post.banner}`}
                alt={post.title}
                fill
              />
            </div>
          </div>
          <div className="h-1/2 py-2 px-4">
            <Badge variant="outline">{post.category}</Badge>
            <h2 className="text-xl font-bold my-2">{post.title}</h2>
            <div className="flex gap-2 my-1">
              <div className="text-xs  flex items-center gap-1">
                <CalendarIcon /> {post.publishedAt}
              </div>
              <div className="text-xs  flex items-center gap-1">
                <TimerIcon /> {post.readingTime.text}
              </div>
            </div>

            <p className="text-sm">{post.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
