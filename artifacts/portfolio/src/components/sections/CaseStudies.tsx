import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const cases = [
  {
    id: "fieldequip",
    title: "FieldEquip FSM Platform",
    role: "Lead UX Designer",
    duration: "8 months",
    tags: ["SaaS", "Enterprise", "Mobile", "B2B"],
    problem: "Field technicians were losing 40% of their productive time due to poor task management UI and disconnected workflows across web and mobile.",
    solution: "Redesigned the task management system with a unified dashboard, reduced nav clicks from 6 to 2, and implemented an offline-first mobile experience.",
    image: "images/fieldequip-mockup.png",
    metrics: [
      { label: "Efficiency", value: "+30%" },
      { label: "App Rating", value: "4.6" },
      { label: "Training Time", value: "-60%" }
    ]
  },
  {
    id: "markerspro",
    title: "MarkersPro Assessment",
    role: "Senior UX Designer",
    duration: "6 months",
    tags: ["EdTech", "SaaS", "Mobile-first"],
    problem: "Students and teachers experienced high drop-off rates (68%) during assessment creation and submission due to poor navigation and non-responsive design.",
    solution: "Restructured global navigation, redesigned assessment creation to a 3-step wizard, and built a fully responsive mobile-first experience.",
    image: "images/markerspro-mockup.png",
    metrics: [
      { label: "Bounce Rate", value: "-25%" },
      { label: "Mobile Usage", value: "+40%" },
      { label: "Completion", value: "+25%" }
    ]
  }
];

export function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader 
          title="Selected Work" 
          subtitle="Deep dives into complex problems and the elegant solutions that solved them."
        />

        <div className="space-y-32">
          {cases.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[2rem] overflow-hidden bg-card border border-border shadow-xl shadow-black/5 aspect-[4/3] group">
                  <img 
                    src={`${import.meta.env.BASE_URL}${study.image}`}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-background border border-border text-xs font-semibold uppercase tracking-wider rounded-full text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-4">{study.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                  <span>{study.role}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{study.duration}</span>
                </div>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {study.metrics.map(metric => (
                    <div key={metric.label} className="bg-background rounded-xl p-4 border border-border">
                      <div className="text-2xl font-serif text-primary mb-1">{metric.value}</div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="rounded-full h-12 px-6 group">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
