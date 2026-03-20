import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Target, Lightbulb, PenTool, FlaskConical } from "lucide-react";

const steps = [
  {
    phase: "01",
    label: "Empathize",
    icon: Users,
    description: "Deep-dive into user needs through interviews, observation, and empathy mapping to understand the real problem.",
    methods: ["User Interviews", "Field Observation", "Empathy Maps", "Surveys"],
  },
  {
    phase: "02",
    label: "Define",
    icon: Target,
    description: "Synthesise research into clear problem statements, personas, and journey maps that guide every decision.",
    methods: ["Problem Statements", "Personas", "Journey Maps", "HMW Questions"],
  },
  {
    phase: "03",
    label: "Ideate",
    icon: Lightbulb,
    description: "Generate a wide solution space through structured workshops, then converge on the most promising ideas.",
    methods: ["Crazy 8s", "Affinity Mapping", "Dot Voting", "User Flows"],
  },
  {
    phase: "04",
    label: "Prototype",
    icon: PenTool,
    description: "Build lo-fi to hi-fi Figma prototypes to test ideas and validate flows before a single line of code is written.",
    methods: ["Lo-fi Wireframes", "Hi-fi Prototypes", "Design Systems", "Handoff Specs"],
  },
  {
    phase: "05",
    label: "Test",
    icon: FlaskConical,
    description: "Validate with real users through usability tests, heuristic reviews, and A/B testing. Then iterate.",
    methods: ["Usability Testing", "Heuristic Review", "A/B Testing", "WCAG Audits"],
  },
];

export function DesignProcess() {
  return (
    <section className="py-24 md:py-32 bg-secondary/20 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="My Design Process"
          subtitle="A human-centred, iterative approach that keeps real users at the centre of every decision."
        />

        {/* ── Desktop: horizontal steps row ── */}
        <div className="hidden lg:block relative">
          {/* Connecting line — vertically centred through the icon nodes */}
          <div className="absolute top-7 left-[10%] right-[10%] h-px bg-border z-0" />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col"
                >
                  {/* Icon node — sits on the connecting line */}
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-card border-2 border-border flex items-center justify-center text-muted-foreground group-hover:border-foreground group-hover:text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300 shadow-sm">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-card border border-border rounded-2xl p-5 group-hover:border-foreground/20 group-hover:shadow-md transition-all duration-300">
                    {/* Step number */}
                    <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground/50 uppercase">
                      {step.phase}
                    </span>

                    {/* Step name */}
                    <h3 className="font-serif font-medium text-lg text-foreground mt-1 mb-2">
                      {step.label}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Method tags */}
                    <div className="flex flex-wrap gap-1">
                      {step.methods.map((m) => (
                        <span
                          key={m}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary border border-border/60 text-muted-foreground"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: clean vertical numbered list ── */}
        <div className="flex flex-col gap-0 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 relative"
              >
                {/* Left: number + vertical line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground z-10">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-px bg-border mt-2 mb-2 min-h-[2rem]" />
                  )}
                </div>

                {/* Right: content */}
                <div className={`flex-1 pb-8 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase">{step.phase}</span>
                  </div>
                  <h3 className="font-serif font-medium text-lg text-foreground mb-1">{step.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.methods.map((m) => (
                      <span key={m} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary border border-border/60 text-muted-foreground">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground text-center max-w-lg mx-auto italic"
        >
          This is a guide, not a rigid checklist — the process adapts to project constraints, but user validation always anchors every decision.
        </motion.p>
      </div>
    </section>
  );
}
