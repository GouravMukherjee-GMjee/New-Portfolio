import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase, Clock, FolderOpen, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: <Clock size={18} />, value: "5+", label: "Years Experience" },
  { icon: <Briefcase size={18} />, value: "2", label: "Companies" },
  { icon: <FolderOpen size={18} />, value: "7+", label: "Products Shipped" },
  { icon: <LayoutGrid size={18} />, value: "3+", label: "Design Systems" },
];

const specializations = ["SaaS Platforms", "Enterprise UX", "FSM", "EdTech"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export function Hero() {
  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover opacity-25 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/4 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left — Text (each block animates independently) */}
          <div className="lg:col-span-7">
            {/* Availability badge */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/50 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Opportunities
              </div>
            </motion.div>

            {/* Name + Role */}
            <motion.p {...fadeUp(0.1)} className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
              Gourav Mukherjee &nbsp;·&nbsp; UI/UX &amp; Product Designer
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-6xl lg:text-[5.25rem] font-serif font-medium leading-[1.04] tracking-tight mb-7"
            >
              Designing{" "}
              <em className="not-italic text-muted-foreground">Scalable UX</em>
              <br />
              for Complex{" "}
              <span className="relative inline-block">
                Products.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-foreground/20 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p {...fadeUp(0.3)} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
              Specializing in enterprise SaaS, Field Service Management, and EdTech — from user research and information architecture to pixel-perfect, accessible interfaces.
            </motion.p>

            {/* Specialization pills */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-2 mb-10">
              {specializations.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-secondary border border-border/60 rounded-full text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center gap-4">
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
            </motion.div>
          </div>

          {/* Right — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 flex flex-col gap-4 overflow-hidden hover:border-border/80 hover:shadow-sm transition-all duration-300"
                >
                  {/* Thin accent top border */}
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent rounded-full" />

                  <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-4xl font-serif font-semibold text-foreground leading-none">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium mt-1.5 tracking-wide">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* "Currently at" context tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-3 px-4 py-3 bg-card/60 border border-border/50 rounded-xl"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Open to full-time &amp; freelance roles in product design
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — animated mouse icon */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        {/* Mouse outline */}
        <div className="w-[22px] h-[34px] rounded-full border-2 border-foreground/25 flex justify-center pt-[5px]">
          <motion.div
            className="w-[3px] h-[6px] rounded-full bg-foreground/50"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </div>
        {/* Label */}
        <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60 font-medium">Scroll</span>
      </motion.div>
    </section>
  );
}
