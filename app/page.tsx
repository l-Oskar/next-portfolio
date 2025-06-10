import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <TechStack />
        <Experience />
      </div>
    </main>
  );
}
