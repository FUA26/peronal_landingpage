import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function MainNavMenu() {
  const pathname = usePathname();
  return (
    <nav className=" items-center space-x-6 text-sm font-medium flex">
      {siteConfig.mainNav.map(
        (item) =>
          item.href && (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          )
      )}
    </nav>
  );
}
