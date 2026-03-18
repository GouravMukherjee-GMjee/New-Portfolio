import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Layers } from "lucide-react";

export function DesignSystem() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-8">
              <Layers size={24} />
            </div>
            <SectionHeader 
              title="Building Systems, Not Just Screens." 
              subtitle="I champion design systems to ensure consistency, speed up development, and maintain high visual quality across enterprise products."
            />
            
            <ul className="space-y-6 mt-8">
              {[
                { title: "Scalable Architecture", desc: "Token-based systems that adapt to multi-brand platforms." },
                { title: "Figma Auto Layout Mastery", desc: "Building responsive, bulletproof components that actually work for designers." },
                { title: "Dev-Ready Handoffs", desc: "Aligning component names and properties directly with code (React/Tailwind)." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-secondary rounded-2xl border border-border inline-block">
              <p className="font-serif italic text-lg text-foreground">
                "Reduced design-to-dev handoff time by 40%, eliminated 200+ hours of redundant design work per quarter."
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10 rounded-full" />
            <img 
              src={`${import.meta.env.BASE_URL}images/design-system.png`}
              alt="Design System Components"
              className="w-full rounded-2xl shadow-2xl border border-border/50 bg-card p-2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
