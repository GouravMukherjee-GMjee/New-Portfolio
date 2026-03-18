import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-20 mt-32 rounded-t-[2.5rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight">
              Ready to create something <span className="italic text-muted-foreground">exceptional?</span>
            </h2>
            <p className="text-muted-foreground max-w-sm mb-8">
              Open to Senior UX/Product Designer roles, freelance collaborations, and consulting.
            </p>
            <a 
              href="mailto:gourav.mukherjee@email.com" 
              className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
            >
              gourav.mukherjee@email.com
            </a>
          </div>
          
          <div className="flex md:justify-end">
            <div className="space-y-6">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Socials</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-muted-foreground transition-colors">
                    LinkedIn <ArrowUpRight size={16} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-muted-foreground transition-colors">
                    Dribbble <ArrowUpRight size={16} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 hover:text-muted-foreground transition-colors">
                    Twitter <ArrowUpRight size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gourav Mukherjee. Crafted with intention.</p>
          <div className="flex items-center gap-1">
            <span>Designed in Figma</span> • <span>Built with React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
