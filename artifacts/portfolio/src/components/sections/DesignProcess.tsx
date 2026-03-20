import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Target, Lightbulb, PenTool, FlaskConical } from "lucide-react";

const steps = [
  {
    phase: "01",
    label: "Empathize",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
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

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">

          {/* Connector line — desktop only */}
          <div className="absolute top-9 left-[10%] right-[10%] h-px bg-border hidden lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col gap-5"
              >
                {/* Icon bubble — sits on the connector line */}
                <div className={`relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center border ${step.bg} ${step.border} self-start`}>
                  <Icon size={26} className={step.color} />
                </div>

                <div>
                  <span className="text-xs font-bold tracking-widest text-muted-foreground/50 uppercase">
                    {step.phase}
                  </span>
                  <h3 className={`text-xl font-serif font-medium mt-0.5 mb-3 ${step.color}`}>
                    {step.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Method tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {step.methods.map((m) => (
                      <span
                        key={m}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full border ${step.bg} ${step.border} ${step.color}`}
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

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 text-sm text-muted-foreground text-center max-w-xl mx-auto"
        >
          This is a guide, not a rigid checklist — the process adapts to project constraints, but user validation always anchors every decision.
        </motion.p>
      </div>
    </section>
  );
}
