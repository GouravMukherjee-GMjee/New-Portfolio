import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const experiences = [
  {
    company: "Bursys Infotech",
    role: "Senior UX Designer",
    period: "2022 - Present",
    bullets: [
      "Led UX for FieldEquip FSM platform serving 250K+ daily active users.",
      "Built and maintained a comprehensive design system with 80+ components in Figma.",
      "Reduced critical user flow friction, moving from 8 steps to 3 steps for core tasks.",
      "Mentored 2 junior designers and established standard operating procedures for the design team."
    ]
  },
  {
    company: "Wefivesoft",
    role: "UI/UX Designer & Frontend Dev",
    period: "2019 - 2022",
    bullets: [
      "Designed and prototyped MarkersPro EdTech platform (50K+ active users).",
      "Implemented responsive designs directly into production using HTML/CSS and Tailwind.",
      "Introduced a basic UI kit that reduced design inconsistencies across modules by 70%.",
      "Led generative user research initiatives across 3 distinct product lines."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader title="Experience" alignment="center" />

        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border block md:hidden" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary -translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                {/* Date for Desktop */}
                <div className={`hidden md:block w-1/2 pt-1 ${index % 2 === 0 ? "text-left pl-16" : "text-right pr-16"}`}>
                  <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div className={`md:${index % 2 === 0 ? "pr-16" : "pl-16"}`}>
                    {/* Date for Mobile */}
                    <span className="md:hidden block text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-2">
                      {exp.period}
                    </span>
                    
                    <h3 className="text-2xl font-serif font-medium text-foreground">{exp.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-6">{exp.company}</h4>
                    
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
