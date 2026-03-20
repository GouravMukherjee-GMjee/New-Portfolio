import { Linkedin, Mail, Phone, ArrowUpRight, ArrowUp, GitMerge } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gourav-mukherjee-710503207",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:gouravmukherjee1907@gmail.com",
    icon: Mail,
  },
  {
    label: "+91 79923 12865",
    href: "tel:+917992312865",
    icon: Phone,
  },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative mt-0 overflow-hidden"
      style={{ background: "hsl(220 25% 7%)" }}
    >
      {/* ── Subtle top accent line ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* ── Decorative background orb ── */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12 border-b border-white/10">

          {/* Brand column — 5 cols */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo mark */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <GitMerge size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-none">GMux</p>
                <p className="text-white/40 text-xs mt-0.5">Multi-Experience. One Identity.</p>
              </div>
            </div>

            {/* Name + title */}
            <div>
              <h3 className="text-white text-xl font-serif font-medium leading-snug">
                Gourav Mukherjee
              </h3>
              <p className="text-white/50 text-sm mt-1">Senior UI/UX & Product Designer</p>
            </div>

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-xs font-medium">Available for Opportunities</span>
            </div>

            {/* Short tagline */}
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Specializing in enterprise SaaS, Field Service Management,
              and EdTech — from research to pixel-perfect delivery.
            </p>
          </div>

          {/* Navigation column — 3 cols */}
          <div className="md:col-span-3">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200 group flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column — 4 cols */}
          <div className="md:col-span-4">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">Get in Touch</p>
            <ul className="space-y-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 group-hover:border-white/20 transition-all">
                      <Icon size={14} />
                    </span>
                    <span className="text-sm">{label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-60 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 ml-auto"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA nudge */}
            <a
              href="mailto:gouravmukherjee1907@gmail.com"
              className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[hsl(220_25%_7%)] text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              <Mail size={14} />
              Send a message
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Gourav Mukherjee. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-white/30 text-xs">
              Designed in Figma&nbsp;&nbsp;·&nbsp;&nbsp;Built with React
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
