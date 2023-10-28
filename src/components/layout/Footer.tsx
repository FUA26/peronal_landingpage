import Link from "next/link";
import dynamic from "next/dynamic";
import React from "react";
import Logo from "../ui/logo";
import Container from "../ui/container";
const SocialMedia = dynamic(() => import("../ui/social-media"));

export default function Footer() {
  return (
    <footer className="w-full mt-8">
      <Container>
        <div className="flex flex-col items-center p-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex items-center lg:ml-0 gap-x-2">
            <Logo alt="logo" />
            <h1 className="text-3xl font-extrabold">FUA</h1>
          </Link>
          <p className="my-4 w-1/2 text-center text-gray-500 dark:text-gray-400">
            Create something useful, impactful, and beautiful.
          </p>
          <div className="flex gap-4 my-4">
            <SocialMedia />
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © Fatih Ulil Albab 2023
          </span>
        </div>
      </Container>
    </footer>
  );
}
