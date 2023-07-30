"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ViewVerticalIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";

export function MobileNavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <ViewVerticalIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
          desc="">
          <Logo />
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 px-2">
          <div className="flex flex-col space-y-2 gap-2">
            {siteConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                    desc={item.desc}>
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  desc: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  desc,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <>
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn(className)}
        {...props}>
        {children}
        <p className="text-main-foreground/70 text-xs">{desc}</p>
      </Link>
    </>
  );
}
