import { portfolioData } from "@/data";
import {
  Code2,
  Database,
  Layers,
  Terminal,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile Development",
    icon: Layers,
    skills: [
      "React 19 & Next.js",
      "TypeScript",
      "Flutter (Dart)",
      "Tailwind CSS v4",
      "TanStack Query",
      "Radix / Shadcn UI",
    ],
  },
  {
    title: "Backend & API Engineering",
    icon: Database,
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
    title: "Cloud, DevOps & Infrastructure",
    icon: Terminal,
    skills: [
      "Docker & Nginx",
      "AWS (EC2)",
      "Cloudflare Tunneling",
      "Flyway Migrations",
      "CI / CD Pipelines",
      "Linux / Bash",
    ],
  },
];

export function About() {
  const { developer } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
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
          A background grounded in software engineering, practical problem-solving, and full-stack architecture.
        </p>
      </div>

      {/* Authentic Narrative (Reflecting CV Professional Summary) */}
      <div className="max-w-3xl mx-auto bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 rounded-2xl p-8 sm:p-10 shadow-sm mb-20 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
        <p>
          I am a motivated and adaptable <span className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</span> with hands-on experience building end-to-end applications across modern web and mobile frameworks, including <span className="font-semibold text-gray-900 dark:text-white">React, Next.js, Flutter, Spring Boot</span>, and <span className="font-semibold text-gray-900 dark:text-white">FastAPI</span>.
        </p>
        <p>
          With a strong foundation in software engineering, cloud deployments (AWS, Cloudflare), and database management, I have a proven track record of taking complex applications from concept to production. This includes developing a full-featured <span className="font-semibold text-gray-900 dark:text-white">Restaurant POS & QR Ordering System</span> with role-based access control, real-time ticket queues, and secure Cloudflare tunneling.
        </p>
        <p>
          I strive to combine technical skills, problem-solving abilities, and business acumen to deliver robust, scalable software solutions that solve real operational challenges.
        </p>

        <div className="pt-5 border-t border-gray-200/60 dark:border-gray-800/60 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm font-medium text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>End-to-End Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Robust Backend & APIs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Modern Web & Mobile</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-10">
          Skills & Tech Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 hover:border-blue-200 dark:hover:border-pink-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-pink-500/10 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 dark:from-pink-500/0 dark:to-fuchsia-500/0 dark:group-hover:from-pink-500/10 dark:group-hover:to-fuchsia-500/10 transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-pink-900/30 text-blue-600 dark:text-pink-400 border border-blue-100 dark:border-pink-800/50 group-hover:scale-110 transition-transform duration-300">
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
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/50 dark:bg-pink-950/40 dark:hover:bg-pink-900/60 dark:text-pink-300 dark:border-pink-800/40 transition-colors shadow-sm"
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
