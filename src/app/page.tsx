import GallerySection from "@/components/gallery";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <WhoWeAre />
      <ProjectsSection />
      <GallerySection />
    </div>
  );
}
