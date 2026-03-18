import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "UX & Product Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Information Architecture", "Usability Testing", "Journey Mapping"]
  },
  {
    title: "Strategy & Systems",
    skills: ["Design Systems", "Design Tokens", "Product Strategy", "Roadmapping", "Metrics-Driven Design", "Stakeholder Alignment"]
  },
  {
    title: "Tools & Tech",
    skills: ["Figma", "HTML/CSS", "Tailwind CSS", "React (Basics)", "Miro", "Maze", "AI Prompt Engineering"]
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
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
