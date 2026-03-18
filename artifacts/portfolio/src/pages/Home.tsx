import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
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
        <DesignSystem />
        <Skills />
        <Experience />
        
        {/* Simple CTA / Contact Section right before Footer */}
        <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-sm font-medium mb-8">
              Available for full-time roles
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">Let's build something <br className="hidden md:block" />impactful together.</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you need to untangle a complex enterprise platform or build a scalable design system from scratch.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:gourav.mukherjee@email.com"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                Get in touch
              </a>
            </div>
          </div>
          
          {/* Decorative background blurs */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
