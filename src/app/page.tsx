import Navbar from "@/components/layout/Navbar";
import AboutCard from "@/components/ui/AboutCard";
import HeroCard from "@/components/ui/HeroCard";
import ProjectCard from "@/components/ui/ProjectCard";
import TechStack from "@/components/ui/TechStack";
import ProfessionalExperience from "@/components/ui/ProfessionalExperience";
import ContactSection from "@/components/ui/ContactSection";
import Footer from "@/components/layout/Footer";



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