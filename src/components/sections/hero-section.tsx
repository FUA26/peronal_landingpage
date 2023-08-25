import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Fullstack Developer",
      "Project Manager",
      "System Analyst",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className=""></div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold md:text-4xl">
          Hi!, I am <span className="text-main">Fatih Ulil A</span>{" "}
          <span> 👋🏼</span>
        </h2>
        <h1 className="text-4xl font-bold md:text-6xl">
          {text}
          <Cursor cursorBlinking />
        </h1>
      </div>
      <div className="">
        <ChevronDownIcon className="h-16 w-16 animate-bounce animate-pulse stroke-main" />
      </div>
    </main>
  );
};
export default HeroSection;
