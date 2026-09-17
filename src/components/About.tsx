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
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive Design",
      "State Management",
      "UI/UX Design",
    ],
  },
  {
    title: "Backend & Systems",
    icon: Database,
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "RESTful APIs",
      "Authentication / OAuth",
      "Serverless Functions",
      "WebSockets",
    ],
  },
  {
    title: "Workflow & Tooling",
    icon: Terminal,
    skills: [
      "Git & GitHub",
      "Docker",
      "Vercel Deployment",
      "CI / CD Pipelines",
      "Turbopack",
      "Testing & Linting",
      "Performance Tuning",
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
              className="p-6 rounded-2xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800/80 transition-all hover:border-gray-300 dark:hover:border-gray-700 shadow-xs"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {item.number}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mt-1 text-base">
                {item.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {item.detail}
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
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/80 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200/50 dark:border-gray-700/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
