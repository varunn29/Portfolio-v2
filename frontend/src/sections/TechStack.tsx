import {
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
} from "react-icons/fa6";
import { SiExpress, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";

import { skills } from "../data/skills";

const skillIcons = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJs,
    TypeScript: SiTypescript,
    React: FaReact,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": FaNodeJs,
    Express: SiExpress,
    PostgreSQL: SiPostgresql,
    Git: FaGitAlt,
    GitHub: FaGithub,
};

function TechStack() {
    return (
        <section
            id="tech-stack"
            className="border-b border-border bg-background py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section heading */}
                <div className="mb-14 max-w-2xl sm:mb-16">
                    <div className="mb-5 flex items-center gap-4">
                        <span className="h-px w-8 bg-accent" />

                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-secondary sm:text-xs">
                            03 / Tech Stack
                        </p>
                    </div>

                    <h2 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                        Tools I work with.
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
                        Technologies I use to build interfaces, applications,
                        and the systems behind them.
                    </p>
                </div>

                {/* Skills */}
                <div className="grid gap-10 md:grid-cols-3">
                    {(["Frontend", "Backend", "Tools"] as const).map(
                        (category) => (
                            <div key={category}>
                                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-text-secondary">
                                    {category}
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    {skills
                                        .filter(
                                            (skill) =>
                                                skill.category === category,
                                        )
                                        .map((skill) => {
                                            const Icon = skillIcons[skill.name];

                                            return (
                                                <div
                                                    key={skill.name}
                                                    className="flex items-center gap-3 border border-border bg-surface px-4 py-3 transition-colors duration-200 hover:border-accent/50"
                                                >
                                                    <Icon
                                                        size={19}
                                                        className="shrink-0 text-text-primary"
                                                    />

                                                    <span className="text-sm text-text-secondary">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

export default TechStack;