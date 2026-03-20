import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, Zap, Timer } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const metrics = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    direction: "up",
    value: "+30%",
    label: "User Engagement",
    context: "MarkersPro EdTech Platform",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    direction: "down",
    value: "−25%",
    label: "Bounce Rate",
    context: "MarkersPro Navigation Redesign",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    direction: "up",
    value: "+25%",
    label: "Task Completion",
    context: "FieldEquip FSM Platform",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    direction: "down",
    value: "−30%",
    label: "Process Time",
    context: "FieldEquip Workflow Redesign",
  },
];

const directionStyles = {
  up: {
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    value: "text-emerald-600 dark:text-emerald-400",
    border: "border-l-emerald-400/40",
  },
  down: {
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    value: "text-amber-600 dark:text-amber-400",
    border: "border-l-amber-400/40",
  },
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">

          {/* Left — Bio */}
          <div className="lg:col-span-5">
            {/* Accent line above header */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="w-12 h-[3px] bg-foreground/30 rounded-full mb-6"
            />

            <SectionHeader title="Driven by impact, rooted in empathy." />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4 text-muted-foreground text-base md:text-[1.05rem] leading-relaxed"
            >
              <p>
                I'm a product designer who thrives at the intersection of complex system requirements and human needs. Over 5+ years, I've specialised in untangling dense enterprise workflows — turning them into experiences that genuinely save people time.
              </p>
              <p>
                My process isn't just about aesthetics — it's about measurable outcomes. I rely on user research, data analytics, and iterative prototyping to validate every decision before it reaches a developer's desk.
              </p>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 pl-4 border-l-2 border-foreground/20 italic text-muted-foreground text-sm leading-relaxed"
            >
              "Good design is invisible — it just makes things work the way people expect them to."
            </motion.blockquote>

            {/* Area tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["SaaS & Enterprise UX", "Field Service Mgmt", "EdTech Platforms", "Design Systems"].map((area) => (
                <span
                  key={area}
                  className="px-3.5 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-lg border border-border/50 tracking-wide"
                >
                  {area}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Metrics 2×2 grid */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              Measured Impact
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {metrics.map((m, i) => {
                const style = directionStyles[m.direction as "up" | "down"];
                return (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-card border border-border border-l-4 ${style.border} rounded-2xl p-6 hover:shadow-md transition-shadow duration-300`}
                  >
                    {/* Icon badge */}
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-4 ${style.badge}`}>
                      {m.icon}
                      Impact
                    </div>
                    {/* Value */}
                    <div className={`text-4xl font-serif font-semibold leading-none mb-2 ${style.value}`}>
                      {m.value}
                    </div>
                    {/* Label */}
                    <p className="font-semibold text-foreground text-sm">{m.label}</p>
                    {/* Context */}
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{m.context}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground mt-5 text-right"
            >
              Metrics validated through user research &amp; analytics
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
