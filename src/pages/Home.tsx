import InitialMaskReveal from "@/components/animations/InitialMaskReveal";
import AboutSection from "@/components/section/AboutSection";
import ContactSection from "@/components/section/ContactSection";
import HeroSection from "@/components/section/HeroSection";
import ProjectSection from "@/components/section/ProjectSection";
import TestimonialSection from "@/components/section/TestimonialSection";

const Home = () => {
  return (
    <main className="relative z-[10]">
      <InitialMaskReveal>
        <HeroSection />
      </InitialMaskReveal>

      <ProjectSection />

      <AboutSection />

      <ContactSection />

      <TestimonialSection />
    </main>
  );
};

export default Home;
