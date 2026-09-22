export interface Project {
    title: string;
    description: string;
    technologies: string[];
    status: "Building" | "Completed" | "Planning";
    github: string;
    demo: string;
}

export const projects: Project[] = [
    {
        title: "ResolveDesk",
        description:
            "A full-stack support ticket platform where customers can raise issues and agents can manage, communicate, and resolve them through structured ticket workflows.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        status: "Building",
        github: "https://github.com/varunn29/ResolveDesk",
        demo: "",
    },
    {
        title: "Blog App",
        description:
            "A blog platform that fetches posts from DEV.to and lets users write and publish their own blogs. Users can explore existing posts or create and share their own content.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "DEV.to API"],
        status: "Completed",
        github: "https://github.com/varunn29/Blog-App",
        demo: "https://devscope-bay.vercel.app/",
    },
    {
        title: "Compass Bot",
        description:
            "A Discord bot that collects and analyzes community messages to understand sentiment and activity. Built with a custom message-labeling system and sentiment classifier.",
        technologies: ["Node.js", "Discord.js", "Prisma", "PostgreSQL"],
        status: "Building",
        github: "",
        demo: "",
    },
];