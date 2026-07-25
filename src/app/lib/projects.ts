import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    demoUrl: "#",
    sourceUrl: "#",
    thumbnailEmoji: "🛒",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard with real-time data visualization, custom reports, and team collaboration.",
    tags: ["React", "D3", "Express"],
    demoUrl: "#",
    sourceUrl: "#",
    thumbnailEmoji: "📊",
  },
  {
    id: "3",
    title: "Chat Application",
    description:
      "Real-time messaging app with channels, direct messages, file sharing, and read receipts.",
    tags: ["Next.js", "Socket.io", "Prisma"],
    demoUrl: "#",
    sourceUrl: "#",
    thumbnailEmoji: "💬",
  },
];
