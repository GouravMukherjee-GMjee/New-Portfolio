import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cases = [
  {
    id: "fieldequip",
    title: "FieldEquip FSM Platform",
    role: "Lead UX Designer",
    duration: "8 months",
    tags: ["SaaS", "Enterprise", "Mobile", "B2B"],
    problem:
      "Field technicians were losing 40% of their productive time due to poor task management UI and disconnected workflows across web and mobile.",
    solution:
      "Redesigned the task management system with a unified dashboard, reduced nav clicks from 6 to 2, and implemented an offline-first mobile experience.",
    image: "images/fieldequip-mockup.png",
    metrics: [
      { label: "Task Completion", value: "+25%", type: "up" },
      { label: "Process Time", value: "−30%", type: "good-down" },
      { label: "Zero UI Defects", value: "Pre-release", type: "quality" },
    ],
  },
  {
    id: "markerspro",
    title: "MarkersPro Assessment",
    role: "Senior UX Designer",
    duration: "6 months",
    tags: ["EdTech", "SaaS", "Mobile-first"],
    problem:
      "Students and teachers experienced high drop-off rates (68%) during assessment creation and submission due to poor navigation and non-responsive design.",
    solution:
      "Restructured global navigation, redesigned assessment creation to a 3-step wizard, and built a fully responsive mobile-first experience.",
    image: "images/markerspro-mockup.png",
    metrics: [
      { label: "User Engagement", value: "+30%", type: "up" },
      { label: "Bounce Rate", value: "−25%", type: "good-down" },
      { label: "Cross-platform", value: "Consistent", type: "quality" },
    ],
  },
];

const metricStyle = {
  up: {
    value: "text-emerald-600 dark:text-emerald-400",
    icon: <TrendingUp size={13} className="text-emerald-500" />,
    bg: "bg-emerald-500/8 border-emerald-200/60 dark:border-emerald-800/40",
  },
  "good-down": {
    value: "text-emerald-600 dark:text-emerald-400",
    icon: <TrendingDown size={13} className="text-emerald-500" />,
    bg: "bg-emerald-500/8 border-emerald-200/60 dark:border-emerald-800/40",
  },
  quality: {
    value: "text-foreground",
    icon: <CheckCircle size={13} className="text-muted-foreground" />,
    bg: "bg-secondary border-border/50",
  },
};

export function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="Selected Work"
          subtitle="Deep dives into complex problems and the design decisions that solved them."
        />

        <div className="space-y-24 md:space-y-32">
          {cases.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-[52%]">
                <div className="relative rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl shadow-black/5 aspect-[4/3] group">
                  <img
                    src={`${import.meta.env.BASE_URL}${study.image}`}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/8 rounded-[2rem]" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-[48%]">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background border border-border text-xs font-semibold uppercase tracking-wider rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-3">{study.title}</h3>

                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-7 pb-7 border-b border-border">
                  <span className="font-medium">{study.role}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{study.duration}</span>
                </div>

                {/* Problem / Solution */}
                <div className="space-y-5 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground mb-2">
                      The Problem
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground mb-2">
                      The Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {study.metrics.map((m) => {
                    const style = metricStyle[m.type as keyof typeof metricStyle];
                    return (
                      <div
                        key={m.label}
                        className={`rounded-xl p-4 border flex flex-col gap-2 ${style.bg}`}
                      >
                        <div className="flex items-center gap-1">{style.icon}</div>
                        <div className={`text-xl font-serif font-semibold leading-none ${style.value}`}>
                          {m.value}
                        </div>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground leading-snug">
                          {m.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-xs text-muted-foreground italic">
                  Full case study available on request — reach out via the contact section.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
