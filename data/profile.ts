export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
  placeId?: string;
  stats?: {
    heartbeat: string;
    condition: string;
  };
  servers?: Array<{
    id: string;
    name: string;
    teleportCode: string;
    players: string;
    ping: string;
  }>;
}

export interface SkillCategory {
  category: string;
  skills: Array<{ name: string; level?: string; icon?: string }>;
}

export const PROFILE = {
  fullName: "John Vince Key Dumaguit",
  firstNameParts: "John Vince Key",
  lastName: "Dumaguit",
  handle: "NyeowZ",
  title: "Software Developer",
  roleSubtitle: "Aspiring Full-Stack & Software Developer",
  email: "johnvincekeyedu@gmail.com",
  githubUrl: "https://github.com/nyeowsz",
  linkedinUrl: "https://linkedin.com/in/",
  twitterUrl: "https://x.com/",
  discordTag: "nyeowz",
  bio: "BSIT student and developer passionate about creating responsive web applications, efficient backend REST APIs, game telemetry systems, and practical automation tools.",
  slogan: "Good software solves problems, is usable, and stays simple.",
  
  terminal: {
    user: "nyeowz",
    machine: "portfolio.terminal",
    shell: "zsh",
    whoami: "NyeowZ — Software Developer & BSIT",
    focus: "Web Systems • REST APIs • Automation",
    coreStack: "C, Java, Luau, JS, TypeScript, Node.js, PHP, MySQL, Next.js",
    status: "Active & Available for Opportunities",
  },

  featuredProject: {
    id: "game-server-tracker",
    title: "Automated Game Server Tracker & Discord Dispatcher",
    tags: ["Node.js", "JavaScript", "Luau", "Roblox API", "Discord Webhooks", "Render"],
    description:
      'An automated background worker that polls the Roblox REST API to monitor low-population game servers for "Steal an Egg" (Place ID: 10777807077162), prioritizes them by lowest ping, and dispatches in-place live telemetry updates to Discord with instant one-click auto-join teleport links.',
    githubUrl: "https://github.com/nyeowsz",
    placeId: "10777807077162",
    gameName: "Steal an Egg",
    stats: {
      heartbeat: "17s ago",
      condition: "≤ 4 players (ping sorted)",
    },
    servers: [
      {
        id: "1",
        name: "Server #1",
        teleportCode: "TeleportToPlaceInstance(10777807077162, ...)",
        players: "1/7 Players",
        ping: "3ms",
      },
      {
        id: "2",
        name: "Server #2",
        teleportCode: "TeleportToPlaceInstance(10777807077162, ...)",
        players: "1/7 Players",
        ping: "12ms",
      },
      {
        id: "3",
        name: "Server #3",
        teleportCode: "TeleportToPlaceInstance(10777807077162, ...)",
        players: "1/7 Players",
        ping: "15ms",
      },
    ],
  },

  skills: [
    {
      category: "Languages & Core",
      skills: [
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Luau / Lua" },
        { name: "C" },
        { name: "Java" },
        { name: "PHP" },
        { name: "SQL" },
      ],
    },
    {
      category: "Frameworks & Frontend",
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "HTML5 / CSS3" },
        { name: "Responsive UI" },
      ],
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "Node.js" },
        { name: "RESTful APIs" },
        { name: "Discord Webhooks" },
        { name: "Roblox Open Cloud API" },
        { name: "MySQL" },
      ],
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub" },
        { name: "Render Cloud" },
        { name: "VS Code" },
        { name: "Postman" },
        { name: "Linux / Zsh" },
      ],
    },
  ],
};

