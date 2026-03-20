import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Search, Layers, TrendingUp, Code2, Sparkles } from "lucide-react";

const coreSkills = [
  {
    category: "Research & Discovery",
    icon: Search,
    accent: "text-violet-500",
    accentBg: "bg-violet-500/10",
    items: ["User Interviews", "Field Observation", "Usability Testing", "Surveys & Analytics", "Journey Mapping", "Heuristic Evaluation"],
  },
  {
    category: "UX Design",
    icon: Layers,
    accent: "text-sky-500",
    accentBg: "bg-sky-500/10",
    items: ["Information Architecture", "Interaction Design", "Wireframing", "Hi-Fi Prototyping", "Responsive Design", "Accessibility (WCAG)"],
  },
  {
    category: "Product Strategy",
    icon: TrendingUp,
    accent: "text-emerald-500",
    accentBg: "bg-emerald-500/10",
    items: ["UX Strategy", "Product Thinking", "Stakeholder Alignment", "A/B Testing", "Design Systems", "Design Tokens"],
  },
];

const tools = [
  { name: "Figma",       abbr: "Fi",  bg: "bg-[#7B61FF]",   type: "Primary"   },
  { name: "Adobe XD",   abbr: "XD",  bg: "bg-[#FF61F6]",   type: "Primary"   },
  { name: "Photoshop",  abbr: "Ps",  bg: "bg-[#31A8FF]",   type: "Primary"   },
  { name: "Illustrator",abbr: "Ai",  bg: "bg-[#FF9A00]",   type: "Primary"   },
  { name: "Sketch",     abbr: "Sk",  bg: "bg-[#F7B500]",   type: "Secondary" },
  { name: "Miro",       abbr: "Mi",  bg: "bg-[#050038]",   type: "Primary"   },
  { name: "Balsamiq",   abbr: "Bq",  bg: "bg-[#CC3333]",   type: "Secondary" },
  { name: "Notion",     abbr: "No",  bg: "bg-[#191919]",   type: "Primary"   },
  { name: "Jira",       abbr: "Ji",  bg: "bg-[#0052CC]",   type: "Primary"   },
  { name: "Maze",       abbr: "Mz",  bg: "bg-[#7B5EA7]",   type: "Secondary" },
];

const code = [
  "HTML5 / CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "React (basics)",
];

const aiSkills = [
  "AI-Powered UX Workflows", "Prompt Engineering for Designers", "UX Research Automation", "AI-Assisted Wireframing",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="Skills & Tools"
          subtitle="The disciplines, methods, and software I use to take a product from research to pixel-perfect delivery."
        />

        <div className="space-y-5">

          {/* ── Row 1: Core competency cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {coreSkills.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${group.accentBg} flex items-center justify-center`}>
                      <Icon size={17} className={group.accent} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">{group.category}</h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary border border-border/60 rounded-lg hover:text-foreground hover:border-foreground/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Row 2: Design Tools visual grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Design Tools</h3>
              <div className="flex items-center gap-3 text-[10px] font-semibold text-muted-foreground/60 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-foreground/50 inline-block" />
                  Primary
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-border inline-block" />
                  Secondary
                </span>
              </div>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.04 }}
                  className="group flex flex-col items-center gap-2"
                >
                  {/* Colored icon badge */}
                  <div className={`w-11 h-11 rounded-xl ${tool.bg} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-200`}>
                    <span className="text-white text-[11px] font-black tracking-tight">{tool.abbr}</span>
                  </div>
                  {/* Name */}
                  <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight group-hover:text-foreground transition-colors">
                    {tool.name}
                  </span>
                  {/* Type dot */}
                  <span className={`w-1.5 h-1.5 rounded-full ${tool.type === "Primary" ? "bg-foreground/40" : "bg-border"}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Row 3: Code + AI side by side ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Code2 size={17} className="text-blue-500" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Frontend Implementation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {code.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary border border-border/60 rounded-lg hover:text-foreground hover:border-foreground/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI in UX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Sparkles size={17} className="text-amber-500" />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  AI in UX
                  <span className="ml-2 normal-case tracking-normal text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full font-semibold align-middle">Emerging</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-secondary border border-border/60 rounded-lg hover:text-foreground hover:border-foreground/20 transition-colors"
                  >
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
