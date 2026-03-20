import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const coreSkills = [
  {
    category: "Research & Discovery",
    items: ["User Interviews", "Field Observation", "Usability Testing", "Surveys & Analytics", "Journey Mapping", "Heuristic Evaluation"],
  },
  {
    category: "UX Design",
    items: ["Information Architecture", "Interaction Design", "Wireframing", "Hi-Fi Prototyping", "Responsive Design", "Accessibility (WCAG)"],
  },
  {
    category: "Product Strategy",
    items: ["UX Strategy", "Product Thinking", "Stakeholder Alignment", "A/B Testing", "Design Systems", "Design Tokens"],
  },
];

const tools = [
  { name: "Figma", type: "Primary" },
  { name: "Adobe XD", type: "Primary" },
  { name: "Sketch", type: "Secondary" },
  { name: "Miro", type: "Primary" },
  { name: "Balsamiq", type: "Secondary" },
  { name: "Notion", type: "Primary" },
  { name: "Jira", type: "Primary" },
  { name: "Maze", type: "Secondary" },
];

const code = [
  { name: "HTML5 / CSS3", type: "Proficient" },
  { name: "JavaScript", type: "Proficient" },
  { name: "Tailwind CSS", type: "Proficient" },
  { name: "Bootstrap", type: "Proficient" },
  { name: "React (basics)", type: "Familiar" },
];

const aiSkills = ["AI-Powered UX Workflows", "Prompt Engineering for Designers", "UX Research Automation", "AI-Assisted Wireframing"];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="Skills & Tools"
          subtitle="The disciplines, methods, and software I use to take a product from research to pixel-perfect delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left — Core competencies */}
          <div className="space-y-6">
            {coreSkills.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium text-foreground bg-secondary border border-border/60 rounded-lg hover:border-foreground/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Tools, Code, AI */}
          <div className="space-y-6">

            {/* Design Tools */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Design Tools
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between px-3 py-2 bg-secondary/60 rounded-lg border border-border/50">
                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                      tool.type === "Primary"
                        ? "bg-foreground/10 text-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {tool.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Frontend Implementation
              </h3>
              <div className="space-y-2">
                {code.map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-3 py-2 bg-secondary/60 rounded-lg border border-border/50">
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                      item.type === "Proficient"
                        ? "bg-foreground/10 text-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI in UX */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                AI in UX <span className="normal-case tracking-normal text-[9px] ml-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded-full font-semibold">Emerging</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-sm font-medium text-foreground bg-secondary border border-border/60 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
