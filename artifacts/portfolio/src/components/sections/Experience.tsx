import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    company: "Bursys Infotech India Pvt. Ltd.",
    role: "Senior UX Designer",
    product: "FieldEquip — FSM SaaS Platform",
    period: "Feb 2024 – Present",
    current: true,
    bullets: [
      "Spearheaded end-to-end UX redesign of a Field Service Management SaaS platform (Web & Mobile), optimising enterprise workflows across core modules.",
      "Conducted user research, stakeholder workshops, usability testing, and heuristic evaluations — increasing task completion rate by 25%.",
      "Developed information architecture, user journeys, wireframes, and hi-fi prototypes in Figma, aligned with business KPIs.",
      "Architected and maintained a scalable design system and reusable component library, improving UI consistency and accelerating development.",
      "Simplified complex enterprise workflows (Work Orders, Asset Management, Inventory), reducing process completion time by 30%.",
    ],
  },
  {
    type: "work" as const,
    company: "Wefivesoft Pvt. Ltd.",
    role: "Software Engineer & UI/UX Designer",
    product: "MarkersPro — EdTech SaaS Platform",
    period: "Mar 2021 – Sep 2023",
    current: false,
    bullets: [
      "Led end-to-end UI/UX design and front-end development in Agile/Scrum sprints for a cloud-based EdTech SaaS platform.",
      "Improved user engagement by 30% and reduced bounce rate by 25% by restructuring information architecture and navigation flows.",
      "Designed responsive, mobile-first, accessible interfaces for web and mobile following WCAG principles.",
      "Built and maintained a scalable design system ensuring cross-platform UI consistency and faster feature deployment.",
      "Developed clean front-end code using HTML5, CSS3, Bootstrap, and JavaScript.",
    ],
  },
  {
    type: "education" as const,
    company: "Trident Academy of Technology",
    role: "B.Tech — Computer Science",
    product: "Bhubaneswar, Odisha",
    period: "Graduated Aug 2020",
    current: false,
    bullets: [
      "Bachelor of Technology in Computer Science — strong foundation in software engineering, UI fundamentals, and web technologies.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader title="Experience" alignment="center" />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isWork = exp.type === "work";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-8 pl-12"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1">
                    {isWork ? (
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 ${
                        exp.current
                          ? "bg-foreground border-foreground text-background"
                          : "bg-background border-border text-muted-foreground"
                      }`}>
                        <Briefcase size={15} />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary border border-border text-muted-foreground">
                        <GraduationCap size={15} />
                      </div>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 bg-background border border-border rounded-2xl p-6 ${!isWork ? "opacity-70" : ""}`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-lg font-serif font-medium text-foreground">{exp.role}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground">{exp.company}</p>
                        {isWork && (
                          <p className="text-xs text-primary font-medium mt-0.5">{exp.product}</p>
                        )}
                        {!isWork && (
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.product}</p>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wide whitespace-nowrap bg-secondary px-3 py-1.5 rounded-lg border border-border/50 self-start">
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-[0.45rem] w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
