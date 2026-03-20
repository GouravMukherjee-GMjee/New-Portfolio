import { motion } from "framer-motion";
import { ArrowRight, Download, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Designing <span className="text-muted-foreground italic">Scalable UX</span> <br className="hidden md:block" />
            for Complex Products.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
            Senior UX Designer with 5+ years crafting intuitive enterprise experiences for SaaS, FSM platforms, and EdTech. From rigorous research to pixel-perfect execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto rounded-full h-14 px-8 text-base group"
              onClick={scrollToWork}
            >
              View Case Studies
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href={`${import.meta.env.BASE_URL}Gourav_Mukherjee_Resume.pdf`}
              download="Gourav_Mukherjee_Resume.pdf"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3 text-sm font-medium text-muted-foreground"
      >
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <span className="uppercase tracking-widest text-xs">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
