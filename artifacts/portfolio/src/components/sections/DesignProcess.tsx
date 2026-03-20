import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Target, Lightbulb, PenTool, FlaskConical, ChevronRight } from "lucide-react";

const steps = [
  {
    phase: "01",
    label: "Empathize",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    accent: "bg-blue-500",
    border: "border-blue-500/20",
    description:
      "User interviews, contextual observation, and empathy mapping to deeply understand the real problems people face — not the assumed ones.",
    methods: ["User Interviews", "Field Observation", "Empathy Maps", "Surveys"],
  },
  {
    phase: "02",
    label: "Define",
    icon: Target,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    accent: "bg-violet-500",
    border: "border-violet-500/20",
    description:
      "Synthesising research into crisp problem statements, personas, and journey maps that align the team around what truly needs to be solved.",
    methods: ["Problem Statements", "Personas", "Journey Mapping", "HMW Questions"],
  },
  {
    phase: "03",
    label: "Ideate",
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    accent: "bg-amber-500",
    border: "border-amber-500/20",
    description:
      "Divergent thinking through structured workshops — generating a wide solution space, then converging on the most promising ideas.",
    methods: ["Crazy 8s", "Affinity Mapping", "Dot Voting", "User Flows"],
  },
  {
    phase: "04",
    label: "Prototype",
    icon: PenTool,
    color: "text-green-500",
    bg: "bg-green-500/10",
    accent: "bg-green-500",
    border: "border-green-500/20",
    description:
      "From low-fidelity sketches to high-fidelity Figma prototypes — building just enough to test assumptions before a single line of code is written.",
    methods: ["Lo-fi Wireframes", "Hi-fi Prototypes", "Design Systems", "Handoff Specs"],
  },
  {
    phase: "05",
    label: "Test",
    icon: FlaskConical,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    accent: "bg-rose-500",
    border: "border-rose-500/20",
    description:
      "Usability testing, heuristic evaluations, and A/B testing to validate designs with real users and iterate until the experience is right.",
    methods: ["Usability Testing", "Heuristic Review", "A/B Testing", "WCAG Audits"],
  },
];

export function DesignProcess() {
  return (
    <section className="py-24 md:py-32 bg-card border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="My Design Process"
          subtitle="A human-centred, iterative approach that keeps real users at the centre of every decision."
        />

        {/* Steps row */}
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div key={step.phase} className="flex flex-row lg:flex-col items-stretch lg:items-center flex-1">

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-background border border-border rounded-2xl overflow-hidden flex flex-col"
                >
                  {/* Coloured top accent bar */}
                  <div className={`h-1 w-full ${step.accent}`} />

                  <div className="p-6 flex flex-col gap-4 h-full">
                    {/* Phase number + icon row */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-muted-foreground/40 uppercase">
                        {step.phase}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${step.bg} ${step.border} border`}>
                        <Icon size={17} className={step.color} />
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className={`text-lg font-serif font-medium ${step.color}`}>
                      {step.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Method tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                      {step.methods.map((m) => (
                        <span
                          key={m}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${step.bg} ${step.color}`}
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Chevron separator — between cards */}
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.15 }}
                    className="flex items-center justify-center flex-shrink-0 px-1 py-4 lg:py-0 lg:px-3"
                  >
                    <ChevronRight
                      size={18}
                      className="text-muted-foreground/30 rotate-90 lg:rotate-0"
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-sm text-muted-foreground text-center max-w-xl mx-auto"
        >
          This is a guide, not a rigid checklist — the process adapts to project constraints, but user validation always anchors every decision.
        </motion.p>
      </div>
    </section>
  );
}
