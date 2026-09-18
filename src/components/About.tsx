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
    title: "Frontend Engineering",
    icon: Layers,
    skills: [
      "Next.js & React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "TanStack Query",
      "React Hook Form",
      "Shadcn UI",
      "Framer Motion",
      "Vite & Turbopack",
    ],
  },
  {
    title: "Backend & AI Systems",
    icon: Database,
    skills: [
      "Java 21 & Spring Boot",
      "FastAPI (Python)",
      "PostgreSQL & Qdrant",
      "Redis & WebSockets",
      "Spring Security",
      "RESTful APIs",
      "LangGraph",
      "Microservices",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Terminal,
    skills: [
      "AWS",
      "Docker & Nginx",
      "CI / CD Pipelines",
      "Flyway Migrations",
      "Testcontainers",
      "Twilio API",
      "Bucket4j (Rate Limiting)",
      "Linux / Bash",
    ],
  },
];

const highlights = [
  {
    number: "4+",
    label: "Years of Experience",
    detail: "Building scalable web products",
  },
  {
    number: "20+",
    label: "Projects Delivered",
    detail: "From MVP to production apps",
  },
  {
    number: "99.9%",
    label: "Focus on Quality",
    detail: "Accessibility, performance, & UX",
  },
];

export function About() {
  const { developer } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-4">
          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Crafting digital products with passion & purpose
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Get to know more about my background, technical philosophy, and the tools I use to bring ideas to life.
        </p>
      </div>

      {/* Grid: Background Story & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
          <p>
            Hello! I&apos;m <span className="font-semibold text-gray-900 dark:text-white">{developer.name}</span>, a{" "}
            <span className="font-semibold text-gray-900 dark:text-white">{developer.role}</span>. My journey into software development started with a curiosity for how complex systems operate behind intuitive, beautiful interfaces.
          </p>
          <p>
            Over the years, I&apos;ve worked across modern web architectures, focusing on building high-performance applications with React, Next.js, and TypeScript. I take pride in writing clean, well-tested, and maintainable code that delivers exceptional user experiences.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring emerging open-source technologies, refining design systems, or mentoring fellow developers in the community.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Full-Stack Architecture</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Responsive & Accessible UI</span>
            </div>
          </div>
        </div>

        {/* Highlights Stats */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group relative p-6 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 hover:border-blue-200 dark:hover:border-pink-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-pink-500/10 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 dark:from-pink-500/0 dark:to-fuchsia-500/0 dark:group-hover:from-pink-500/10 dark:group-hover:to-fuchsia-500/10 transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-pink-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white mt-1 text-base group-hover:text-blue-700 dark:group-hover:text-pink-300 transition-colors">
                  {item.label}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
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
