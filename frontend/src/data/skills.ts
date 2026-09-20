export interface Skill {
    name: string;
    category: "Frontend" | "Backend" | "Tools";
}

export const skills: Skill[] = [
    {
        name: "HTML",
        category: "Frontend",
    },
    {
        name: "CSS",
        category: "Frontend",
    },
    {
        name: "JavaScript",
        category: "Frontend",
    },
    {
        name: "TypeScript",
        category: "Frontend",
    },
    {
        name: "React",
        category: "Frontend",
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
    },
    {
        name: "Node.js",
        category: "Backend",
    },
    {
        name: "Express",
        category: "Backend",
    },
    {
        name: "PostgreSQL",
        category: "Backend",
    },
    {
        name: "Git",
        category: "Tools",
    },
    {
        name: "GitHub",
        category: "Tools",
    },
];