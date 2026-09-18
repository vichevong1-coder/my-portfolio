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

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  videoUrl?: string;
  screenshots?: string[];
  architectureDiagram?: string;
  link?: string;
  repo?: string;
  tags: string[];
  roles?: string[];
  userFlows?: UserFlowRole[];
  engineeringChallenges?: EngineeringChallenge[];
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
    role: "Full-Stack Developer",
    bio: "I am a software developer with a strong background in both backend systems (Java/PostgreSQL) and modern frontend interfaces (React/Tailwind). I enjoy building full-stack products from the ground up.",
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
      description: "A full-stack Point of Sale and QR-at-Table ordering system engineered for high-throughput dine-in operations.",
      summary: "This comprehensive system eliminates waiter bottlenecks by enabling diners to scan table QR codes and order directly from their mobile devices. It features dual-currency settlement (USD & KHR), real-time kitchen queues, and a multi-role backoffice dashboard.\n\nEngineered specifically for high-customization DIY dining, it handles dynamic modifier limits, single-turn guest device guards, and instant table session transfers.",
      videoUrl: "https://pub-24c274def3d943f9a05295aba23b63ad.r2.dev/sample-video.mp4",
      screenshots: [
        "/screenshots/customer-mobile.jpg",
        "/screenshots/cashier-terminal.jpg",
        "/screenshots/kitchen-display.jpg",
      ],
      architectureDiagram: "/screenshots/architecture.jpg",
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
      ]
    }
  ]
};
