import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      
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
