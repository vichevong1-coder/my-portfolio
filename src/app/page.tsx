import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative">
      <header className="fixed top-0 w-full z-50 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-b border-blue-500/20 dark:border-pink-500/20 shadow-[0_4px_30px_rgba(59,130,246,0.1)] dark:shadow-[0_4px_30px_rgba(236,72,153,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-pink-500 dark:to-purple-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)] hover:scale-105 transition-transform duration-300">Portfolio</a>
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-blue-500 dark:hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] dark:hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] transition-all duration-300 hidden sm:block">About</a>
            <a href="#projects" className="text-sm font-medium hover:text-blue-500 dark:hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] dark:hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] transition-all duration-300 hidden sm:block">Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-500 dark:hover:text-pink-500 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] dark:hover:drop-shadow-[0_0_5px_rgba(236,72,153,0.5)] transition-all duration-300 hidden sm:block">Contact</a>
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
      
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-blue-500/10 dark:border-pink-500/10 bg-white/30 dark:bg-black/30 backdrop-blur-md">
        <p className="hover:text-blue-500 dark:hover:text-pink-500 transition-colors duration-300">© {new Date().getFullYear()} My Portfolio. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
