import { portfolioData, ArchitectureHighlight } from "@/data";
import { 
  ArrowLeft, 
  Code, 
  CheckCircle2, 
  ShieldAlert, 
  Cpu, 
  ArrowRight,
  Server,
  Landmark,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserFlowVisualizer } from "@/components/UserFlowVisualizer";
import { SafeImage } from "@/components/SafeImage";
import { VideoShowcase } from "@/components/VideoShowcase";

const highlightCategoryConfig: Record<
  ArchitectureHighlight["category"],
  {
    icon: typeof Server;
    accentBadge: string;
    iconBoxClasses: string;
    badgeClasses: string;
    glowGradient: string;
    topBorder: string;
    titleHoverClasses: string;
  }
> = {
  backend: {
    icon: Server,
    accentBadge: "Core Backend",
    iconBoxClasses: "bg-blue-50 dark:bg-pink-900/30 text-blue-600 dark:text-pink-400 border-blue-100 dark:border-pink-800/50",
    badgeClasses: "bg-blue-100/70 text-blue-800 border-blue-200/60 dark:bg-pink-950/60 dark:text-pink-300 dark:border-pink-800/50",
    glowGradient: "from-blue-500/10 to-indigo-500/10 dark:from-pink-500/10 dark:to-purple-500/10",
    topBorder: "from-blue-500 to-indigo-500 dark:from-pink-500 dark:to-purple-500",
    titleHoverClasses: "group-hover:text-blue-600 dark:group-hover:text-pink-400",
  },
  fintech: {
    icon: Landmark,
    accentBadge: "Financial Systems",
    iconBoxClasses: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50",
    badgeClasses: "bg-emerald-100/70 text-emerald-800 border-emerald-200/60 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/50",
    glowGradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/10 dark:to-green-500/10",
    topBorder: "from-emerald-500 to-teal-500 dark:from-emerald-500 dark:to-green-500",
    titleHoverClasses: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  cloud: {
    icon: ShieldCheck,
    accentBadge: "Infra & Security",
    iconBoxClasses: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-800/50",
    badgeClasses: "bg-purple-100/70 text-purple-800 border-purple-200/60 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/50",
    glowGradient: "from-purple-500/10 to-indigo-500/10 dark:from-purple-500/10 dark:to-fuchsia-500/10",
    topBorder: "from-purple-500 to-indigo-500 dark:from-purple-500 dark:to-fuchsia-500",
    titleHoverClasses: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
  },
  frontend: {
    icon: Layers,
    accentBadge: "Systems UX",
    iconBoxClasses: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/50",
    badgeClasses: "bg-amber-100/70 text-amber-800 border-amber-200/60 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/50",
    glowGradient: "from-amber-500/10 to-orange-500/10 dark:from-amber-500/10 dark:to-rose-500/10",
    topBorder: "from-amber-500 to-orange-500 dark:from-amber-500 dark:to-rose-500",
    titleHoverClasses: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioData.projects.map(({ id }) => ({ id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200 dark:border-pink-500/20 shadow-sm transition-colors duration-300">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-pink-500 dark:to-purple-500 dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
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
            {project.repo && (
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-black/40 backdrop-blur-md text-gray-900 dark:text-white rounded-xl font-medium border border-gray-200 dark:border-pink-500/20 hover:border-blue-500/50 dark:hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105 shadow-sm"
              >
                <Code size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Cloudflare R2 Video Demo Showcase */}
        {(project.videos || project.videoUrl) && (
          <VideoShowcase videos={project.videos} fallbackUrl={project.videoUrl} />
        )}

        {/* Interactive User Flow Stepper */}
        {project.userFlows && project.userFlows.length > 0 && (
          <div className="mb-16">
            <UserFlowVisualizer flows={project.userFlows} />
          </div>
        )}

        {/* System Architecture & Engineering Highlights Bento */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 dark:bg-pink-500/10 text-blue-700 dark:text-pink-300 border border-blue-500/20 dark:border-pink-500/20 mb-3 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Multi-Disciplinary Engineering</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
                System Architecture & Engineering Highlights
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-1">
                A multi-role technical breakdown showcasing backend concurrency, financial accounting logic, cloud infrastructure, and operational UX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.architectureHighlights.map((item, idx) => {
                const config = highlightCategoryConfig[item.category] || highlightCategoryConfig.backend;
                const Icon = config.icon;
                return (
                  <div
                    key={idx}
                    className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-black/40 backdrop-blur-md border border-gray-200/80 dark:border-pink-500/20 shadow-md dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                  >
                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${config.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Animated top border */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.topBorder} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className={`p-3 rounded-2xl border group-hover:scale-110 transition-transform duration-300 ${config.iconBoxClasses}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.badgeClasses}`}>
                          {config.accentBadge}
                        </span>
                      </div>

                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${config.titleHoverClasses} transition-colors duration-300`}>
                        {item.pillar}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                        {item.tagline}
                      </p>

                      <ul className="mt-6 space-y-3 pt-5 border-t border-gray-100 dark:border-white/10">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
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
        )}

        {/* Engineering Challenges & Edge Cases */}
        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <div className="mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 dark:bg-pink-500/10 text-blue-700 dark:text-pink-300 border border-blue-500/20 dark:border-pink-500/20 mb-3 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all duration-300">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architecture & Reliability</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
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
                  className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-black/40 backdrop-blur-md border border-gray-200/80 dark:border-pink-500/20 shadow-md dark:shadow-pink-500/10 hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/15 group-hover:to-cyan-500/15 dark:group-hover:from-pink-500/15 dark:group-hover:to-purple-500/15 transition-all duration-500 pointer-events-none" />
                  
                  {/* Animated top border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-pink-500 dark:to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Big Number Watermark */}
                  <div className="absolute -right-4 -top-8 text-[120px] font-black text-gray-900/[0.04] dark:text-white/[0.05] pointer-events-none transition-transform duration-500 group-hover:scale-110">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 p-8 sm:p-10 rounded-3xl bg-white dark:bg-gray-900/40 border border-gray-200/80 dark:border-white/5 shadow-sm">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About the Project</h2>
            <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
              {project.summary}
            </div>
          </div>
          
          <div className="space-y-8">
            {project.roles && (
              <div>
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Supported Roles</h3>
                <ul className="space-y-3">
                  {project.roles.map(role => (
                    <li key={role} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
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
          <div id="interfaces" className="mb-16 space-y-8 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">Interface Showcase</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {project.screenshots.map((src, idx) => {
                const isMobileImage = src.includes("mobile");
                return (
                  <div key={idx} className={`rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-[0_8px_32px_rgba(59,130,246,0.1)] dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-[0_16px_48px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_16px_48px_rgba(236,72,153,0.2)] transition-all duration-500 ${isMobileImage ? 'md:col-span-1 md:w-2/3 mx-auto' : 'md:col-span-2'}`}>
                    <SafeImage 
                      src={src} 
                      alt={`Interface screenshot ${idx + 1}`} 
                      className="w-full h-auto"
                      placeholderText={`Screenshot Placeholder: Place ${src} in public folder.`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Architecture Diagram */}
        {project.architectureDiagram && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">System Architecture</h2>
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-black/40 backdrop-blur-md border border-gray-200/80 dark:border-pink-500/20 p-8 flex items-center justify-center shadow-md dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.3)] transition-all duration-500">
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
