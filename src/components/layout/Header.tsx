import React from "react";
import Container from "../ui/container";
import Link from "next/link";
import Logo from "../ui/logo";
import { MainNavMenu } from "./mainNavMenu";
import { MobileNavMenu } from "./mobileNavMenu";
import ToggleThame from "./themeToggle";

export default function Header() {
  return (
    <div className="fixed z-30 w-full backdrop-blur-sm bg-background/70">
      <Container>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Logo alt="logo" />
          </Link>
          <div className="flex gap-4">
            <MainNavMenu />
            <ToggleThame />
            <MobileNavMenu />
          </div>
        </div>
      </Container>
    </div>
  );
}
