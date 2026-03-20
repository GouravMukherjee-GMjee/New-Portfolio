import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Target, Lightbulb, PenTool, FlaskConical } from "lucide-react";

const steps = [
  {
    phase: "01",
    label: "Empathize",
    icon: Users,
    softBg: "bg-sky-100 dark:bg-sky-950/40",
    softBorder: "border-sky-200 dark:border-sky-800/60",
    softText: "text-sky-700 dark:text-sky-300",
    dotBg: "bg-sky-500",
    description: "Deep-dive into user needs through interviews, observation, and empathy mapping.",
    methods: ["User Interviews", "Field Observation", "Empathy Maps", "Surveys"],
  },
  {
    phase: "02",
    label: "Define",
    icon: Target,
    softBg: "bg-violet-100 dark:bg-violet-950/40",
    softBorder: "border-violet-200 dark:border-violet-800/60",
    softText: "text-violet-700 dark:text-violet-300",
    dotBg: "bg-violet-500",
    description: "Synthesise research into clear problem statements, personas, and journey maps.",
    methods: ["Problem Statements", "Personas", "Journey Maps", "HMW Questions"],
  },
  {
    phase: "03",
    label: "Ideate",
    icon: Lightbulb,
    softBg: "bg-amber-100 dark:bg-amber-950/40",
    softBorder: "border-amber-200 dark:border-amber-800/60",
    softText: "text-amber-700 dark:text-amber-300",
    dotBg: "bg-amber-500",
    description: "Generate a wide solution space through structured workshops, then converge on the best ideas.",
    methods: ["Crazy 8s", "Affinity Mapping", "Dot Voting", "User Flows"],
  },
  {
    phase: "04",
    label: "Prototype",
    icon: PenTool,
    softBg: "bg-emerald-100 dark:bg-emerald-950/40",
    softBorder: "border-emerald-200 dark:border-emerald-800/60",
    softText: "text-emerald-700 dark:text-emerald-300",
    dotBg: "bg-emerald-500",
    description: "Build lo-fi to hi-fi Figma prototypes to test ideas before a single line of code is written.",
    methods: ["Lo-fi Wireframes", "Hi-fi Prototypes", "Design Systems", "Handoff Specs"],
  },
  {
    phase: "05",
    label: "Test",
    icon: FlaskConical,
    softBg: "bg-rose-100 dark:bg-rose-950/40",
    softBorder: "border-rose-200 dark:border-rose-800/60",
    softText: "text-rose-700 dark:text-rose-300",
    dotBg: "bg-rose-500",
    description: "Validate with real users through usability tests, heuristic reviews, and A/B testing.",
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

        {/* ── Desktop zigzag layout ── */}
        <div className="hidden lg:block">

          {/* Top row — content for even steps (02, 04) */}
          <div className="grid grid-cols-5 mb-0">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={`top-${step.phase}`} className="px-2">
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, y: -16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className={`rounded-2xl border p-5 ${step.softBg} ${step.softBorder}`}
                    >
                      <StepContent step={step} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Centre connector row */}
          <div className="grid grid-cols-5 my-4 items-center">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1;
              const Icon = step.icon;
              return (
                <div key={`mid-${step.phase}`} className="flex items-center">
                  {/* Dashed line before (except first) */}
                  {i > 0 && (
                    <div className="flex-1 border-t-2 border-dashed border-border" />
                  )}

                  {/* Step node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center mx-auto flex-shrink-0"
                  >
                    {/* Vertical stem — up for even, down for odd */}
                    <div className={`w-px h-6 bg-border ${isEven ? "order-first" : "order-last"}`} />
                    {/* Circle badge */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md ${step.dotBg} ${isEven ? "order-last" : "order-first"}`}>
                      <Icon size={22} />
                    </div>
                  </motion.div>

                  {/* Dashed line after (except last) */}
                  {i < steps.length - 1 && (
                    <div className="flex-1 border-t-2 border-dashed border-border" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom row — content for odd steps (01, 03, 05) */}
          <div className="grid grid-cols-5">
            {steps.map((step, i) => {
              const isOdd = i % 2 === 0;
              return (
                <div key={`bot-${step.phase}`} className="px-2">
                  {isOdd && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className={`rounded-2xl border p-5 ${step.softBg} ${step.softBorder}`}
                    >
                      <StepContent step={step} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: vertical stack ── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex gap-4 rounded-2xl border p-5 items-start ${step.softBg} ${step.softBorder}`}
              >
                <div className={`w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white ${step.dotBg}`}>
                  <Icon size={19} />
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-bold tracking-widest uppercase ${step.softText} opacity-60`}>{step.phase}</span>
                  <h3 className={`font-serif font-medium text-base mt-0.5 mb-2 ${step.softText}`}>{step.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.methods.map((m) => (
                      <span key={m} className={`text-xs font-medium px-2.5 py-1 rounded-full bg-background/60 border ${step.softBorder} ${step.softText}`}>{m}</span>
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
          className="mt-12 text-sm text-muted-foreground text-center max-w-xl mx-auto"
        >
          This is a guide, not a rigid checklist — the process adapts to project constraints, but user validation always anchors every decision.
        </motion.p>
      </div>
    </section>
  );
}

function StepContent({ step }: { step: typeof steps[number] }) {
  return (
    <>
      <span className={`text-xs font-bold tracking-widest uppercase ${step.softText} opacity-60`}>{step.phase}</span>
      <h3 className={`font-serif font-medium text-base mt-0.5 mb-2 ${step.softText}`}>{step.label}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{step.description}</p>
      <div className="flex flex-wrap gap-1">
        {step.methods.map((m) => (
          <span
            key={m}
            className={`text-xs font-medium px-2 py-0.5 rounded-full bg-background/60 border ${step.softBorder} ${step.softText}`}
          >
            {m}
          </span>
        ))}
      </div>
    </>
  );
}
