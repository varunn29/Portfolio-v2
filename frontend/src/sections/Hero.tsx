import heroMountain from "../assets/Background Image Hero.png";
import {
    FaDiscord,
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden border-b border-border"
        >
            {/* Background */}
            <img
                src={heroMountain}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-center"
            />

            {/* Dark cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />

            {/* Hero content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-start px-6 pb-16 pt-32 lg:items-center lg:py-20">
                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_0.65fr_0.55fr] lg:items-center lg:gap-16">

                    {/* Left content */}
                    <div>
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-text-primary sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
                            Frontend Developer & CS Student
                        </p>

                        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                            Build,
                            <br />
                            Learn,
                            <br />
                            <span className="text-accent">
                                Contribute.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-md text-sm leading-6 text-text-secondary sm:mt-7 sm:text-base">
                            I build web applications, learn by building,
                            and contribute to open source.
                        </p>

                        {/* Actions */}
                        <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-sans text-sm font-medium text-background transition-colors duration-200 hover:bg-text-primary sm:px-6 sm:py-3"
                            >
                                View Projects

                                <span
                                    aria-hidden="true"
                                    className="text-base"
                                >
                                    →
                                </span>
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-md border border-accent/60 px-5 py-2.5 font-sans text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-background sm:px-6 sm:py-3"
                            >
                                Contact Me
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="mt-6 flex items-center gap-5">
                            <a
                                href="https://github.com/varunn29"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-text-primary transition-colors hover:text-accent"
                            >
                                <FaGithub size={18} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/varun-kumar-tomar-a5892b360/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-text-primary transition-colors hover:text-accent"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                            <a
                                href="https://x.com/varunnn29"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                                className="text-text-primary transition-colors hover:text-accent"
                            >
                                <FaXTwitter size={17} />
                            </a>

                            <a
                                href="https://discord.com/users/1386762390493728908"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Discord"
                                className="text-text-primary transition-colors hover:text-accent"
                            >
                                <FaDiscord size={19} />
                            </a>
                        </div>
                    </div>

                    {/* Currently */}
                    <div className="block pt-4 lg:pt-0">
                        <div className="max-w-xs">
                            <div className="mb-6 flex items-center gap-4 sm:mb-7">
                                <span className="h-px w-8 bg-accent" />

                                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-primary">
                                    Currently
                                </p>
                            </div>

                            <div className="space-y-5 sm:space-y-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                        01
                                    </p>

                                    <p className="mt-1 text-sm text-text-primary">
                                        Learning backend
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                        02
                                    </p>

                                    <p className="mt-1 text-sm text-text-primary">
                                        Building projects
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                        03
                                    </p>

                                    <p className="mt-1 text-sm text-text-primary">
                                        Exploring open source
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom-right statement */}
            <div className="absolute bottom-6 right-5 z-10 max-w-[150px] text-right sm:bottom-8 sm:right-8 sm:max-w-[170px] lg:bottom-10 lg:right-10">
                <p className="font-display text-base leading-5 text-text-secondary sm:text-lg sm:leading-6">
                    Better software.
                    <br />
                    A brighter future.
                </p>

                <div className="ml-auto mt-3 h-px w-5 bg-accent sm:mt-4 sm:w-6" />
            </div>
        </section>
    );
}

export default Hero;