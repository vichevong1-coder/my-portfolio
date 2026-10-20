import {
  Layers,
  Terminal,
  Server,
  Landmark,
  CheckCircle2,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Calendar,
  Cpu,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Server;
  iconBoxClasses: string;
  badgeClasses: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems Engineering",
    icon: Server,
    iconBoxClasses: "bg-blue-50 dark:bg-pink-900/30 text-blue-600 dark:text-pink-400 border-blue-100 dark:border-pink-800/50",
    badgeClasses: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200/50 dark:bg-pink-950/40 dark:hover:bg-pink-900/60 dark:text-pink-300 dark:border-pink-800/40",
    skills: [
      "Java 21 & Spring Boot",
      "FastAPI (Python)",
      "Node.js & Express",
      "PostgreSQL & Redis",
      "RESTful APIs",
      "Spring Security",
    ],
  },
  {
    title: "FinTech & Core Systems",
    icon: Landmark,
    iconBoxClasses: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50",
    badgeClasses: "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200/50 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 dark:text-emerald-300 dark:border-emerald-800/40",
    skills: [
      "Dual-Currency Settlement (USD/KHR)",
      "RBAC Security Models",
      "Audit Trails & Voids",
      "Dynamic Session States",
      "Transaction Integrity",
      "Pessimistic Concurrency Locking",
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    icon: Terminal,
    iconBoxClasses: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800/50",
    badgeClasses: "bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200/50 dark:bg-purple-950/40 dark:hover:bg-purple-900/60 dark:text-purple-300 dark:border-purple-800/40",
    skills: [
      "Docker & Nginx",
      "AWS (EC2)",
      "Cloudflare Tunneling",
      "Flyway Migrations",
      "CI / CD Pipelines",
      "Linux / Bash",
    ],
  },
  {
    title: "Frontend & Mobile Development",
    icon: Layers,
    iconBoxClasses: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/50",
    badgeClasses: "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200/50 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 dark:text-amber-300 dark:border-amber-800/40",
    skills: [
      "React 19 & Next.js",
      "TypeScript",
      "Flutter (Dart)",
      "Tailwind CSS v4",
      "TanStack Query",
      "Radix / Shadcn UI",
    ],
  },
];

const educationAndExperience = [
  {
    type: "education",
    title: "Bachelor's Degree in Financial & Technology",
    institution: "Acleda University of Business",
    period: "2023 – Present",
    statusBadge: "In Progress · Year 4",
    badgeClasses: "bg-blue-100/70 text-blue-800 border-blue-200/60 dark:bg-pink-950/60 dark:text-pink-300 dark:border-pink-800/50",
    iconBoxClasses: "bg-blue-50 dark:bg-pink-900/30 text-blue-600 dark:text-pink-400 border-blue-100 dark:border-pink-800/50",
    icon: GraduationCap,
    description:
      "Comprehensive academic training bridging software engineering principles with financial technology, accounting logic, and business systems.",
    points: [
      "Financial software systems, dual-currency accounting & currency exchange math",
      "Relational database design, indexing, and ACID transaction guarantees",
      "Enterprise systems architecture, business processes, and IT security governance",
    ],
  },
  {
    type: "experience",
    title: "IT Support Intern",
    institution: "Acleda Bank",
    period: "Jun 2026 – Present",
    statusBadge: "Enterprise Banking",
    badgeClasses: "bg-emerald-100/70 text-emerald-800 border-emerald-200/60 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/50",
    iconBoxClasses: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50",
    icon: Briefcase,
    description:
      "Hands-on technology infrastructure and operational support within one of Cambodia's premier commercial banking networks.",
    points: [
      "Enterprise workstation provisioning, secure OS configuration & domain deployment",
      "Local networking diagnostics, structured cabling, routing, and peripheral uptime",
      "Operational troubleshooting, hardware maintenance, and banking workstation support",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-4">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Engineering Scalable Systems from the Ground Up
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          A background grounded in software engineering, financial technology, and real-world system deployments.
        </p>
      </div>

      {/* Authentic Narrative */}
      <div className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 rounded-2xl p-8 sm:p-10 shadow-sm mb-16 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
        <p>
          I am an adaptable <span className="font-semibold text-gray-900 dark:text-white">Software Engineer</span> specializing in backend architecture, FinTech workflows, and resilient distributed services. Combining computer science fundamentals with academic training in Financial Technology (FinTech), I engineer systems designed to handle high operational throughput with transactional integrity.
        </p>
        <p>
          My engineering breadth bridges deep backend logic (<span className="font-semibold text-gray-900 dark:text-white">Java 21, Spring Boot, PostgreSQL</span>) with modern web interfaces (<span className="font-semibold text-gray-900 dark:text-white">React, Next.js, TypeScript</span>). In my flagship restaurant ordering & POS system, I implemented pessimistic concurrency locking for multi-guest sessions, dual-currency (USD/KHR) cash reconciliation, and zero-trust cloud tunneling.
        </p>
        <p>
          From enterprise banking IT infrastructure at <span className="font-semibold text-gray-900 dark:text-white">Acleda Bank</span> to building production-ready web platforms, I focus on solving complex business challenges with robust, maintainable architecture.
        </p>

        <div className="pt-5 border-t border-gray-200/60 dark:border-gray-800/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm font-medium text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Transactional Concurrency</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>FinTech & Dual-Currency</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Cloud & Resilient Ingress</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Modern Web & Systems UX</span>
          </div>
        </div>
      </div>

      {/* Education & Experience Subsection */}
      <div className="mb-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-pink-900/30 text-blue-700 dark:text-pink-300 border border-blue-100 dark:border-pink-800/50 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Background & Foundation</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Education & Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
            Bridging formal financial technology studies with real-world enterprise banking IT operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationAndExperience.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 hover:border-blue-300 dark:hover:border-pink-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-pink-500/10 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 dark:from-pink-500/0 dark:to-fuchsia-500/0 dark:group-hover:from-pink-500/10 dark:group-hover:to-fuchsia-500/10 transition-all duration-500 pointer-events-none" />

                {/* Animated top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-pink-500 dark:to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`p-3 rounded-xl border group-hover:scale-110 transition-transform duration-300 ${item.iconBoxClasses}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.badgeClasses}`}>
                      {item.statusBadge}
                    </span>
                  </div>

                  <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm font-semibold text-blue-600 dark:text-pink-400">
                    <span>{item.institution}</span>
                    <span className="text-gray-400 dark:text-gray-600 font-normal">·</span>
                    <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 font-normal text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800/60 space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Section (4-Pillar Grid) */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-pink-900/30 text-blue-700 dark:text-pink-300 border border-blue-100 dark:border-pink-800/50 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skills & Core Disciplines
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
            Technical proficiencies spanning backend architecture, financial systems, DevOps, and modern frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 hover:border-blue-300 dark:hover:border-pink-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-pink-500/10 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 dark:from-pink-500/0 dark:to-fuchsia-500/0 dark:group-hover:from-pink-500/10 dark:group-hover:to-fuchsia-500/10 transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl border group-hover:scale-110 transition-transform duration-300 ${category.iconBoxClasses}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-pink-300 transition-colors">
                      {category.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors shadow-sm ${category.badgeClasses}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
