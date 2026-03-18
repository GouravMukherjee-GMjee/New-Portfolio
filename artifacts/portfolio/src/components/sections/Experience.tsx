import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const experiences = [
  {
    company: "Bursys Infotech India Pvt. Ltd.",
    role: "Senior UX Designer",
    product: "FieldEquip (FSM SaaS Platform)",
    period: "Feb 2024 – Present",
    bullets: [
      "Spearheaded end-to-end UX redesign of a Field Service Management SaaS platform (Web & Mobile), optimizing enterprise workflows across core modules.",
      "Conducted user research, stakeholder workshops, usability testing, and heuristic evaluations to increase task completion rate by 25%.",
      "Developed information architecture, user journeys, wireframes, and high-fidelity interactive prototypes in Figma, aligned with business KPIs.",
      "Architected and maintained a scalable design system and reusable component library, improving UI consistency and accelerating development efficiency.",
      "Simplified complex enterprise workflows (Work Orders, Asset Management, Inventory), reducing process completion time by 30%.",
      "Improved usability and accessibility (WCAG standards), contributing to increased product adoption and user satisfaction."
    ]
  },
  {
    company: "Wefivesoft Pvt. Ltd.",
    role: "Software Engineer & UI/UX Designer",
    product: "MarkersPro (EdTech SaaS Platform)",
    period: "Mar 2021 – Sep 2023",
    bullets: [
      "Led end-to-end UI/UX design and front-end development in Agile/Scrum sprints for a cloud-based EdTech SaaS platform.",
      "Improved user engagement by 30% and reduced bounce rate by 25% by restructuring information architecture and optimizing navigation flows.",
      "Designed responsive, mobile-first, and accessible interfaces for web and mobile, following WCAG accessibility principles.",
      "Conducted user research and developed personas, journey maps, user flows, wireframes, and high-fidelity prototypes aligned with product strategy.",
      "Built and maintained a scalable design system ensuring cross-platform UI consistency and faster feature deployment.",
      "Developed clean, maintainable front-end code using HTML5, CSS3, Bootstrap, and JavaScript."
    ]
  },
  {
    company: "Trident Academy of Technology",
    role: "B.Tech — Computer Science",
    product: "Bhubaneswar, Odisha",
    period: "Aug 2020",
    bullets: [
      "Bachelor of Technology in Computer Science, providing a strong foundation in software engineering, UI fundamentals, and web technologies."
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
                    <h4 className="text-base font-semibold text-foreground/70 mb-1">{exp.company}</h4>
                    <p className="text-sm text-primary font-medium mb-6">{exp.product}</p>
                    
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
