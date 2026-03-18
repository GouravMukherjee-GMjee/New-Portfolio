import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Users, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const metrics = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    value: "↑30%",
    label: "Task Efficiency",
    context: "FieldEquip FSM Dashboard"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    value: "↓25%",
    label: "Bounce Rate",
    context: "MarkersPro Assessment Flow"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    value: "↑25%",
    label: "Completion Rate",
    context: "Enterprise UX Redesign"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    {metrics[0].icon}
                  </div>
                  <h3 className="text-4xl font-serif mb-2">{metrics[0].value}</h3>
                  <p className="font-medium text-foreground">{metrics[0].label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{metrics[0].context}</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif mb-4 leading-snug">"Gourav has a rare ability to translate complex business rules into simple interfaces."</h3>
                    <p className="text-primary-foreground/70 text-sm">— Product Manager, FieldEquip</p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-10">
                    <ArrowUpRight size={120} />
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4 sm:mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    {metrics[1].icon}
                  </div>
                  <h3 className="text-4xl font-serif mb-2">{metrics[1].value}</h3>
                  <p className="font-medium text-foreground">{metrics[1].label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{metrics[1].context}</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    {metrics[2].icon}
                  </div>
                  <h3 className="text-4xl font-serif mb-2">{metrics[2].value}</h3>
                  <p className="font-medium text-foreground">{metrics[2].label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{metrics[2].context}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
