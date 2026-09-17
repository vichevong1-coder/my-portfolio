import { portfolioData } from "@/data";
import { ArrowDown, FolderGit2, Mail, Sparkles } from "lucide-react";

interface HeroProps {
  name?: string;
  role?: string;
  bio?: string;
}

export function Hero({
  name = portfolioData.developer.name,
  role = portfolioData.developer.role,
  bio = portfolioData.developer.bio,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-purple-500/15 dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-purple-500/20 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900/80 mb-8 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for new opportunities</span>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <span className="text-gray-600 dark:text-gray-400">{role}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 mb-6">
          Building thoughtful web experiences & performant applications.
        </p>

        {/* Bio description */}
        <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          {bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-500/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FolderGit2 className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Tech Stack quick tags */}
        <div className="mt-16 pt-8 border-t border-gray-200/80 dark:border-gray-800/80 w-full max-w-xl flex flex-col items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Core Technologies</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 font-medium text-xs sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
