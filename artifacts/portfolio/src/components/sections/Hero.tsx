import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase, Clock, FolderOpen, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: <Clock size={16} />, value: "5+", label: "Years Experience" },
  { icon: <Briefcase size={16} />, value: "2", label: "Companies" },
  { icon: <FolderOpen size={16} />, value: "7+", label: "Products Shipped" },
  { icon: <LayoutGrid size={16} />, value: "3+", label: "Design Systems" },
];

const specializations = ["SaaS Platforms", "Enterprise UX", "FSM", "EdTech"];

export function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover opacity-30 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Opportunities
            </div>

            {/* Name + Role */}
            <p className="text-base font-semibold tracking-widest uppercase text-muted-foreground mb-4">Gourav Mukherjee · Senior UI/UX & Product Designer</p>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-6">
              Designing{" "}
              <span className="text-muted-foreground italic">Scalable UX</span>{" "}
              <br className="hidden sm:block" />
              for Complex Products.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
              Specializing in enterprise SaaS, Field Service Management, and EdTech — from user research and information architecture to pixel-perfect, accessible interfaces.
            </p>

            {/* Specialization pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {specializations.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/60 rounded-full text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
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

          {/* Right — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:flex flex-col gap-4"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
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
