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
      className={`relative w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-95 ${className}`}
    >
      <Sun className="w-4 h-4 text-amber-400 absolute transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0" />
      <Moon className="w-4 h-4 text-indigo-500 absolute transition-all scale-100 dark:scale-0 rotate-0 dark:-rotate-90" />
    </button>
  );
}
