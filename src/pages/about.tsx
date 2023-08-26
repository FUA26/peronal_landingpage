import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

import Sticker from "@/components/ui/sticker";

const inter = Inter({ subsets: ["latin"] });

const tech = [
  {
    id: "tailwind",
    name: "I Love Tailwind",
    image: "/images/icons/tailwind.webp",
    width: 80,
    height: 45,
    class: "top-[120px] left-[375px]",
  },
  {
    id: "nest",
    name: "My Favorite Backend Framework",
    image: "/images/icons/nest.webp",
    width: 70,
    height: 70,
    class: "top-[350px] left-[235px]",
  },
  {
    id: "ts",
    name: "Still learn",
    image: "/images/icons/ts.webp",
    width: 70,
    height: 70,
    class: "top-[55px] left-[75px]",
  },
  {
    id: "js",
    name: "My Favorite Language",
    image: "/images/icons/js.webp",
    width: 70,
    height: 70,
    class: "top-[15px] left-[215px]",
  },
  {
    id: "laravel",
    name: "First Love",
    image: "/images/icons/laravel.webp",
    width: 70,
    height: 70,
    class: "top-[185px] left-[185px]",
  },

  {
    id: "Docker",
    name: "Make Everything Simple",
    image: "/images/icons/docker.webp",
    width: 70,
    height: 70,
    class: "top-[225px] left-[455px]",
  },
  {
    id: "vite",
    name: "Basic and Fast",
    image: "/images/icons/vite.webp",
    width: 70,
    height: 70,
    class: "top-[35px] left-[545px]",
  },
  {
    id: "next",
    name: "Most Powefull Today",
    image: "/images/icons/nextjs.webp",
    width: 70,
    height: 70,
    class: "top-[335px] left-[515px]",
  },
  {
    id: "rq",
    name: "Easy to Fetch Data",
    image: "/images/icons/reactquery.webp",
    width: 70,
    height: 70,
    class: "top-[285px] left-[65px]",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center pt-16">
        <p className=" px-6 text-3xl font-semibold">Hi! I am</p>
        <p className=" px-6 text-4xl font-bold text-main">Fatih Ulil Albab</p>
        <div className="flex flex-col md:flex-row ">
          <div className="md:basis-2/3 order-2 md:order-1 p-6 text-foreground">
            <p className="text-lg py-2 text-foreground/70 text-justify">
              My journey as a software developer began in 2014 when I decided to
              pursue my studies at Brawijaya University with a major in Computer
              Science. Upon delving into software development, particularly web
              development, I developed a strong passion to delve deeper into
              this field.
            </p>
            <p className="text-lg py-2 text-foreground/70 text-justify">
              My professional career commenced after graduating, precisely in
              2018. It has been an incredible journey, during which I have
              acquired a wealth of knowledge over the past five years. I&rsquo;
              ve traversed numerous projects and roles, each providing valuable
              lessons.
            </p>
            <p className="text-lg py-2 text-foreground/70 text-justify">
              Throughout my career, I&rsquo;ve taken on roles such as Frontend
              Developer, Fullstack Developer, System Analyst, and Project
              Manager. Each of these roles has contributed uniquely to my skill
              set and provided me with diverse experiences. From refining the
              user experience as a Frontend Developer to overseeing entire
              projects as a Project Manager, I&rsquo;ve embraced the challenges
              of each position.
            </p>
          </div>
          <div className="flex order-1 md:order-2  md:basis-1/3 flex-col h-full justify-start p-6">
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
        </div>

        <div className="relative w-[659px] h-[454px] m-auto hidden md:block">
          <Image
            className="rounded-2xl m-auto"
            src="/images/macbook.webp"
            alt="Profile Image"
            height={454}
            width={659}
          />
          {tech.map((items) => (
            <Sticker
              key={items.id}
              imageClass={items.class}
              width={items.width}
              height={items.height}
              imageUrl={items.image}
              name={items.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
