import { portfolioData } from "@/data";
import { ArrowDown, FolderGit2, Smartphone, Terminal, Database, Code2, Server, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";

interface HeroProps {
  name?: string;
  role?: string;
  bio?: string;
}

export function Hero({
  role = portfolioData.developer.role,
}: HeroProps) {
  const project = portfolioData.projects[0]; // flagship project

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 lg:py-20 px-6 max-w-7xl mx-auto w-full"
    >
      {/* Background ambient lighting effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100 via-indigo-50 to-blue-50 dark:from-pink-900/20 dark:via-purple-900/10 dark:to-blue-900/20 rounded-full blur-3xl -z-10"
      />

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 w-full z-10">
        
        {/* Left Column: Intro */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15] break-words">
            Hi, I&apos;m Vichovong. <br />
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-pink-500 dark:to-purple-500">clean web apps</span> & reliable backends.
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            I&apos;m a {role.toLowerCase()} with a background in financial technology. I love creating practical web applications, dependable backend services, and interfaces people enjoy using.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700 shadow-lg shadow-blue-500/20 dark:shadow-pink-500/20 transition-all duration-200 hover:-translate-y-1"
            >
              <FolderGit2 className="w-5 h-5" />
              View My Work
              <ArrowDown className="w-4 h-4" />
            </Link>

            <a
              href={portfolioData.developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <Code2 className="w-5 h-5" />
              Source Code
            </a>
          </div>

          <div className="pt-4 flex items-center gap-6 text-gray-400 dark:text-gray-600">
             <Server className="w-6 h-6 hover:text-blue-500 dark:hover:text-pink-400 transition-colors" />
             <Database className="w-6 h-6 hover:text-blue-500 dark:hover:text-pink-400 transition-colors" />
             <ShieldCheck className="w-6 h-6 hover:text-blue-500 dark:hover:text-pink-400 transition-colors" />
             <Terminal className="w-6 h-6 hover:text-blue-500 dark:hover:text-pink-400 transition-colors" />
             <Smartphone className="w-6 h-6 hover:text-blue-500 dark:hover:text-pink-400 transition-colors" />
          </div>
        </div>

        {/* Right Column: Visual Preview */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
           <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="absolute top-0 left-0 w-full h-12 bg-white/80 dark:bg-black/80 backdrop-blur flex items-center px-6 border-b border-gray-200 dark:border-gray-800 z-10">
                <div className="flex gap-2 w-16">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                   <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100/50 dark:bg-gray-800/50 text-xs font-medium text-gray-500 dark:text-gray-400">
                     <span className="opacity-50">🔒</span> vongpos.com/admin
                   </div>
                </div>
                <div className="w-16"></div>
             </div>
             <div className="pt-12 aspect-[4/3] w-full">
               {project.screenshots?.[0] ? (
                 <SafeImage 
                    src={project.screenshots[0]} 
                    alt="Project Preview" 
                    className="w-full h-full object-cover object-left-top"
                    placeholderText="Preview"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">Preview</div>
               )}
             </div>
           </div>

           {/* Floating Mobile Card */}
           <div className="absolute -bottom-4 sm:-bottom-8 left-2 sm:-left-4 lg:-left-16 w-32 sm:w-48 aspect-[9/19] rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl shadow-blue-500/10 dark:shadow-pink-500/10 -rotate-6 hover:rotate-0 transition-transform duration-500 z-20 bg-black">
              {project.screenshots?.[2] && (
                 <SafeImage 
                    src={project.screenshots[2]} 
                    alt="Mobile Preview" 
                    className="w-full h-full object-cover"
                    placeholderText="Mobile"
                 />
              )}
           </div>
        </div>

      </div>
    </section>
  );
}
