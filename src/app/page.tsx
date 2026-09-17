import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative">
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">Portfolio</a>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block">About</a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} My Portfolio. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
