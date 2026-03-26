import Navbar from "@/components/layout/Navbar";
import AboutCard from "@/components/ui/AboutCard";
import HeroCard from "@/components/ui/HeroCard";
import ProjectCard from "@/components/ui/ProjectCard";
import TechStack from "@/components/ui/TechStack";
import ProfessionalExperience from "@/components/ui/ProfessionalExperience";



export default function Page() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <HeroCard />

      <AboutCard />

      <TechStack />

      <ProjectCard />

      <ProfessionalExperience />
    </main>
  );
}