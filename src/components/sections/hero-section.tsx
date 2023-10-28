import React from "react";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className=" min-h-screen relative pt-16 mb-0 px-8 overflow-hidden rounded-b-3xl grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:mb-0">
      <div className="order-2 lg:col-span-2 py-4 lg:py-32 lg:order-1">
        <span className="inline-block mt-4 mb-2 text-xl md:mb-3 md:text-2xl text-tertiary">
          Hello, I&apos;m Fatih 👋🏼
        </span>
        <h1 className="text-4xl antialiased text-foreground font-bold tracking-tight lg:leading-tight md:text-5xl ">
          I&apos;m a Project Manager<br></br> with Fullstack Developer <br></br>
          <span className="effect-shine text-primary">Superpowers</span>
        </h1>
      </div>

      <div className="relative order-1 -z-10 lg:order-2">
        <div className="inset-y-0 -mt-36 lg:-mt-40 lg:-mr-20"></div>
      </div>
      <motion.img
        src="FUA_logo.svg"
        alt="cursor on a white box with abstract design 2"
        initial={{
          opacity: 0,
          rotate: 0,
        }}
        animate={{
          opacity: 1,
          transition: { type: "spring", bounce: 0.35, mass: 2 },
        }}
        transition={{ type: "spring" }}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 20 }}
        drag
        whileTap={{ rotate: 20, scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className="absolute cursor-pointer rounded-lg cursor-pointe w-36 left-1/3 top-20 md:w-36 lg:left-auto lg:right-32 lg:top-64 "
      />
    </section>
  );
};
export default HeroSection;
