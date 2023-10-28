import clsx from "clsx";
import React from "react";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiBootstrap,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechListType = keyof typeof stacks;

export type MDXTechStackProps = {
  techs: Array<TechListType>;
};

export default function MDXTechStack({ techs }: MDXTechStackProps) {
  return (
    <div className="flex space-x-2 md:space-x-4">
      {techs.map((item, i) => {
        if (!stacks[item]) return;
        const tech = stacks[item];
        return (
          <tech.icon
            key={i}
            className={clsx(
              "h-8 w-8 md:h-10 md:w-10",
              "text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300",
              "transition-colors"
            )}
          />
        );
      })}
    </div>
  );
}

const stacks = {
  nextjs: {
    icon: SiNextdotjs,
  },
  react: {
    icon: SiReact,
  },
  typescript: {
    icon: SiTypescript,
  },
  tailwind: {
    icon: SiTailwindcss,
  },
  vercel: {
    icon: IoLogoVercel,
  },
  node: {
    icon: SiNodedotjs,
  },
  laravel: {
    icon: SiLaravel,
  },
  bootstrap: {
    icon: SiBootstrap,
  },
  mysql: {
    icon: SiMysql,
  },
  express: {
    icon: SiExpress,
  },
  mongo: {
    icon: SiMongodb,
  },
};
