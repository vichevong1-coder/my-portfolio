import { ThemeToggle } from "@/components/ThemeToggle";
import { Download, Code2 } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-extrabold tracking-tighter text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          {portfolioData.developer.name.split(' ').map(n => n[0]).join('')}
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-500 transition-colors hidden sm:block">About</Link>
          <Link href="/#projects" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-500 transition-colors hidden sm:block">Projects</Link>
          <Link href="/#contact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-500 transition-colors hidden sm:block">Contact</Link>
          
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
          
          <a 
            href={portfolioData.developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Code2 size={20} />
          </a>
          
          <a 
            href="/Nhor_Vichevong_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-lg hover:scale-105 transition-transform"
          >
            <Download size={16} />
            Resume
          </a>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
