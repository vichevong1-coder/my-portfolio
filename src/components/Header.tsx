"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Download, Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-extrabold tracking-tighter text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          {portfolioData.developer.name.split(' ').map(n => n[0]).join('')}
        </Link>
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="/#about" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-500 transition-colors">About</Link>
            <Link href="/#projects" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-500 transition-colors">Projects</Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-500 transition-colors">Contact</Link>
            
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>
            
            <a 
              href="/Nhor_Vichevong_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-lg hover:scale-105 transition-transform"
            >
              <Download size={16} />
              Resume
            </a>
          </nav>

          {/* GitHub Icon with WCAG 44x44px Tap Target */}
          <a 
            href={portfolioData.developer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Code2 size={20} />
          </a>

          <ThemeToggle />

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="sm:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-16 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/#about"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 text-base font-semibold text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#projects"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 text-base font-semibold text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 text-base font-semibold text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </Link>
          <div className="h-px bg-gray-200 dark:bg-gray-800 my-1" />
          <a
            href="/Nhor_Vichevong_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3.5 bg-blue-600 dark:bg-pink-600 text-white font-bold rounded-xl shadow-md active:scale-[0.98] transition-transform"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
