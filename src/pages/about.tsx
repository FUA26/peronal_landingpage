import Layout from "@/components/layout/Layout";
import SectionWorkList from "@/components/sections/worklistSection";
import SkillSection from "@/components/sections/skillSection";
import MacSticker from "@/components/sections/macSticker";
import AboutHero from "@/components/sections/aboutHero";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center pt-16">
        <AboutHero />
        <div className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">
            Tech Stack.
          </h2>

          <SkillSection />
        </div>
        <div className="p-6">
          <h2 className="py-4 text-4xl font-bold text-foreground">
            Where I&apos;ve Worked.
          </h2>
          <p className="text-justify text-base/relaxed text-foreground">
            Discover a handpicked showcase of my top projects, illustrating my
            tech expertise and passion.
          </p>
          <SectionWorkList />
        </div>
        <MacSticker />
      </div>
    </Layout>
  );
}
