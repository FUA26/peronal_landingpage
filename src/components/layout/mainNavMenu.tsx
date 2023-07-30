import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function MainNavMenu() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
      {siteConfig.mainNav.map(
        (item) =>
          item.href && (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/docs" ? "text-foreground" : "text-foreground/60"
              )}>
              <p className="text-base">{item.title}</p>
            </Link>
          )
      )}
    </nav>
  );
}
