import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { filterBySlugs, getAllFileMeta } from "@/lib/mdxProvider";
import { InferGetStaticPropsType } from "next";
import ProjectCard from "@/components/sections/projectCard";
import NoteCard from "@/components/sections/noteCard";
import HeroSection from "../components/sections/hero-section";
import Image from "@/components/common/NextImage";

const inter = Inter({ subsets: ["latin"] });
function FadeIn({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default function Home({
  highlight,
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <FadeIn>
        <HeroSection />
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col p-6 md:flex-row">
            <div className="flex basis-1/2 flex-row justify-center p-6">
              <div className="relative m-auto  aspect-[4/3] w-full ">
                <Image
                  className="rounded-2xl"
                  src="/images/FUA-Profile-Main.jpg"
                  alt="Profile Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="basis-1/2 p-0 md:p-6 text-foreground">
              {/* <p>A Journey Through My Tech Ventures</p> */}
              <p className="py-5 text-4xl font-bold">About.</p>
              <p className="text-base/relaxed text-foreground/70 text-justify">
                With over five years of experience in the technology industry,
                my journey has been driven by a passion for startups and a
                dedication to crafting innovative solutions. Throughout my
                career, I have traversed various roles, from a meticulous
                frontend developer to a versatile full-stack developer, and a
                perceptive system analyst. Currently, I am thriving as a skilled
                project manager, where I orchestrate projects with finesse.
              </p>
              <div className="mt-6">
                <Link href="/about">
                  <Button variant="outline">Explore More About Me</Button>
                </Link>
                <div className="my-4 flex gap-4 text-foreground/70">
                  <Link
                    className="flex items-center gap-1"
                    href="https://drive.google.com/file/d/10TjqcZvnFxkFKEFUIPyBsARzenuTkHge/view?usp=sharing"
                    target="_blank"
                  >
                    <FileTextIcon />
                    Resume
                  </Link>
                  <Link
                    className="flex items-center gap-1"
                    href="https://www.linkedin.com/in/fatih-ulil-albab-27b47b16b/"
                    target="_blank"
                  >
                    <LinkedInLogoIcon />
                    Linkedin
                  </Link>
                  <Link
                    className="flex items-center gap-1"
                    href="https://github.com/FUA26"
                    target="_blank"
                  >
                    <GitHubLogoIcon />
                    Github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <section className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">
            Featured Projects.
          </h2>
          <p className="text-justify text-base/relaxed text-foreground/70">
            Discover a handpicked showcase of my top projects, illustrating my
            tech expertise and passion.
          </p>

          <ul className="my-4">
            {highlight.map((post, i) => {
              return <ProjectCard key={i} post={post} />;
            })}
          </ul>
        </section>
      </FadeIn>

      <section className="my-10">
        <div className="w-full p-6 md:w-1/2 m-auto text-center">
          <h2 className="py-4 text-4xl font-bold text-main">
            Featured Projects
          </h2>
          <p className="text-center text-base/relaxed text-foreground/70">
            Browse through my blog posts. Discover insights, stories, and
            knowledge that I share.
          </p>
        </div>
        <div className="grid p-6 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {blogs.map((post, i) => {
            return (
              <div key={i} className="w-full">
                <NoteCard post={post} />
              </div>
            );
          })}
        </div>

        <div className=" text-center">
          <Button variant="outline" className="my-6">
            Explore More Projects
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllFileMeta("projects");
  const blogs = await getAllFileMeta("blogs");
  const selectedSlugs = [
    "sepasang-janji",
    "vascomm-landing",
    "wizonline-builder",
  ];
  const datas = await filterBySlugs(projects, selectedSlugs);
  const highlight = datas.sort((a, b) => a.highlight - b.highlight);
  return {
    props: {
      highlight,
      blogs,
    },
  };
}
