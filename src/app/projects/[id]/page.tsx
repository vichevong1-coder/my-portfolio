import { portfolioData } from "@/data";
import { ArrowLeft, ExternalLink, Code, CheckCircle2, ShieldAlert, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserFlowVisualizer } from "@/components/UserFlowVisualizer";
import { SafeImage } from "@/components/SafeImage";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 w-full z-50 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-b border-blue-500/20 dark:border-pink-500/20 shadow-[0_4px_30px_rgba(59,130,246,0.1)] dark:shadow-[0_4px_30px_rgba(236,72,153,0.1)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 dark:hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] dark:hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] transition-all duration-300">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-pink-500 dark:to-purple-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-500/10 dark:bg-pink-500/10 text-blue-700 dark:text-pink-300 border border-blue-500/20 dark:border-pink-500/20 rounded-full text-sm font-medium hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 dark:bg-pink-600 dark:hover:bg-pink-500 text-white rounded-xl font-medium transition-all duration-300 shadow-md shadow-blue-500/20 dark:shadow-pink-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:scale-105"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.repo && (
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-black/40 backdrop-blur-md text-gray-900 dark:text-white rounded-xl font-medium border border-blue-500/20 dark:border-pink-500/20 hover:border-blue-500/50 dark:hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105"
              >
                <Code size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Cloudflare R2 Video Demo */}
        {project.videoUrl && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Live Demonstration</h2>
            <div className="rounded-3xl overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-md border border-blue-500/20 dark:border-pink-500/20 shadow-[0_8px_32px_rgba(59,130,246,0.1)] dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-500">
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Interactive User Flow Stepper */}
        {project.userFlows && project.userFlows.length > 0 && (
          <div className="mb-16">
            <UserFlowVisualizer flows={project.userFlows} />
          </div>
        )}

        {/* Engineering Challenges & Edge Cases */}
        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 dark:bg-pink-500/10 text-blue-700 dark:text-pink-300 border border-blue-500/20 dark:border-pink-500/20 mb-3 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all duration-300">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architecture & Reliability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
                Engineering Deep Dives & Edge Cases
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">
                Real-world operational vulnerabilities and how they were solved through robust system design.
              </p>
            </div>

            <div className="space-y-6">
              {project.engineeringChallenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="relative p-6 sm:p-8 rounded-3xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-blue-500/20 dark:border-pink-500/20 shadow-blue-500/10 dark:shadow-pink-500/10 hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/15 group-hover:to-cyan-500/15 dark:group-hover:from-pink-500/15 dark:group-hover:to-purple-500/15 transition-all duration-500 pointer-events-none" />
                  
                  {/* Animated top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-pink-500 dark:to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Big Number Watermark */}
                  <div className="absolute -right-4 -top-8 text-[120px] font-black text-blue-500/5 dark:text-pink-500/5 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                    0{idx + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 pr-12 group-hover:text-blue-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                      {challenge.title}
                    </h3>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Risk */}
                      <div className="flex-1 space-y-4 relative">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-pink-500">
                          <ShieldAlert className="w-4 h-4" />
                          <span>The Dilemma</span>
                        </div>
                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed border-l-2 border-blue-400 dark:border-pink-600 pl-5 py-2 font-medium whitespace-pre-line group-hover:border-blue-500 dark:group-hover:border-pink-500 transition-colors duration-300">
                          {challenge.problem}
                        </p>
                      </div>

                      {/* Divider with Arrow */}
                      <div className="hidden md:flex flex-col items-center justify-center text-gray-300 dark:text-gray-700">
                        <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-pink-400 group-hover:translate-x-2 transition-all duration-300" />
                      </div>

                      {/* Solution */}
                      <div className="flex-1 space-y-4 relative">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-purple-500">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Architectural Solution</span>
                        </div>
                        <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed border-l-2 border-cyan-400 dark:border-purple-600 pl-5 py-2 font-medium whitespace-pre-line group-hover:border-cyan-500 dark:group-hover:border-purple-500 transition-colors duration-300">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About the Project</h2>
            <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
              {project.summary}
            </div>
          </div>
          
          <div className="space-y-8">
            {project.roles && (
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Supported Roles</h3>
                <ul className="space-y-3">
                  {project.roles.map(role => (
                    <li key={role} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Screenshots Showcase */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Interface Showcase</h2>
            
            {project.screenshots.map((src, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-md border border-blue-500/20 dark:border-pink-500/20 p-2 shadow-[0_8px_32px_rgba(59,130,246,0.1)] dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-500">
                <div className="aspect-[4/3] relative flex items-center justify-center text-gray-500">
                  <SafeImage 
                    src={src} 
                    alt={`Interface screenshot ${idx + 1}`} 
                    className="w-full h-full object-cover rounded-2xl"
                    placeholderText={`Screenshot Placeholder: Place ${src} in public folder.`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture Diagram */}
        {project.architectureDiagram && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">System Architecture</h2>
            <div className="rounded-3xl overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-md border border-blue-500/20 dark:border-pink-500/20 p-8 flex items-center justify-center shadow-[0_8px_32px_rgba(59,130,246,0.1)] dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-500">
              <SafeImage 
                src={project.architectureDiagram} 
                alt="Architecture Diagram" 
                className="max-w-full rounded-2xl"
                placeholderText={`Architecture Diagram Placeholder: Place ${project.architectureDiagram} in public folder.`}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
