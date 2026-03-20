import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    title: "UX & Product Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Information Architecture", "Interaction Design", "Usability Testing", "Journey Mapping", "User Flows"]
  },
  {
    title: "Strategy & Systems",
    skills: ["Design Systems", "Design Tokens", "Component Libraries", "UX Strategy", "Product Thinking", "Stakeholder Alignment", "Accessibility (WCAG)", "A/B Testing"]
  },
  {
    title: "Tools",
    skills: ["Figma", "Adobe XD", "Sketch", "Balsamiq", "Miro"]
  },
  {
    title: "Frontend & Implementation",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"]
  },
  {
    title: "AI in UX",
    skills: ["AI-Powered UX Workflows", "Prompt Engineering", "UX Research Automation", "AI-Assisted Wireframing"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="Skills & Tools"
          subtitle="The disciplines, methods, and software I use to take a product from research to pixel-perfect delivery."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary transition-colors text-foreground text-sm font-medium rounded-xl border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
