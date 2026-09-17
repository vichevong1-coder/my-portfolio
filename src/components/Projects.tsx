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
          <div key={project.id} className="group relative flex flex-col justify-between p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="pt-8 mt-auto">
              <Link 
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all"
              >
                View Details
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
