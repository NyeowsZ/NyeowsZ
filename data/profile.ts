export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export const PROFILE = {
  fullName: "John Vince Key Dumaguit",
  firstNameParts: "John Vince Key",
  lastName: "Dumaguit",
  handle: "NyeowZ",
  title: "Software Developer",
  email: "johnvincekeyedu@gmail.com",
  githubUrl: "https://github.com/nyeowsz",
  slogan: {
    line1: "Good software",
    line2: "solves problems, is usable",
    line3: "and stay simple",
  },
  bio: "Software developer with a strong focus on clean architecture, full-stack web applications, and backend systems. Experienced with TypeScript, Next.js, Laravel, Docker, and scalable APIs.",

  featuredProject: {
    id: "parcelhub",
    title: "ParcelHub",
    tagline: "AI-Augmented Parcel Escrow & Visual Logging System",
    description:
      "A parcel escrow platform that transitions synchronous last-mile deliveries into a secure, asynchronous workflow. Built for workplace staff and communities who cannot personally wait for delivery couriers, designating a centralized human-in-the-loop receiving hub.",
    tags: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Computer Vision AI",
      "Tailwind CSS",
      "Vercel",
    ],
    githubUrl: "https://github.com/nyeowsz",
    highlights: [
      "Asynchronous Proxy Receiving: Pre-registration of inbound orders with receipt verification, eliminating missed courier drops.",
      "AI Visual Documentation: Computer vision inspection during physical handover to verify condition and maintain an audit trail.",
      "Dual-Factor Claiming: Secure release via personal MPIN and dynamic time-based QR codes.",
      "Full-Stack Cross-Platform: Next.js management portal, React Native client apps, and Supabase real-time backend.",
    ],
  },

  techStack: [
    {
      category: "Frontend & Mobile",
      items: ["Next.js", "React", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      category: "Backend & Architecture",
      items: ["Laravel", "PHP", "REST APIs", "RPC", "Supabase", "PostgreSQL", "SQL & NoSQL"],
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker CLI", "Linux / Ubuntu", "Nginx", "Vercel", "Git & GitHub"],
    },
  ],
};
