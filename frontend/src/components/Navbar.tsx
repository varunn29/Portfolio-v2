import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 w-full border-b border-border/50 lg:absolute lg:top-0 lg:left-0">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-5">
                    <a
                        href="#hero"
                        className="font-display text-2xl text-text-primary"
                    >
                        Varun
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#projects"
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Projects
                        </a>

                        <a
                            href="#tech-stack"
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Tech Stack
                        </a>

                        <a
                            href="#open-source"
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Open Source
                        </a>

                        <a
                            href="#contact"
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Contact
                        </a>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-text-primary md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        ☰
                    </button>
                </div>

                {menuOpen && (
                    <div className="flex flex-col gap-5 border-t border-border/50 py-5 md:hidden">
                        <a
                            href="#projects"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Projects
                        </a>

                        <a
                            href="#tech-stack"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Tech Stack
                        </a>

                        <a
                            href="#open-source"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Open Source
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-text-secondary hover:text-accent"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;