import { portfolioData } from "@/data";
import { Mail, ArrowUpRight, MessageSquare, Send } from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.74 8.21c-.13.58-.48.72-.97.45l-2.67-1.97-1.29 1.24c-.14.14-.26.26-.54.26l.19-2.73 4.97-4.49c.22-.19-.05-.3-.34-.11l-6.14 3.86-2.65-.83c-.58-.18-.59-.58.12-.86l10.35-3.99c.48-.18.9.11.75.83z" />
    </svg>
  );
}

export function Contact() {
  const { developer } = portfolioData;

  const contactMethods = [
    {
      name: "Email",
      value: developer.email,
      href: `mailto:${developer.email}`,
      icon: Mail,
      description: "Direct email for inquiries & proposals",
      isExternal: false,
    },
    {
      name: "GitHub",
      value: developer.github.replace("https://", ""),
      href: developer.github,
      customIcon: GithubIcon,
      description: "Explore my open-source repositories & code",
      isExternal: true,
    },
    {
      name: "LinkedIn",
      value: developer.linkedin.replace("https://", ""),
      href: developer.linkedin,
      customIcon: LinkedinIcon,
      description: "Connect professionally and see endorsements",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
          <span>Contact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Let&apos;s build something great together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Whether you have a specific project in mind, want to explore collaboration opportunities, or simply want to chat tech, I&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          const CustomIcon = method.customIcon;
          return (
            <a
              key={method.name}
              href={method.href}
              target={method.isExternal ? "_blank" : undefined}
              rel={method.isExternal ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:border-blue-500/50 dark:hover:border-pink-500/50 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 group-hover:bg-blue-50 dark:group-hover:bg-pink-950/50 group-hover:text-blue-600 dark:group-hover:text-pink-400 transition-colors">
                    {Icon && <Icon className="w-5 h-5" />}
                    {CustomIcon && <CustomIcon className="w-5 h-5" />}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {method.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {method.description}
                </p>
              </div>

              <div className="text-sm font-medium text-blue-600 dark:text-pink-400 truncate group-hover:underline">
                {method.value}
              </div>
            </a>
          );
        })}
      </div>

      {/* Direct CTA Box */}
      <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border border-sky-100 dark:border-gray-800 text-center flex flex-col items-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Prefer a quick chat?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm sm:text-base mb-6">
          Drop me a message on Telegram for the fastest response. I typically reply within a few hours.
        </p>
        <a
          href={developer.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-sky-500 hover:bg-sky-600 dark:bg-sky-500 dark:hover:bg-sky-600 shadow-md shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <TelegramIcon className="w-5 h-5" />
          <span>Message on Telegram ({developer.telegramUsername})</span>
        </a>
      </div>
    </section>
  );
}
