import { portfolioData } from "@/data";
import { ArrowLeft, ExternalLink, Code, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Navbar for Detail Page */}
      <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-blue-500 transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Code size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Cloudflare R2 Video Demo */}
        {project.videoUrl && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Live Demonstration</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
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

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">About the Project</h2>
            <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
              {project.summary}
            </div>
          </div>
          
          <div className="space-y-8">
            {project.roles && (
              <div>
                <h3 className="text-lg font-bold mb-4">Supported Roles</h3>
                <ul className="space-y-3">
                  {project.roles.map(role => (
                    <li key={role} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle2 size={18} className="text-green-500" />
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
          <div className="mb-16 space-y-12">
            <h2 className="text-2xl font-bold">Interface Showcase</h2>
            
            {project.screenshots.map((src, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-2">
                <div className="aspect-[4/3] relative flex items-center justify-center text-gray-500">
                  {/* Next.js Image component would go here. For now, an img tag or placeholder text. */}
                  {/* You should place your actual screenshots in the public/screenshots folder. */}
                  <img 
                    src={src} 
                    alt={`Interface screenshot ${idx + 1}`} 
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      // Fallback placeholder if image doesn't exist yet
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent && !parent.querySelector('p')) {
                        const p = document.createElement('p');
                        p.textContent = `Screenshot Placeholder: Place ${src} in public folder.`;
                        parent.appendChild(p);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture Diagram */}
        {project.architectureDiagram && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 flex items-center justify-center">
              <img 
                  src={project.architectureDiagram} 
                  alt="Architecture Diagram" 
                  className="max-w-full rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent && !parent.querySelector('p')) {
                      const p = document.createElement('p');
                      p.textContent = `Architecture Diagram Placeholder: Place ${project.architectureDiagram} in public folder.`;
                      parent.appendChild(p);
                    }
                  }}
                />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
