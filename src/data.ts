export const portfolioData = {
  developer: {
    name: "Nhar Vichovong",
    role: "Full-Stack Developer",
    bio: "I am a software developer with a strong background in both backend systems (Java/PostgreSQL) and modern frontend interfaces (React/Tailwind). I enjoy building full-stack products from the ground up.",
    email: "vichevong1@gmail.com",
    github: "https://github.com/vichevong1-coder",
    linkedin: "https://www.linkedin.com/in/viche-vong-001a84437",
  },
  projects: [
    {
      id: "restaurant-pos",
      title: "Malatang POS & QR System",
      description: "A full-stack Point of Sale and QR-at-Table ordering system engineered for high-throughput dine-in operations.",
      summary: "This comprehensive system eliminates the need for waiters by allowing diners to scan a QR code and order directly from their phones. It features dual-currency settlement (USD & KHR), real-time kitchen queues, and a robust admin dashboard.\n\nBuilt to solve the challenges of complex DIY dining experiences, it utilizes pessimistic session locking to prevent double-submits and provides a seamless bilingual interface.",
      videoUrl: "https://pub-45455928d15a4d3ebaef6f9d44c8edc2.r2.dev/sample-video.mp4", // Replace with your actual R2 video URL
      screenshots: [
        "/screenshots/customer-mobile.jpg",
        "/screenshots/cashier-terminal.jpg",
        "/screenshots/kitchen-display.jpg",
      ],
      architectureDiagram: "/screenshots/architecture.jpg",
      link: "https://example-restaurant.com",
      repo: "https://github.com/vichevong1-coder/resturant",
      tags: ["Java 21", "Spring Boot", "React 19", "PostgreSQL", "Docker", "Tailwind CSS"],
      roles: ["Admin", "Cashier", "Chef", "Customer"]
    }
  ]
};
