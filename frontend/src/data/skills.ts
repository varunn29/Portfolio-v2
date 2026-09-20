export interface Skill {
    name:
        | "HTML"
        | "CSS"
        | "JavaScript"
        | "TypeScript"
        | "React"
        | "Tailwind CSS"
        | "Node.js"
        | "Express"
        | "PostgreSQL"
        | "Git"
        | "GitHub";
    category: "Frontend" | "Backend" | "Tools";
}

export const skills: Skill[] = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
];