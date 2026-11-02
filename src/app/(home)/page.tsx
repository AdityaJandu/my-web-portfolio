import Navbar from "@/modules/home/components/layout/Navbar";
import AboutCard from "@/modules/home/ui/AboutCard";
import HeroCard from "@/modules/home/ui/HeroCard";
import ProjectCard from "@/modules/home/ui/ProjectCard";
import TechStack from "@/modules/home/ui/TechStack";
import ProfessionalExperience from "@/modules/home/ui/ProfessionalExperience";
import ContactSection from "@/modules/home/ui/ContactSection";
import Footer from "@/modules/home/components/layout/Footer";



export default function Page() {
  return (
    <main className="relative bg-background min-h-screen">
      <HeroCard />

      <AboutCard />

      <TechStack />

      <ProjectCard />

      <ProfessionalExperience />

      <ContactSection />

    </main>

  );
}
