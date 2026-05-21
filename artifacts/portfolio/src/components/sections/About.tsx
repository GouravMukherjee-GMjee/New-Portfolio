import { motion } from "framer-motion";
import { Search, Layers, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioEasing } from "@/lib/motion";

const traits = ["Research-Led", "Systems Thinker", "User Advocate", "Accessibility Focused"];

const principles = [
  {
    icon: <Search className="w-5 h-5" />,
    belief: "Research before pixels.",
    detail:
      "Every decision I make is grounded in evidence, not assumption. User research isn't a phase — it's the lens through which I see every problem.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    belief: "Systems over screens.",
    detail:
      "I design for scale. A well-built design system outlasts any single screen and empowers entire teams to ship consistently and confidently.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    belief: "Clarity over complexity.",
    detail:
      "The best enterprise tools feel obvious. Reducing cognitive load in dense workflows is the hardest — and most impactful — design challenge there is.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

          {/* Left — Bio */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: portfolioEasing }}
              style={{ transformOrigin: "left" }}
              className="w-10 h-[3px] bg-foreground/30 rounded-full mb-6"
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
                I'm a designer who loves turning complex ideas into simple, user-friendly experiences. I enjoy working on products that solve real problems — whether it's helping users find jobs, manage healthcare, or track their daily activities.
              </p>
              <p>
                I believe good design is not just about how things look, but how they work. That's why I focus on usability, clarity, and meaningful interactions in every project I build.
              </p>
              <p>
                When I'm not designing, I'm exploring new trends, improving my skills, and experimenting with modern tools to stay ahead in the design space.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 pl-4 border-l-2 border-foreground/20 italic text-muted-foreground text-sm leading-relaxed"
            >
              "Good design is invisible — it just makes things work the way people expect them to."
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {traits.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-lg border border-border/50 tracking-wide"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Design Philosophy */}
          <div className="lg:col-span-6 lg:col-start-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6"
            >
              Design Philosophy
            </motion.p>

            <div className="space-y-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p.belief}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    {p.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1.5 font-serif italic">
                      {p.belief}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
