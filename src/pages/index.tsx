import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "./components/hero-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { filterBySlugs, getAllFileMeta } from "@/lib/mdxProvider";
import { InferGetStaticPropsType } from "next";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/sections/projectCard";
import NoteCard from "@/components/sections/noteCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  higlight,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <HeroSection />
      <div className="flex min-h-screen flex-col justify-center">
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
          <div className="basis-1/2 p-6 text-foreground">
            <p className="py-5 text-4xl font-bold text-main">
              A Journey Through My Tech Ventures
            </p>
            <p className="text-lg text-foreground/70">
              With over five years of experience in the technology industry, my
              journey has been driven by a passion for startups and a dedication
              to crafting innovative solutions. Throughout my career, I have
              traversed various roles, from a meticulous frontend developer to a
              versatile full-stack developer, and a perceptive system analyst.
              Currently, I am thriving as a skilled project manager, where I
              orchestrate projects with finesse.
            </p>
            <div className="mt-6">
              <Button>Explore More About Me</Button>
              <div className="my-4 flex gap-4 text-foreground/50">
                <Link
                  className="flex items-center gap-1"
                  href="www.fatihua.com">
                  <FileTextIcon />
                  Resume
                </Link>
                <Link
                  className="flex items-center gap-1"
                  href="www.fatihua.com">
                  <LinkedInLogoIcon />
                  Linkedin
                </Link>
                <Link
                  className="flex items-center gap-1"
                  href="www.fatihua.com">
                  <GitHubLogoIcon />
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex w-full flex-col flex-wrap md:flex-row">
        <div className="basis-full  md:basis-1/2 p-4">
          <h2 className="py-4 text-4xl font-bold text-main">
            Featured Projects
          </h2>
          <p className="text-justify text-lg text-foreground/70">
            Explore a curated collection of my selected projects that highlight
            my expertise and passion in the world of technology. Each project
            represents a unique journey where I&rsquo;ve designed innovative
            solutions and overcome challenges with determination.
          </p>
          <Button className="my-6">Explore More Projects</Button>
        </div>

        {higlight.map((post, i) => {
          return <ProjectCard key={i} post={post} />;
        })}
      </section>
      <section className="my-10">
        <div className="w-1/2 m-auto text-center">
          <h2 className="py-4 text-4xl font-bold text-main">
            Featured Projects
          </h2>
          <p className="text-center text-lg text-foreground/70">
            Browse through my blog posts. Discover insights, stories, and
            knowledge that I share.
          </p>
        </div>
        <div className="flex w-full flex-col flex-wrap md:flex-row ">
          {higlight.map((post, i) => {
            return <NoteCard key={i} post={post} />;
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
  const selectedSlugs = ["sepasang-janji", "vascomm-landing", "pre-rendering"];
  const higlight = await filterBySlugs(projects, selectedSlugs);
  return {
    props: {
      higlight,
    },
  };
}
