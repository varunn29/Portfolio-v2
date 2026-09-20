import { projects } from "../data/projects";

function Projects() {
    return (
        <section
            id="projects"
            className="border-b border-border bg-background py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section heading */}
                <div className="mb-14 max-w-2xl sm:mb-16">
                    <div className="mb-5 flex items-center gap-4">
                        <span className="h-px w-8 bg-accent" />

                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-secondary sm:text-xs">
                            02 / Projects
                        </p>
                    </div>

                    <h2 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                        Things I've built.
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
                        A selection of projects I've built while learning
                        frontend development, backend engineering, and
                        application architecture.
                    </p>
                </div>

                {/* Project list */}
                <div>
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="grid gap-8 border-t border-border py-8 sm:py-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
                        >
                            {/* Project information */}
                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="mt-3 font-display text-3xl text-text-primary sm:text-4xl">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Project details */}
                            <div>
                                <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-200 hover:border-accent/50 hover:text-text-primary"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 rounded-full bg-accent"
                                            />

                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project actions */}
                                <div className="mt-7 flex flex-wrap items-center gap-3">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-text-primary"
                                        >
                                            Live Demo
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:text-accent"
                                        >
                                            Source Code
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;