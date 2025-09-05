import Association from "@/components/commun/assoction";
import ComunidadeSection from "@/components/commun/ComunidadeSection";
import EquipeSection from "@/components/commun/equipeSection";
import GallerySection from "@/components/commun/gallery";
import HeroSection from "@/components/commun/hero";
import ProjectsSection from "@/components/commun/projects";
import WhoWeAre from "@/components/commun/WhoWeAre";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <WhoWeAre />
      <ProjectsSection />
      <Association />
      <EquipeSection />
      <GallerySection />
      <ComunidadeSection />
    </div>
  );
}
