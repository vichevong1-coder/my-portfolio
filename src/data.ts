export interface UserFlowStep {
  step: string;
  detail: string;
}

export interface UserFlowRole {
  role: string;
  description: string;
  badge?: string;
  steps: UserFlowStep[];
}

export interface EngineeringChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectVideo {
  title: string;
  description: string;
  url: string;
  type: "mobile" | "desktop";
  badge?: string;
}

export interface ArchitectureHighlight {
  pillar: string;
  tagline: string;
  category: "backend" | "fintech" | "cloud" | "frontend";
  points: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  videoUrl?: string;
  videos?: ProjectVideo[];
  screenshots?: string[];
  architectureDiagram?: string;
  link?: string;
  repo?: string;
  tags: string[];
  roles?: string[];
  userFlows?: UserFlowRole[];
  engineeringChallenges?: EngineeringChallenge[];
  architectureHighlights?: ArchitectureHighlight[];
}

export interface PortfolioData {
  developer: {
    name: string;
    role: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    telegram: string;
    telegramUsername: string;
  };
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  developer: {
    name: "Nhar Vichovong",
    role: "Software Engineer",
    bio: "Software Engineer specializing in robust backend architecture, cloud deployments, and FinTech workflows. Experienced in designing resilient distributed systems, transactional dual-currency accounting, and modern web applications from the ground up.",
    email: "vichevong1@gmail.com",
    github: "https://github.com/vichevong1-coder",
    linkedin: "https://www.linkedin.com/in/viche-vong-001a84437",
    telegram: "https://t.me/nharvichovong",
    telegramUsername: "@nharvichovong",
  },
  projects: [
    {
      id: "restaurant-pos",
      title: "Malatang POS & QR System",
      description: "A high-concurrency Point of Sale and QR-at-Table ordering system engineered with pessimistic locking, dual-currency settlement, and zero-trust cloud tunneling.",
      summary: "This comprehensive system eliminates waiter bottlenecks by enabling diners to scan table QR codes and order directly from their mobile devices. It features dual-currency settlement (USD & KHR), real-time kitchen queues, and a multi-role backoffice dashboard.\n\nEngineered specifically for high-customization DIY dining, it handles dynamic modifier limits, single-turn guest device guards, and instant table session transfers.",
      videoUrl: "https://pub-24c274def3d943f9a05295aba23b63ad.r2.dev/4k/2026-09-21%2001-37-27.mp4",
      videos: [
        {
          title: "Guest Ordering Flow",
          description: "Live recording captured on an iPhone demonstrating the zero-install table QR ordering flow, bilingual English/Khmer menu, customizable modifiers, and real-time cart.",
          url: "https://pub-24c274def3d943f9a05295aba23b63ad.r2.dev/4k/IMG_2516.mp4",
          type: "mobile",
          badge: "iPhone"
        },
        {
          title: "DIY Menu & Spend Guard",
          description: "4K desktop walkthrough demonstrating DIY bowl ingredient rules, min/max modifier constraints, and the $3.00 minimum spend policy enforcement.",
          url: "https://pub-24c274def3d943f9a05295aba23b63ad.r2.dev/4k/2026-09-21%2001-37-27.mp4",
          type: "desktop",
          badge: "4K 60FPS"
        },
        {
          title: "Admin Backoffice",
          description: "4K desktop walkthrough of the administrative backoffice managing categories, bilingual catalog items, modifier groups, and table controls.",
          url: "https://pub-24c274def3d943f9a05295aba23b63ad.r2.dev/4k/2026-09-21%2001-31-12.mp4",
          type: "desktop",
          badge: "4K 60FPS"
        }
      ],
      screenshots: [
        "/screenshots/admin-menu-items.png",
        "/screenshots/cashier-tables.png",
        "/screenshots/mobile-ordering.png",
      ],
      link: "https://example-restaurant.com",
      repo: "https://github.com/vichevong1-coder/resturant",
      tags: ["Java 21", "Spring Boot", "React 19", "Vite", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS"],
      roles: ["Customer", "Chef (KDS)", "Cashier", "Admin"],
      userFlows: [
        {
          role: "Customer",
          description: "Zero-install mobile table ordering built for multi-guest synchronization.",
          badge: "Mobile UI",
          steps: [
            { step: "Zero-Install Session", detail: "Scans a unique table QR code to securely authenticate a temporary session without app downloads or account creation." },
            { step: "Private Draft Carts", detail: "Each device maintains a private, mutable cart, preventing edit collisions between multiple guests sharing the same table." },
            { step: "Composable Modifiers", detail: "Configures bowl selections with real-time UI enforcement of strict minimum and maximum ingredient boundaries." },
            { step: "Atomic Submissions", detail: "Pessimistic session locking prevents race conditions, converting draft carts into immutable order snapshots." },
          ]
        },
        {
          role: "Kitchen (KDS)",
          description: "High-visibility, low-friction ticket queue optimized for fast-paced line cooks.",
          badge: "Kitchen Display",
          steps: [
            { step: "Polled FIFO Queue", detail: "A real-time, chronological stream of all submitted rounds across the restaurant, ordered precisely by submission time." },
            { step: "Price-Blind Display", detail: "Ticket UIs intentionally hide price information to reduce cognitive load and keep focus entirely on food preparation." },
            { step: "Ticket Ageing Alerts", detail: "Visual indicators automatically shift ticket colors (Standard ➔ Amber ➔ Red) to alert staff of delayed fulfillment." },
            { step: "1-Tap Fulfillment", detail: "A single 'Mark as Ready' action instantly fulfills the order and synchronizes the status back to the Cashier's dashboard." },
          ]
        },
        {
          role: "Cashier",
          description: "High-density table monitoring, manual walk-in entry, and dual-currency checkout.",
          badge: "Terminal UI",
          steps: [
            { step: "Visual Status Board", detail: "A live, color-coded grid mapping the dining area (Idle, Ordered, Served) for instant operational awareness." },
            { step: "Immutable Auditing", detail: "Orders cannot be arbitrarily edited; modifications require mandatory audit reasons via 'Void' or 'Cancel' actions." },
            { step: "Dual-Currency Engine", detail: "Automatically cross-computes exact change across USD and Khmer Riel (KHR) during mixed-currency cash settlements." },
            { step: "Session Closure", detail: "Settling the bill instantly resets the table to Idle, prints a bilingual receipt, and invalidates all active guest tokens." },
          ]
        },
        {
          role: "Admin",
          description: "Backoffice configuration, catalog management, and granular security controls.",
          badge: "Backoffice",
          steps: [
            { step: "Modifier Engine Builder", detail: "Constructs reusable modifier groups with strict selection constraints (min/max rules) mapped to menu items." },
            { step: "Bilingual Catalog", detail: "Manages menu items, pricing, availability toggles, and descriptions across both English and Khmer languages." },
            { step: "QR Token Revocation", detail: "Instantly invalidates compromised table QR codes with one click to stop off-premise 'ghost order' spam." },
            { step: "Granular RBAC", detail: "Provisions staff accounts with strict role-based access control boundaries (ADMIN, CASHIER, CHEF)." },
          ]
        }
      ],
      engineeringChallenges: [
        {
          title: "Stopping 'Order-From-Home' Pranks (Ghost Orders)",
          problem: "A customer could snap a photo of the table's QR code, go home, and keep placing fake orders to prank the restaurant and flood the kitchen.",
          solution: "Two layers of defense:\n1) A single-use device lock (SpentDeviceGuard) locks the customer's phone after an order round is sent, requiring a physical in-person re-scan to order more.\n2) If a code is ever compromised, an admin can regenerate the table's QR token with one click, immediately making the old photo return a 404 error."
        },
        {
          title: "DIY Menu Rules (0 Soup or 99 Meatballs)",
          problem: "In custom DIY Malatang, customers build their own bowls. You can't let someone order 0 soup broths, spam 99 meatballs, or submit an empty bowl just to bypass table minimums.",
          solution: "Min/Max Limits & Minimum Spend:\n1) Both the frontend UI and backend enforce strict minChoice and maxChoice rules (e.g. exactly 1 broth, maximum 10 meat portions).\n2) A backend policy (BuildMinimumPolicy) guarantees every custom bowl meets a $3.00 threshold before it can be sent to the kitchen."
        },
        {
          title: "Wrong-Table Scans & Switching Tables",
          problem: "Customers often move to a better table after sitting down, or accidentally scan the QR sticker on the neighboring table, sending their food to the wrong spot.",
          solution: "1-Click Table Move (transferSession):\nOrders belong to a dynamic 'Table Session' rather than physical furniture. If a customer sits at the wrong table, the cashier can move the entire active session to the correct idle table with one click—keeping the bill and all kitchen tickets perfectly in sync."
        }
      ],
      architectureHighlights: [
        {
          pillar: "Backend & Concurrency",
          tagline: "High-throughput transactional integrity & session lifecycle",
          category: "backend",
          points: [
            "Pessimistic session locking on cart checkout to eliminate concurrent race conditions across shared tables.",
            "Dynamic table session lifecycle decoupling active orders from physical furniture for zero-downtime transfers.",
            "Immutable order rounds with mandatory audit trails for voids, item cancellations, and kitchen reconciliation."
          ]
        },
        {
          pillar: "FinTech & Financial Logic",
          tagline: "Dual-currency settlement, anti-fraud & threshold policies",
          category: "fintech",
          points: [
            "Dual-currency exchange engine calculating mixed USD/Khmer Riel (KHR) cash settlements with exact change breakdown.",
            "Single-device spent guard (SpentDeviceGuard) and token revocation preventing off-premise ghost ordering fraud.",
            "BuildMinimumPolicy threshold rules enforcing strict minimum spend constraints before kitchen dispatch."
          ]
        },
        {
          pillar: "Cloud & Network Security",
          tagline: "Zero-trust ingress, containerization & schema versioning",
          category: "cloud",
          points: [
            "Zero-trust remote tunneling via Cloudflare Tunnel, exposing internal services without public inbound open ports.",
            "Containerized microservices on AWS EC2 with Docker and Nginx reverse proxy for reproducible parity.",
            "Database schema version control with Flyway automated migrations on PostgreSQL."
          ]
        },
        {
          pillar: "Frontend & Systems UX",
          tagline: "Real-time synchronization, KDS queues & operational dashboards",
          category: "frontend",
          points: [
            "Zero-install guest mobile web client with real-time bilingual (Khmer/English) menu toggling.",
            "Chronological FIFO kitchen display system (KDS) with visual ticket aging alerts (Standard ➔ Amber ➔ Red).",
            "High-density, touch-optimized cashier status board with live table states (Idle, Ordered, Served)."
          ]
        }
      ]
    },
    {
      id: "online-bank",
      title: "Online Banking System (OBS)",
      description: "A multi-tier banking platform engineered with Java Spring Boot 3, PostgreSQL 17, a React admin console, and a Flutter mobile client featuring camera KYC onboarding, fund transfers, and transactional audit trails.",
      summary: "Online Banking System is an enterprise-grade financial monorepo engineered across three coordinated stacks: a high-security Spring Boot REST API as the single source of truth, a back-office React administrative portal for bank staff, and a cross-platform Flutter customer app.\n\nDesigned around mission-critical banking workflows, the system implements camera-based KYC identity onboarding, teller and admin approval queues, atomic multi-account fund transfers, DevSms 2FA verification, automated PDF statement generation, and transactional audit logging.",
      repo: "https://github.com/vichevong1-coder/Online-Banking-System",
      tags: [
        "Java 21",
        "Spring Boot 3",
        "PostgreSQL 17",
        "React",
        "TypeScript",
        "Flutter",
        "Docker Compose",
        "Spring Security",
        "Flyway"
      ],
      roles: ["Full-Stack Engineer", "Backend Architect", "Systems Administrator"],
      userFlows: [
        {
          role: "Customer (Mobile Banking)",
          description: "Mobile onboarding, multi-factor security, real-time balances, and fund transfers.",
          badge: "Flutter App",
          steps: [
            { step: "Camera KYC Registration", detail: "Captures national ID documents and a biometric selfie, submitting credentials to the staff review queue." },
            { step: "Challenge-Token 2FA", detail: "Undergoes mandatory two-factor authentication via DevSms OTP challenge verification before token issuance." },
            { step: "Account & Statement Center", detail: "Monitors ledger balances, queries real-time transaction records, and exports monthly PDF statements." },
            { step: "Atomic Fund Transfers", detail: "Executes intra-bank account transfers with immediate debit verification and receipt generation." }
          ]
        },
        {
          role: "Teller & Operations Staff",
          description: "Customer onboarding verification, account status management, and transaction queries.",
          badge: "Web Admin Console",
          steps: [
            { step: "KYC Review Console", detail: "Inspects uploaded ID documents and biometric selfies in a queue to approve or reject pending customer accounts." },
            { step: "Customer Lifecycle Servicing", detail: "Searches customer profiles, monitors active vs. suspended states, and assists with branch-level account inquiries." },
            { step: "Transaction Investigation", detail: "Audits transaction logs, filters failed transfers, and confirms settlement statuses." }
          ]
        },
        {
          role: "System Administrator",
          description: "Governance, staff permissions, audit trail inspection, and container topology.",
          badge: "Governance & Security",
          steps: [
            { step: "Granular RBAC Policies", detail: "Enforces role-based permissions separating TELLER, ADMIN, and CUSTOMER authorization boundaries." },
            { step: "Immutable Audit Trails", detail: "Maintains structured audit logs recording administrative approvals, status modifications, and security events." },
            { step: "Containerized Orchestration", detail: "Coordinates local topology spanning PostgreSQL 17-alpine, Mailpit SMTP, and Spring Boot via Docker Compose." }
          ]
        }
      ],
      engineeringChallenges: [
        {
          title: "Camera KYC State Machine & Multi-Portal Queue",
          problem: "Customer onboarding requires document verification without giving unapproved users access to financial endpoints, while maintaining reactive state updates across both mobile and web admin portals.",
          solution: "Architected an AccountStatus state machine (PENDING_APPROVAL ➔ ACTIVE / REJECTED). Unapproved accounts are blocked at the Spring Security filter with structured challenge responses, while the React admin dashboard exposes a dedicated review console for bank tellers to approve or reject submissions in real time."
        },
        {
          title: "Isolated CI/CD for Monorepo Stacks",
          problem: "Deploying and testing Java (Spring Boot), TypeScript (React), and Dart (Flutter) in a unified repository caused excessive CI run times and pipeline bottlenecks on every pull request.",
          solution: "Configured path-filtered GitHub Actions workflows (`backend-ci.yml`, `web-admin-ci.yml`, `mobile-ci.yml`) triggering exclusively on scoped directory modifications, isolating build environments and keeping build verification fast and targeted."
        },
        {
          title: "ACID Transactional Integrity & Ledger Auditability",
          problem: "Fund transfers and account balance changes risk race conditions or partial failures during network anomalies, which could corrupt customer account balances.",
          solution: "Enforced strict `@Transactional` boundaries within Spring Data JPA repositories featuring debit-first balance validations and dual-entry ledger mutations, paired with immutable audit event logging for complete regulatory traceability."
        }
      ],
      architectureHighlights: [
        {
          pillar: "Core Backend & Security",
          tagline: "Spring Boot 3, Spring Security & Granular RBAC",
          category: "backend",
          points: [
            "Stateless JWT access and refresh token architecture with mandatory challenge-token 2FA verification.",
            "Feature-first package layout enforcing strict separation across controllers, services, repositories, and DTOs.",
            "Method-level authorization with `@PreAuthorize` segregating Teller, Admin, and Customer operational capabilities."
          ]
        },
        {
          pillar: "FinTech & Banking Workflows",
          tagline: "KYC Onboarding, Ledger Integrity & PDF Reporting",
          category: "fintech",
          points: [
            "Customer KYC verification queue with multi-state customer lifecycle transitions and rejection explanation banners.",
            "Debit-first atomic fund transfers guaranteeing ledger balance consistency across source and target accounts.",
            "Automated bank statement generation using Apache PDFBox with transactional summary breakdowns."
          ]
        },
        {
          pillar: "Infrastructure & Tooling",
          tagline: "Docker Compose, PostgreSQL 17 & Mailpit SMTP",
          category: "cloud",
          points: [
            "Multi-service Docker Compose topology orchestrating PostgreSQL 17-alpine, Mailpit SMTP, and backend services.",
            "Database versioning and schema migrations managed with Flyway for reproducible local and CI environments.",
            "DevSms outbox engine simulating two-factor SMS delivery without third-party telecommunication costs."
          ]
        },
        {
          pillar: "Multi-Client Systems UX",
          tagline: "React Admin Console & Flutter Cross-Platform App",
          category: "frontend",
          points: [
            "Tailwind CSS-powered React operational dashboard for high-density teller and administrator workflows.",
            "Flutter mobile client for iOS and Android featuring camera ID scanning and real-time transaction history.",
            "Interactive Swagger UI / OpenAPI 3 specification for full REST API documentation and integration testing."
          ]
        }
      ]
    },
    {
      id: "shopv1",
      title: "Shopv1 — Full-Stack E-Commerce Platform",
      description: "A production-ready e-commerce platform engineered with React 19, Node.js/Express, PostgreSQL, and Prisma ORM, featuring dual payment gateways (Stripe & Bakong KHQR), atomic inventory management, and an admin analytics dashboard.",
      summary: "Shopv1 is a modern, high-performance retail platform engineered to handle both domestic and international e-commerce workflows. It combines global credit card processing via Stripe with Cambodia's national Bakong KHQR payment standard.\n\nDesigned with concurrency and financial consistency at its core, the platform enforces atomic inventory reservations inside Prisma transactions to prevent overselling, paired with an administrative console for multi-variant product provisioning, order tracking, and revenue analytics.",
      repo: "https://github.com/vichevong1-coder/Shopv1",
      screenshots: [
        "/screenshots/shopv1-preview.png"
      ],
      tags: [
        "React 19",
        "Node.js",
        "Express 5",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Stripe API",
        "Bakong KHQR",
        "Docker Compose"
      ],
      roles: ["Full-Stack Engineer", "Backend Developer", "DevOps Engineer"],
      userFlows: [
        {
          role: "Shopper (Storefront)",
          description: "Product discovery, multi-variant selection, persistent cart, and seamless checkout.",
          badge: "Customer Experience",
          steps: [
            { step: "Catalog Browsing & Fuzzy Search", detail: "Filters products by category, gender, color, and size with real-time stock availability badges." },
            { step: "Variant Selection & Cart Sync", detail: "Interactively chooses sizes/colors with guest cart persistence that automatically merges upon account login." },
            { step: "Dual Payment Checkout", detail: "Completes purchases via Stripe card element or dynamic Bakong KHQR scan with instant payment polling." },
            { step: "Order Status Tracking", detail: "Monitors order lifecycle progression from pending to confirmed, shipped, and delivered." }
          ]
        },
        {
          role: "Payment & Webhook Engine",
          description: "Dual payment gateway reconciliation and transaction verification.",
          badge: "FinTech Rail",
          steps: [
            { step: "Stripe Payment Intents", detail: "Creates secure client-secret tokens and validates server-side webhook signatures before finalizing orders." },
            { step: "Bakong KHQR Generation", detail: "Generates dynamic EMVCo-compliant KHQR payload with automated MD5 hash verification upon settlement." },
            { step: "Atomic Stock Confirmation", detail: "Locks inventory within a database transaction upon verified payment, reverting stock if payment fails or expires." }
          ]
        },
        {
          role: "Store Administrator",
          description: "Catalog curation, order fulfillment, and business analytics.",
          badge: "Admin Dashboard",
          steps: [
            { step: "Multi-Variant Product Management", detail: "Creates, updates, and soft-deletes products with multi-image uploads and granular stock per size/color." },
            { step: "Fulfillment & Tracking", detail: "Updates shipment statuses, adds tracking information, and manages customer order inquiries." },
            { step: "Revenue & Sales Analytics", detail: "Inspects real-time revenue graphs, pending orders, and top-performing product categories." }
          ]
        }
      ],
      engineeringChallenges: [
        {
          title: "Eliminating Inventory Race Conditions & Overselling",
          problem: "When multiple shoppers attempt to checkout the last available item in a specific size/color simultaneously, standard asynchronous queries risk selling more stock than physically exists.",
          solution: "Implemented atomic stock reservation within Prisma interactive database transactions (`prisma.$transaction`). Stock count is checked and decremented in a single atomic database lock, immediately aborting the checkout if available quantity is insufficient."
        },
        {
          title: "Dual Payment Gateway Webhook Reconciliation",
          problem: "Stripe and Bakong KHQR operate under completely different verification protocols (Stripe uses cryptographic HMAC webhook signatures, while Bakong KHQR relies on dynamic payload generation and MD5 transaction hashing), requiring a unified order state reconciliation system.",
          solution: "Architected an idempotent payment reconciliation pipeline. Webhook listeners for Stripe and polling workers for Bakong KHQR both funnel into a shared `finalizeOrder` transaction that verifies payment state before transitioning the order to `CONFIRMED` and generating customer receipts."
        },
        {
          title: "Persistent Guest Cart with Seamless Account Merge",
          problem: "Shoppers frequently add items to their cart as guests before signing in or creating an account, causing frustration if their selected items are lost after authentication.",
          solution: "Engineered a local storage cart adapter that synchronizes with the server. Upon authentication (JWT issuance), an automated merge routine queries the user's saved database cart and consolidates guest items without duplicating items or overwriting variant selections."
        }
      ],
      architectureHighlights: [
        {
          pillar: "Core Backend & Data Layer",
          tagline: "Express 5, Prisma ORM 7 & PostgreSQL",
          category: "backend",
          points: [
            "RESTful API architecture built on Express 5, Node.js 20+, and strict TypeScript type contracts.",
            "PostgreSQL database layer abstracted with Prisma ORM 7 leveraging the high-speed `@prisma/adapter-pg` driver.",
            "JWT authentication pairing 15-minute access tokens with secure HttpOnly refresh token rotation."
          ]
        },
        {
          pillar: "FinTech & Payment Rails",
          tagline: "Stripe Cards & Bakong KHQR Dynamic Settlement",
          category: "fintech",
          points: [
            "Stripe Payment Intents integration supporting international credit and debit cards with webhook verification.",
            "Dynamic Bakong KHQR generation compliant with National Bank of Cambodia standards with automated transaction validation.",
            "ACID transactional stock reservation ensuring zero inventory leakage during checkout surges."
          ]
        },
        {
          pillar: "DevOps & Containerization",
          tagline: "Docker Compose, Nginx & Persistent Volumes",
          category: "cloud",
          points: [
            "Full-stack containerization with Docker Compose orchestrating frontend, backend API, and PostgreSQL.",
            "Persistent Docker volume mounts for database data (`postgres_data`) and self-hosted image uploads (`backend_uploads`).",
            "Nginx reverse proxy with security headers (Helmet, CSP) and API rate-limiting middleware."
          ]
        },
        {
          pillar: "Modern Storefront UX",
          tagline: "React 19, Vite & Dynamic Variant Selectors",
          category: "frontend",
          points: [
            "High-speed React 19 storefront with client-side routing via React Router DOM and Lucide React icons.",
            "Interactive product variant matrix (sizes, colors) with real-time stock availability indicators.",
            "High-density admin dashboard with sales charts, order lifecycle management, and catalog controls."
          ]
        }
      ]
    }
  ]
};
