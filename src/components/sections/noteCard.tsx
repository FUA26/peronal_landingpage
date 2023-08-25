import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import Image from "next/image";
import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";

type Props = {
  post: PostMeta;
};

export default function NoteCard({ post }: Props) {
  return (
    <>
      <Link href={`/blog/${post.slug}`}>
        <article className="h-full overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
          <Image
            alt="Office"
            src={post.banner}
            className="h-56 w-full object-cover"
            width={2070}
            height={1380}
          />

          <div className="h-full bg-white p-4 dark:bg-gray-900 sm:p-6">
            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white font-medium">
              {post.title}
            </h3>
            <div className="flex gap-2 my-1 text-xs text-gray-500 dark:text-gray-400">
              <div className="  flex items-center gap-1">
                <CalendarIcon />{" "}
                {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
              </div>
              <div className="  flex items-center gap-1">
                <TimerIcon /> {post.readingTime.text}
              </div>
            </div>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              {post.desc}
            </p>
          </div>
        </article>
      </Link>
    </>
  );
}
