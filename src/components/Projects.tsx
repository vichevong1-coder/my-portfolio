import { portfolioData } from "@/data";
import { 
  ArrowRight, 
  LayoutDashboard, 
  Smartphone, 
  Monitor, 
  Landmark, 
  Server, 
  Code, 
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  QrCode,
  PackageCheck,
  Database
} from "lucide-react";
import Link from "next/link";

export function Projects() {
  const [restaurantProject, bankProject, shopProject] = portfolioData.projects;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-32">
      <div>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Featured Case Studies</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-pink-600 dark:to-fuchsia-600 rounded-full" />
        </div>

        {/* Project 1: Restaurant POS */}
        {restaurantProject && (
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">
            {/* Left Side: 45% Text Content */}
            <div className="lg:w-[45%] flex flex-col justify-center space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-pink-900/30 text-blue-700 dark:text-pink-300 text-sm font-bold tracking-wide">
                  <span>Flagship Production System</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {restaurantProject.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {restaurantProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {restaurantProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={`/projects/${restaurantProject.id}#demo`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-pink-500/30 hover:-translate-y-1 w-full sm:w-auto group"
                >
                  Read Full Case Study
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side: 55% Visual Showcase (Bento Grid) */}
            <div className="lg:w-[55%] order-1 lg:order-2 grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Main Screenshot - Admin Menu Items */}
              <div className="aspect-video md:col-span-8 md:col-start-1 md:row-start-1 relative rounded-3xl overflow-hidden border-2 border-gray-100 dark:border-white/10 shadow-2xl group bg-gray-50 dark:bg-gray-900">
                {restaurantProject.screenshots?.[0] && (
                  <div className="w-full h-full relative">
                    <img src={restaurantProject.screenshots[0]} alt="Admin Dashboard" className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white font-bold text-lg flex items-center gap-2 mb-1"><LayoutDashboard size={20}/> Admin Dashboard</span>
                        <p className="text-gray-300 text-sm">Managing the menu and categories.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Secondary Screenshot - Cashier Tables */}
              <div className="aspect-video md:col-span-8 md:col-start-1 md:row-start-2 relative rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-white/10 shadow-lg group bg-gray-50 dark:bg-gray-900">
                {restaurantProject.screenshots?.[1] && (
                  <div className="w-full h-full relative">
                    <img src={restaurantProject.screenshots[1]} alt="Cashier Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                      <span className="text-white font-bold flex flex-col items-center gap-2"><Monitor size={24}/> Cashier Overview</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Tertiary Screenshot - Mobile Ordering */}
              <div className="aspect-[576/1246] w-full max-w-72 justify-self-center md:col-span-4 md:col-start-9 md:row-start-1 md:row-span-2 md:aspect-auto md:h-full md:max-w-none relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group bg-gray-50 dark:bg-gray-900">
                {restaurantProject.screenshots?.[2] && (
                  <div className="w-full h-full relative">
                    <img src={restaurantProject.screenshots[2]} alt="Mobile Ordering" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white font-bold text-lg flex items-center gap-2 mb-1"><Smartphone size={20}/> Guest Mobile UI</span>
                        <p className="text-gray-300 text-sm">Zero-install QR ordering.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project 2: Online Banking System (OBS) */}
      {bankProject && (
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch pt-12 border-t border-gray-200/80 dark:border-white/10">
          {/* Visual Showcase (3-Stack Architecture Bento Grid) */}
          <div className="lg:w-[55%] grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Card 1: Web Admin Console & KYC Queue */}
            <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-white dark:from-gray-900/90 dark:via-gray-900/60 dark:to-gray-950 border-2 border-blue-100 dark:border-white/10 shadow-xl relative overflow-hidden group hover:border-blue-500/50 dark:hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-600 text-white dark:bg-pink-600">
                    <LayoutDashboard size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">Web Admin & Teller Portal</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">React · TypeScript · Vite · Tailwind</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40">
                  Staff Console
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Real-time KYC verification queue with document approval / rejection actions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Role-Based Access Control (RBAC) separating Teller vs. Administrator capabilities</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Core Banking Backend API */}
            <div className="md:col-span-7 p-6 rounded-3xl bg-gradient-to-br from-indigo-50/70 to-white dark:from-gray-900/80 dark:to-black/60 border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-blue-500/50 dark:hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white dark:bg-purple-600">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white">Core Banking REST API</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Spring Boot 3 · Java 21 · PostgreSQL 17</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                ACID transactional ledger boundaries, DevSms 2FA, PDFBox bank statements, and Flyway schema migrations.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Docker</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Flyway</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">Mailpit</span>
              </div>
            </div>

            {/* Card 3: Mobile Banking Client */}
            <div className="md:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-purple-50/70 to-white dark:from-gray-900/80 dark:to-black/60 border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-blue-500/50 dark:hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-600 text-white dark:bg-pink-600">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white">Mobile Client</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Flutter · Dart</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Camera-based KYC document scanner, biometric/OTP challenge verification, and instant fund transfers.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Right Side: 45% Text Content */}
          <div className="lg:w-[45%] flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-sm font-bold tracking-wide">
                <Landmark size={16} />
                <span>FinTech & Core Banking Monorepo</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {bankProject.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {bankProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {bankProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                href={`/projects/${bankProject.id}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-pink-500/30 hover:-translate-y-1 w-full sm:w-auto group"
              >
                Read Full Case Study
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {bankProject.repo && (
                <a
                  href={bankProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-800 dark:text-white rounded-xl font-bold transition-all w-full sm:w-auto"
                >
                  <Code size={18} />
                  GitHub Monorepo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Project 3: Shopv1 E-Commerce */}
      {shopProject && (
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch pt-12 border-t border-gray-200/80 dark:border-white/10">
          {/* Left Side: 45% Text Content */}
          <div className="lg:w-[45%] flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 text-sm font-bold tracking-wide">
                <ShoppingBag size={16} />
                <span>Modern Full-Stack E-Commerce</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {shopProject.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {shopProject.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {shopProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-lg text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link
                href={`/projects/${shopProject.id}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-pink-600 dark:hover:bg-pink-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-pink-500/30 hover:-translate-y-1 w-full sm:w-auto group"
              >
                Read Full Case Study
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {shopProject.repo && (
                <a
                  href={shopProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-800 dark:text-white rounded-xl font-bold transition-all w-full sm:w-auto"
                >
                  <Code size={18} />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>

          {/* Right Side: 55% Visual Showcase (Bento Grid) */}
          <div className="lg:w-[55%] order-1 lg:order-2 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Card 1: Dual Payment Gateways */}
            <div className="md:col-span-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-50/80 via-pink-50/30 to-white dark:from-gray-900/90 dark:via-gray-900/60 dark:to-gray-950 border-2 border-purple-100 dark:border-white/10 shadow-xl relative overflow-hidden group hover:border-purple-500/50 dark:hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-purple-600 text-white dark:bg-pink-600">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">Dual Payment Infrastructure</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Stripe Card API & Bakong KHQR Dynamic Pay</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
                  FinTech Rails
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-500 shrink-0" />
                  <span>Stripe Payment Intents with webhook signature verification for global cards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-500 shrink-0" />
                  <span>Dynamic Cambodian Bakong KHQR generation with MD5 transaction validation</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Atomic Inventory & Prisma Transactions */}
            <div className="md:col-span-7 p-6 rounded-3xl bg-gradient-to-br from-indigo-50/70 to-white dark:from-gray-900/80 dark:to-black/60 border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-purple-500/50 dark:hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white dark:bg-purple-600">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white">Atomic Stock Reservations</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Prisma ORM 7 · PostgreSQL 16</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Race-condition-free checkout with interactive Prisma transactions preventing inventory overselling during sales spikes.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">ACID Transactions</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">Variant Matrix</span>
              </div>
            </div>

            {/* Card 3: Full-Stack Containerization & Orders */}
            <div className="md:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-pink-50/70 to-white dark:from-gray-900/80 dark:to-black/60 border border-gray-200 dark:border-white/10 shadow-lg relative overflow-hidden group hover:border-purple-500/50 dark:hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-pink-600 text-white dark:bg-pink-600">
                  <PackageCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white">Order Lifecycle</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Docker · Express 5 · React 19</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Real-time order stage progression, live revenue metrics, and Docker Compose persistent volume mounts.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300">Docker Compose</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
