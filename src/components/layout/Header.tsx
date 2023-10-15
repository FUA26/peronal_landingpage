import React from "react";
import Container from "../ui/container";
import Link from "next/link";
import { MainNavMenu } from "./mainNavMenu";
import ToggleThame from "./themeToggle";

export default function Header() {
  return (
    <div className="fixed z-30 w-full backdrop-blur-md bg-background/70 shadow">
      <Container>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="ml-4 hidden md:block lg:ml-0 gap-x-2 ">
            <span className="py-1 my-1 mr-0 font-sans  antialiased font-semibold border-b border-gray-700 border-opacity-0 hover:border-opacity-100 md:mr-6 md:inline-block">
              Fatih&nbsp;Ulil&nbsp;A
            </span>
          </Link>
          <div className="flex gap-4 w-full md:w-auto justify-between">
            <MainNavMenu />
            <ToggleThame />
          </div>
        </div>
      </Container>
    </div>
  );
}
