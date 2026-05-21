import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portfolioEasing } from "@/lib/motion";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  domain: string;
  accentBorder: string;
  accentBadge: string;
  accentText: string;
  heroImage: string;
  gallery: string[];
  problem: string;
  research: { title: string; points: string[] };
  solution: { intro: string; features: { heading: string; points: string[] }[] };
  impact: string[];
}

const projects: Project[] = [
  {
    id: "school",
    title: "School Operation Manager",
    subtitle: "Centralised academic & administrative platform",
    domain: "EdTech",
    accentBorder: "border-l-violet-400",
    accentBadge: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
    accentText: "text-violet-600 dark:text-violet-400",
    tags: ["EdTech", "SaaS", "Multi-Role", "Web"],
    heroImage: "images/projects/school-dashboard.png",
    gallery: [
      "images/projects/school-dashboard.png",
      "images/projects/school-students.png",
      "images/projects/school-timetable.png",
    ],
    problem:
      "Schools were managing academic, administrative, and communication workflows across disconnected systems — manual records, spreadsheets, and offline processes — leading to inefficiencies, data inconsistencies, and poor visibility for teachers, students, and parents.",
    research: {
      title: "Stakeholder interviews with administrators, teachers, and parents revealed:",
      points: [
        "Manual attendance and grading processes caused daily delays",
        "No centralized student data — information was scattered across departments",
        "Inefficient parent-teacher communication with no real-time updates",
        "Competitive analysis of existing school ERPs showed overly complex interfaces and low adoption rates",
      ],
    },
    solution: {
      intro: "Designed a centralised School Management System with role-based experiences:",
      features: [
        {
          heading: "Role-Based Dashboards",
          points: ["Admin, Teacher, Student & Parent portals", "Tailored data views per role"],
        },
        {
          heading: "Academic Operations",
          points: ["Attendance & performance tracking", "Timetable and exam scheduling"],
        },
        {
          heading: "Communication & Finance",
          points: ["Real-time notifications between school and parents", "Fee management with automated reminders"],
        },
      ],
    },
    impact: [
      "Reduced administrative workload by ~40%",
      "Improved parent-teacher communication and engagement",
      "Increased data accuracy and real-time visibility across departments",
      "Faster decision-making with centralised reporting dashboards",
    ],
  },
  {
    id: "medicare",
    title: "Madicare",
    subtitle: "Multi-role healthcare ecosystem",
    domain: "Healthcare",
    accentBorder: "border-l-emerald-400",
    accentBadge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    accentText: "text-emerald-600 dark:text-emerald-400",
    tags: ["Healthcare", "SaaS", "Multi-Role", "Web"],
    heroImage: "images/projects/medicare-patient.png",
    gallery: [
      "images/projects/medicare-patient.png",
      "images/projects/medicare-find-doctors.png",
      "images/projects/medicare-doctor.png",
    ],
    problem:
      "Healthcare services were fragmented across hospitals, clinics, and pharmacies. Patients faced difficulties booking appointments, managing prescriptions, accessing doctors across locations, and maintaining a centralised medical history.",
    research: {
      title: "User interviews with patients, doctors, and pharmacists surfaced:",
      points: [
        "Difficulty finding available doctors by location and specialty",
        "No centralised medical history — patients repeated information at every visit",
        "Manual prescription handling led to errors and delays",
        "Inefficient appointment rescheduling with no automated notifications",
        "Cross-role integration gaps found in competitive healthcare platforms",
      ],
    },
    solution: {
      intro: "Designed Madicare — a unified, multi-role healthcare ecosystem:",
      features: [
        {
          heading: "Patient Experience",
          points: [
            "Book appointments by date, time, and location",
            "Home visit consultations with additional charges",
            "Access complete medical history and prescriptions",
          ],
        },
        {
          heading: "Doctor & Pharmacy Portals",
          points: [
            "Doctors: manage availability, add prescriptions to patient profiles",
            "Pharmacies: access prescriptions via unique codes, auto-generate billing",
          ],
        },
        {
          heading: "Advanced Features",
          points: [
            "Ambulance booking system",
            "Global appointment booking (country / state / city level)",
            "Real-time notifications for all updates",
          ],
        },
      ],
    },
    impact: [
      "Improved patient experience with seamless end-to-end healthcare access",
      "Reduced prescription errors through digital records",
      "Increased operational efficiency for doctors and pharmacies",
      "Enabled complete healthcare journey within a single platform",
    ],
  },
  {
    id: "hr",
    title: "HR Portal",
    subtitle: "End-to-end HR management system",
    domain: "HR Tech",
    accentBorder: "border-l-amber-400",
    accentBadge: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    accentText: "text-amber-600 dark:text-amber-400",
    tags: ["Enterprise", "SaaS", "HR Tech", "Web"],
    heroImage: "images/projects/hr-dashboard.png",
    gallery: [
      "images/projects/hr-dashboard.png",
      "images/projects/hr-login.png",
      "images/projects/hr-table.png",
    ],
    problem:
      "HR teams were managing recruitment, employee data, and internal communication using multiple disconnected tools, causing delays, poor candidate experience, and a lack of transparency across the employee lifecycle.",
    research: {
      title: "Interviews with HR professionals and employees revealed:",
      points: [
        "Manual recruitment tracking with no pipeline visibility",
        "Poor onboarding experience — missing documents, unclear steps",
        "Lack of employee self-service features caused repeated HR queries",
        "Benchmarked modern HR tools to identify usability and automation gaps",
      ],
    },
    solution: {
      intro: "Designed a comprehensive HR Management Portal:",
      features: [
        {
          heading: "Recruitment & Onboarding",
          points: [
            "Recruitment pipeline with candidate tracking",
            "Structured onboarding and document management",
          ],
        },
        {
          heading: "People Operations",
          points: [
            "Leave and attendance management",
            "Performance tracking and appraisal module",
          ],
        },
        {
          heading: "Employee Self-Service",
          points: [
            "Personal dashboard for leave, documents, and payroll",
            "Internal communication and company announcements",
          ],
        },
      ],
    },
    impact: [
      "Reduced hiring cycle time significantly through pipeline automation",
      "Improved onboarding experience and employee satisfaction scores",
      "Streamlined HR operations, eliminating redundant manual processes",
      "Increased transparency in performance management and appraisals",
    ],
  },
  {
    id: "jobsearch",
    title: "Job Search & Professional Networking",
    subtitle: "All-in-one jobs + networking + growth platform",
    domain: "Product Design",
    accentBorder: "border-l-sky-400",
    accentBadge: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
    accentText: "text-sky-600 dark:text-sky-400",
    tags: ["Product Design", "SaaS", "B2C", "Web"],
    heroImage: "images/projects/jobsearch-dashboard.png",
    gallery: ["images/projects/jobsearch-dashboard.png"],
    problem:
      "Job seekers struggled with fragmented job discovery, no direct communication with recruiters, and no structured way to track applications or build professional visibility on existing platforms.",
    research: {
      title: "User interviews with job seekers and recruiters uncovered:",
      points: [
        "Users want better filtering and personalisation in job search",
        "No transparency in application status — silence after applying",
        "Strong demand for a combined networking + job platform",
        "Competitive analysis of LinkedIn and Indeed identified engagement and UX gaps",
      ],
    },
    solution: {
      intro: "Designed a Job Search + Networking Ecosystem:",
      features: [
        {
          heading: "Core Job Features",
          points: [
            "Advanced search with multi-level filters",
            "Application tracking dashboard",
            "Direct chat with HR / recruiters",
          ],
        },
        {
          heading: "Gamified Networking",
          points: [
            "Connection tiers (Level 1 → Platinum) based on engagement",
            "Points for connections, likes, and comments",
            "Rewards: subscription discounts and visibility boosts",
          ],
        },
        {
          heading: "AI & Growth Features",
          points: [
            "AI-driven job and tech recommendations",
            "Social feed with posts, likes, and comments",
            "HR dashboard to post jobs and manage candidates",
          ],
        },
      ],
    },
    impact: [
      "Increased user engagement through gamification mechanics",
      "Improved application transparency for job seekers",
      "Higher recruiter-user interaction rates",
      "Built an all-in-one platform combining jobs + networking + career growth",
    ],
  },
  {
    id: "health",
    title: "Health Tracking",
    subtitle: "Cross-device health monitoring platform (Web + Mobile)",
    domain: "HealthTech",
    accentBorder: "border-l-rose-400",
    accentBadge: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
    accentText: "text-rose-600 dark:text-rose-400",
    tags: ["HealthTech", "Web + Mobile", "B2C", "Responsive"],
    heroImage: "images/projects/health-dashboard.png",
    gallery: ["images/projects/health-dashboard.png"],
    problem:
      "Users struggled to consistently track their health metrics across multiple devices and apps. The experience was fragmented, data was inconsistent, and there was no unified view of personal health insights — leading to low engagement and drop-offs.",
    research: {
      title: "Interviews with fitness enthusiasts and general users revealed:",
      points: [
        "Users switch between mobile and web but expect a seamless, unified experience",
        "Manual data entry reduces consistency and long-term engagement",
        "Users prefer visual insights over raw data tables",
        "Reviewed Google Fit and Apple Health to identify usability gaps",
        "Most tools lacked personalisation and cross-device continuity",
      ],
    },
    solution: {
      intro: "Designed a responsive Health Tracking platform (Web + Mobile) with a consistent experience:",
      features: [
        {
          heading: "Core Tracking Features",
          points: [
            "Unified dashboard: steps, calories, sleep, and heart rate",
            "Cross-device synchronisation (mobile ↔ web)",
            "Manual and automated data entry support",
          ],
        },
        {
          heading: "Insights & Goals",
          points: [
            "Visual analytics with charts and progress tracking",
            "Personalised health recommendations",
            "Goal setting with progress indicators and daily/weekly/monthly views",
          ],
        },
        {
          heading: "Advanced Features",
          points: [
            "Smart notifications for activity reminders",
            "Integration-ready architecture for wearables",
            "Dark / light mode for accessibility",
          ],
        },
      ],
    },
    impact: [
      "Increased user engagement and long-term retention",
      "Improved consistency in health tracking behaviour",
      "Reduced friction when switching between devices",
      "Enhanced decision-making through clear, actionable data visualisation",
    ],
  },
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className={`border border-border border-l-4 ${project.accentBorder} rounded-2xl overflow-hidden bg-card`}
    >
      {/* ── Collapsed header ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group"
      >
        <div className="flex items-center justify-between px-6 py-5 gap-4">
          {/* Left: index + info */}
          <div className="flex items-start gap-5 min-w-0 flex-1">
            {/* Index badge */}
            <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold font-serif ${project.accentBadge}`}>
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${project.accentBadge}`}>
                  {project.domain}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5 mb-2">{project.subtitle}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-semibold uppercase tracking-wider rounded-full border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image thumbnail + chevron */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:block w-24 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}${project.heroImage}`}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>
        </div>
      </button>

      {/* ── Expanded content ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: portfolioEasing }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 border-t border-border bg-secondary/20">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pt-8">

                {/* Left: image gallery (2 cols) */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="rounded-xl overflow-hidden border border-border aspect-[4/3] bg-muted">
                    <img
                      src={`${import.meta.env.BASE_URL}${project.gallery[activeImage]}`}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {project.gallery.length > 1 && (
                    <div className="flex gap-2">
                      {project.gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`flex-1 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                            activeImage === i
                              ? "border-primary opacity-100"
                              : "border-border opacity-50 hover:opacity-80"
                          }`}
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}${img}`}
                            alt={`Screen ${i + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: case study (3 cols) */}
                <div className="lg:col-span-3 space-y-6">

                  {/* Problem */}
                  <div>
                    <SectionLabel label="Problem" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Research */}
                  <div>
                    <SectionLabel label="Research" />
                    <p className="text-sm text-muted-foreground mb-3">{project.research.title}</p>
                    <ul className="space-y-2">
                      {project.research.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <ArrowRight size={13} className={`flex-shrink-0 mt-0.5 ${project.accentText}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <SectionLabel label="Solution" />
                    <p className="text-sm text-muted-foreground mb-4">{project.solution.intro}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.solution.features.map((f, i) => (
                        <div key={i} className="bg-card rounded-xl p-4 border border-border">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">{f.heading}</h5>
                          <ul className="space-y-1">
                            {f.points.map((p, j) => (
                              <li key={j} className="text-xs text-muted-foreground flex gap-1.5">
                                <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${project.accentText} opacity-60`} style={{ background: "currentColor" }} />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <SectionLabel label="Impact" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex gap-2.5 items-start bg-card border border-border rounded-xl p-3">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-emerald-500" />
                          <span className="text-xs text-foreground leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function PersonalProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <SectionHeader
          title="Personal Projects"
          subtitle="Self-initiated case studies — from problem discovery to shipped design, following a research-led process."
          alignment="left"
        />

        <div className="mt-12 space-y-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
