import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { DesignProcess } from "@/components/sections/DesignProcess";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { DesignSystem } from "@/components/sections/DesignSystem";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative selection:bg-primary/20 selection:text-primary">
      <div className="grain-overlay" />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <PersonalProjects />
        <DesignSystem />
        <DesignProcess />
        <Skills />
        <Experience />
        
      </main>

      <Footer />
    </div>
  );
}
