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
        
        {/* Simple CTA / Contact Section right before Footer */}
        <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-sm font-medium mb-8">
              Available for full-time roles
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">Let's build something <br className="hidden md:block" />impactful together.</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you need to untangle a complex enterprise platform or build a scalable design system from scratch — I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:gouravmukherjee1907@gmail.com"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium text-base transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Send an email
              </a>
              <a
                href="https://linkedin.com/in/gourav-mukherjee-710503207"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#0A66C2] text-white hover:bg-[#004182] px-8 py-4 rounded-full font-medium text-base transition-transform hover:-translate-y-1 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                Connect on LinkedIn
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Or reach me directly at{" "}
              <a href="tel:+917992312865" className="underline underline-offset-2 hover:text-foreground transition-colors">
                +91 79923 12865
              </a>
            </p>
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
