import Navbar from "@/components/layout/Navbar";
import AboutCard from "@/components/ui/AboutCard";
import HeroCard from "@/components/ui/HeroCard";
import TechnicalEcosystem from "@/components/ui/TechnicalEcosystem";


export default function Page() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      <HeroCard />

      <AboutCard />

      <TechnicalEcosystem />

      {/* We will add the other sections (Skills, Projects, etc.) down here later */}
    </main>
  );
}