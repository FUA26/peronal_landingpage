import clsx from "clsx";
import React from "react";
import {
  SiGmail,
  SiInstagram,
  SiFiverr,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex space-x-2 md:space-x-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" aria-label="email">
              <SiGmail
                className={clsx(
                  "h-6 w-6",
                  "text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300",
                  "transition-colors"
                )}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fatihulil@gmail.com</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {media.map((scl) => (
        <TooltipProvider key={scl.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={scl.href} target="black">
                <Button variant="ghost" aria-label={scl.id}>
                  <scl.icon
                    className={clsx(
                      "h-6 w-6",
                      "text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300",
                      "transition-colors"
                    )}
                  />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{scl.text}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}

const media = [
  {
    id: "linkedin",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/fatih-ulil-albab-27b47b16b/",
    text: <>Linkedin</>,
  },
  {
    id: "instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/fatihulilalbab/",
    text: <>Instagram</>,
  },
  {
    id: "github",
    icon: SiGithub,
    href: "https://github.com/FUA26",
    text: <>Github</>,
  },
  {
    id: "fivver",
    icon: SiFiverr,
    href: "https://www.fiverr.com/kamarkopi",
    text: <>Fivver</>,
  },
];
