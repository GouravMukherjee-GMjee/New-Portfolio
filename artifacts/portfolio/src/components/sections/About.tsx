import { motion } from "framer-motion";
import { BarChart3, Users, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const metrics = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    value: "↑30%",
    label: "User Engagement",
    context: "MarkersPro EdTech Platform"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    value: "↓25%",
    label: "Bounce Rate",
    context: "MarkersPro Navigation Redesign"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    value: "↑25%",
    label: "Task Completion",
    context: "FieldEquip FSM Platform"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeader 
              title="Driven by impact, rooted in empathy." 
            />
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                I am a product designer who thrives at the intersection of complex system requirements and human needs. Over the past 5 years, I've specialized in untangling dense workflows in Enterprise SaaS, turning them into experiences that actually save users time.
              </p>
              <p>
                My process isn't just about making things look pretty—it's about measurable outcomes. I rely heavily on user research, data analytics, and iterative prototyping to validate decisions before they ever hit a developer's desk.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-3">
              {['SaaS & Enterprise UX', 'Field Service Management', 'EdTech Platforms', 'Design Systems'].map((area) => (
                <span key={area} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg border border-border/50">
                  {area}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif mb-1">{metric.value}</h3>
                    <p className="font-medium text-foreground text-sm">{metric.label}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-snug">{metric.context}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
