function OpenSource() {
    return (
        <section
            id="open-source"
            className="border-b border-border bg-background py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                    {/* Section heading */}
                    <div>
                        <div className="mb-5 flex items-center gap-4">
                            <span className="h-px w-8 bg-accent" />

                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-secondary sm:text-xs">
                                04 / Open Source
                            </p>
                        </div>

                        <h2 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                            Learning in public.
                        </h2>
                    </div>

                    {/* Content */}
                    <div>
                        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                            I'm exploring open source to learn from real
                            codebases, understand how projects are built and
                            maintained, and work toward making meaningful
                            contributions.
                        </p>

                        <div className="mt-10 border-t border-border">
                            <div className="flex items-start gap-5 border-b border-border py-6">
                                <span className="pt-0.5 text-xs uppercase tracking-[0.18em] text-accent">
                                    01
                                </span>

                                <div>
                                    <h3 className="text-sm font-medium text-text-primary">
                                        Exploring projects
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        Exploring established open-source
                                        projects to understand their codebases,
                                        development workflows, and communities.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 border-b border-border py-6">
                                <span className="pt-0.5 text-xs uppercase tracking-[0.18em] text-accent">
                                    02
                                </span>

                                <div>
                                    <h3 className="text-sm font-medium text-text-primary">
                                        Understanding issues
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        Working through issues and codebases to
                                        understand problems before attempting
                                        meaningful changes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 py-6">
                                <span className="pt-0.5 text-xs uppercase tracking-[0.18em] text-accent">
                                    03
                                </span>

                                <div>
                                    <h3 className="text-sm font-medium text-text-primary">
                                        Preparing to contribute
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                                        Building the understanding and
                                        experience needed to make useful
                                        contributions and collaborate with
                                        other developers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://github.com/varunn29"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent"
                        >
                            View GitHub
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OpenSource;

