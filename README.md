# 💼 Nhor Vichevong — Personal Portfolio & Engineering Case Studies

A high-performance personal portfolio and engineering case study showcase built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Deployed on **Vercel** with automated continuous deployment.

🌐 **Live URL:** [https://my-portfolio-delta-ten-57.vercel.app](https://my-portfolio-delta-ten-57.vercel.app)

---

## 🚀 Overview

This portfolio is designed to showcase real-world, production-grade systems across **FinTech**, **distributed backend architectures**, **point-of-sale platforms**, and **modern multi-tier monorepos**. 

Each project includes interactive user flow steppers, engineering deep dives with architectural problem/solution breakdowns, system highlights across 4 core engineering pillars, and downloadable technical documentation.

---

## 🌟 Featured Engineering Case Studies

### 1. 🍜 [Malatang POS & QR System](/projects/restaurant-pos)
A high-concurrency Point of Sale and QR-at-Table ordering platform engineered for high-customization DIY dining.
* **Tech Stack:** React, Node.js / Spring Boot, PostgreSQL, Cloudflare Tunnel, Docker, Nginx
* **Core Highlights:**
  * **Zero-Trust Remote Tunneling:** Exposes locally hosted servers to external customers via Cloudflare Tunnel without opening inbound router ports.
  * **Dual-Currency Settlement Engine:** Real-time cash settlement across USD and Khmer Riel (KHR) with automatic change computation.
  * **Anti-Fraud Protections:** Single-device lock guards (`SpentDeviceGuard`) and 1-click dynamic table QR token regeneration to prevent "order-from-home" pranks.
  * **Pessimistic Session Locking:** Prevents concurrent checkout race conditions across shared dining tables.

---

### 2. 🏛️ [Online Banking System (OBS)](/projects/online-bank)
An enterprise-grade financial platform engineered across a 3-stack monorepo featuring core banking workflows.
* **Tech Stack:** Java 21, Spring Boot 3, PostgreSQL 17, React, TypeScript, Flutter, Docker Compose, Flyway, Spring Security
* **Core Highlights:**
  * **Camera-Based KYC Verification:** Cross-platform customer onboarding with ID scanning and biometric selfies routed into an administrative review console.
  * **Granular RBAC:** Method-level `@PreAuthorize` authorization separating Customer, Teller, and Administrator operational boundaries.
  * **ACID Transactional Ledger:** Debit-first atomic fund transfers guaranteeing ledger consistency across source and target accounts.
  * **Security & Observability:** Mandatory challenge-token DevSms 2FA, immutable audit event trails, and automated PDF bank statement generation (Apache PDFBox).

---

### 3. 🛍️ [Shopv1 — Full-Stack E-Commerce Platform](/projects/shopv1)
A production-ready retail platform integrating domestic and international payment rails with atomic inventory management.
* **Tech Stack:** React 19, Node.js (v20+), Express 5, TypeScript, PostgreSQL 16+, Prisma ORM 7, Stripe API, Bakong KHQR, Docker Compose
* **Core Highlights:**
  * **Dual Payment Infrastructure:** International credit/debit card processing via **Stripe Payment Intents** paired with dynamic **Bakong KHQR** generation (EMVCo-compliant with MD5 verification).
  * **Atomic Stock Reservation:** Race-condition-free inventory checkouts inside interactive Prisma transactions (`prisma.$transaction`) to eliminate overselling.
  * **Persistent Cart & Account Merge:** Client-side guest cart persistence that seamlessly merges with saved database carts upon authentication.
  * **Full-Stack Containerization:** Multi-service Docker Compose topology with persistent volumes for database records and product image uploads.

---

## 🛠️ Portfolio Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theming** | `next-themes` (Seamless Dark / Light Mode) |
| **Media Delivery** | Cloudflare R2 Object Storage (4K 60FPS Video Walkthroughs) |
| **Language** | TypeScript (Strict Mode) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) |

---

## 📁 Repository Structure

```
my-portfolio/
├── public/
│   ├── Nhor_Vichevong_CV.pdf        # Downloadable 1-page ATS-optimized resume
│   └── screenshots/                 # Application screenshots & logo emblems
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind v4 theme, fonts, and smooth scrolling
│   │   ├── layout.tsx               # Root layout with theme provider & metadata
│   │   ├── page.tsx                 # Homepage aggregating Hero, About, Projects, Contact
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx         # Static-generated case study dynamic pages (SSG)
│   ├── components/
│   │   ├── About.tsx                # Technical background & skills summary
│   │   ├── Contact.tsx              # Direct contact links (Email, Telegram, LinkedIn, GitHub)
│   │   ├── Header.tsx               # Fixed glassmorphism navigation header
│   │   ├── Hero.tsx                 # Hero section with interactive CTA & tech badges
│   │   ├── Projects.tsx             # 3-tier flagship case study bento showcases
│   │   ├── SafeImage.tsx            # Resilient image loader with fallback states
│   │   ├── ThemeToggle.tsx          # Dark / Light mode switch
│   │   ├── UserFlowVisualizer.tsx   # Interactive multi-role user flow stepper
│   │   └── VideoShowcase.tsx        # High-definition video player integration
│   └── data.ts                      # Centralized typed data models for all projects & developer info
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development

### Prerequisites
* **Node.js** v20+ or **Bun**

### 1. Install Dependencies
```bash
bun install
# or
npm install
```

### 2. Start Development Server
```bash
bun dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
bun run build
# or
npm run build
```
This generates optimized static HTML pages (SSG) for all routes via Turbopack.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
