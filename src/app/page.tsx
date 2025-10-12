import Association from "@/components/commun/assoction";
import ComunidadeSection from "@/components/commun/ComunidadeSection";
import EventSection from "@/components/commun/event";
import HeroSection from "@/components/commun/hero";
import PhraseComponent from "@/components/commun/phrase";
import ProjectsSection from "@/components/commun/projects";
import TestimonialsSection from "@/components/commun/testimonials";
import WhoWeAre from "@/components/commun/WhoWeAre";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div id="association" className="py-10"></div>
      <Association />
      <ProjectsSection />
      <WhoWeAre />
      <TestimonialsSection />
      {/*  <GallerySection /> */}
      <EventSection />
      <ComunidadeSection />
      <PhraseComponent />
      {/* <MessageComponent /> */}
    </div>
  );
}
