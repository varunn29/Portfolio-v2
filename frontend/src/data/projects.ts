export interface Project {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
}

export const projects: Project[] = [
    {
        title: "ResolveDesk",
        description:
            "A customer support ticket system for managing conversations between customers and support agents.",
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        github: "",
        demo: "",
    },
    {
        title: "Blog App",
        description:
            "A blog application that combines articles from DEV.to with locally created posts, including post creation and management.",
        technologies: ["React", "TypeScript", "Context API"],
        github: "",
        demo: "",
    },
    {
        title: "Compass Bot",
        description:
            "A Discord bot built with a PostgreSQL-backed application architecture, with features for interacting with users and processing text.",
        technologies: ["Node.js", "Discord.js", "Prisma", "PostgreSQL"],
        github: "",
        demo: "",
    },
];