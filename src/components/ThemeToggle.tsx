"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  
  // Default to dark mode for the icon if unresolved to prevent empty boxes
  const isDark = resolvedTheme === "dark" || resolvedTheme === undefined;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`relative w-10 h-10 flex items-center justify-center rounded-xl border border-blue-500/30 dark:border-pink-500/30 bg-blue-50/50 dark:bg-black/50 hover:bg-blue-100/50 dark:hover:bg-pink-950/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] text-blue-600 dark:text-pink-500 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-pink-500/50 active:scale-95 ${className}`}
    >
      <Sun className="w-5 h-5 absolute transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
      <Moon className="w-5 h-5 absolute transition-all scale-100 dark:scale-0 rotate-0 dark:-rotate-90 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
    </button>
  );
}
