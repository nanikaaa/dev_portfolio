import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import  EducationSection  from "@/sections/Education";
import Learning from "@/sections/Learning";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />

      <EducationSection />
      <Learning />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
