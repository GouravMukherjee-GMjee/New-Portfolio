import { motion } from "framer-motion";
import { Layers, Coins, Code2, Puzzle } from "lucide-react";
import { portfolioEasing } from "@/lib/motion";

const capabilities = [
  {
    icon: Coins,
    title: "Token-Based Architecture",
    desc: "Color, typography, spacing, and radius tokens that propagate across multi-brand platforms from a single source of truth.",
  },
  {
    icon: Puzzle,
    title: "Figma Component Systems",
    desc: "Responsive, variant-rich components using Auto Layout and nested instances — built so any designer can use them without breaking.",
  },
  {
    icon: Code2,
    title: "Dev-Ready Handoff",
    desc: "Component names, props, and states mapped directly to React/Tailwind — cutting design-to-dev ambiguity to near zero.",
  },
];

const metrics = [
  { value: "40%", label: "Faster handoff" },
  { value: "200+", label: "Hours saved / quarter" },
  { value: "3×", label: "Design velocity" },
];

export function DesignSystem() {
  return (
    <section className="py-24 md:py-32 bg-secondary/20 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy + Capabilities ── */}
          <div className="lg:col-span-5 space-y-8">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers size={16} className="text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Design Systems
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight">
                Building Systems,<br />Not Just Screens.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I champion design systems to ensure consistency, accelerate development, and maintain quality at scale — across every product and team that depends on them.
              </p>
            </motion.div>

            {/* Capability cards */}
            <div className="space-y-3">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex gap-4 bg-card border border-border rounded-xl p-4 hover:border-foreground/20 hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-0.5">{cap.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Metric strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex gap-6 pt-2"
            >
              {metrics.map((m) => (
                <div key={m.label} className="border-l-2 border-foreground/15 pl-4">
                  <p className="text-2xl font-serif font-medium text-foreground">{m.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Design system preview image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: portfolioEasing, delay: 0.1 }}
            className="lg:col-span-7 relative"
          >
            {/* Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/8 via-transparent to-primary/4 rounded-3xl blur-2xl pointer-events-none" />

            {/* Frame */}
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
              {/* Top bar — editor chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <span className="ml-4 text-xs text-muted-foreground font-medium">Design System — Figma</span>
              </div>

              {/* Screenshot */}
              <img
                src={`${import.meta.env.BASE_URL}images/design-system.png`}
                alt="Design System Components"
                className="w-full object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
