import { portfolioData } from "@/data";
import { ArrowRight, LayoutDashboard, Smartphone, Monitor } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const project = portfolioData.projects[0]; // Focused on the flagship case study

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Featured Case Study</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-pink-600 dark:to-fuchsia-600 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">
        {/* Left Side: 40% Text Content */}
        <div className="lg:w-[45%] flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-pink-900/30 text-blue-700 dark:text-pink-300 text-sm font-bold tracking-wide">
              <span>Flagship Project</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {project.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6">
             <Link
              href={`/projects/${project.id}#demo`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-pink-500/30 hover:-translate-y-1 w-full sm:w-auto group"
            >
              Read Full Case Study
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side: 55% Visual Showcase (Bento Grid) */}
        <div className="lg:w-[55%] order-1 lg:order-2 grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Main Screenshot - Admin Menu Items */}
          <div className="aspect-video md:col-span-8 md:col-start-1 md:row-start-1 relative rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-white/10 shadow-2xl group bg-gray-50 dark:bg-gray-900">
             {project.screenshots?.[0] && (
               <div className="w-full h-full relative">
                 <img src={project.screenshots[0]} alt="Admin Dashboard" className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-bold text-lg flex items-center gap-2 mb-1"><LayoutDashboard size={20}/> Admin Dashboard</span>
                      <p className="text-gray-300 text-sm">Managing the menu and categories.</p>
                    </div>
                 </div>
               </div>
             )}
          </div>

          {/* Secondary Screenshot - Cashier Tables */}
          <div className="aspect-video md:col-span-8 md:col-start-1 md:row-start-2 relative rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-white/10 shadow-lg group bg-gray-50 dark:bg-gray-900">
             {project.screenshots?.[1] && (
               <div className="w-full h-full relative">
                 <img src={project.screenshots[1]} alt="Cashier Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <span className="text-white font-bold flex flex-col items-center gap-2"><Monitor size={24}/> Cashier Overview</span>
                 </div>
               </div>
             )}
          </div>

          {/* Tertiary Screenshot - Mobile Ordering */}
          <div className="aspect-[576/1246] w-full max-w-72 justify-self-center md:col-span-4 md:col-start-9 md:row-start-1 md:row-span-2 md:aspect-auto md:h-full md:max-w-none relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group bg-gray-50 dark:bg-gray-900">
             {project.screenshots?.[2] && (
               <div className="w-full h-full relative">
                 <img src={project.screenshots[2]} alt="Mobile Ordering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white font-bold text-lg flex items-center gap-2 mb-1"><Smartphone size={20}/> Guest Mobile UI</span>
                      <p className="text-gray-300 text-sm">Zero-install QR ordering.</p>
                    </div>
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
