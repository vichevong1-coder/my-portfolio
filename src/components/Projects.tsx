"use client";

import { portfolioData } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project) => (
          <Link 
            href={`/projects/${project.id}`}
            key={project.id} 
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200/80 dark:border-white/5 hover:border-blue-200 dark:hover:border-pink-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-pink-500/10 hover:-translate-y-1 overflow-hidden block focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-pink-500/50"
          >
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 dark:from-pink-500/0 dark:to-fuchsia-500/0 dark:group-hover:from-pink-500/10 dark:group-hover:to-fuchsia-500/10 transition-all duration-500 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold group-hover:text-blue-700 dark:group-hover:text-pink-300 transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-pink-900/30 text-blue-700 dark:text-pink-300 border border-blue-100 dark:border-pink-800/50 rounded-full text-xs font-semibold shadow-sm group-hover:bg-blue-100 dark:group-hover:bg-pink-900/50 transition-colors">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-3 py-1 bg-blue-50 dark:bg-pink-900/30 text-blue-700 dark:text-pink-300 border border-blue-100 dark:border-pink-800/50 rounded-full text-xs font-semibold shadow-sm group-hover:bg-blue-100 dark:group-hover:bg-pink-900/50 transition-colors">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-auto">
              <span className="inline-flex items-center gap-2 text-blue-600 dark:text-pink-400 font-semibold group-hover:gap-3 transition-all">
                View Details
                <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
