import {
    FaDiscord,
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

function Contact() {
    return (
        <section
            id="contact"
            className="border-b border-border bg-background py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    {/* Section heading */}
                    <div>
                        <div className="mb-5 flex items-center gap-4">
                            <span className="h-px w-8 bg-accent" />

                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-secondary sm:text-xs">
                                05 / Contact
                            </p>
                        </div>

                        <h2 className="font-display text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                            Let's connect.
                        </h2>
                    </div>

                    {/* Contact content */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
                                Interested in working together or talking tech? Feel free to reach out.
                            </p>

                            <a
                                href="mailto:kumartomar774@gmail.com"
                                className="mt-8 inline-flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-medium text-background transition-colors duration-200 hover:bg-text-primary"
                            >
                                <FiMail size={17} />
                                Email Me
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="mt-12 border-t border-border pt-6">
                            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-text-secondary">
                                Find me online
                            </p>

                            <div className="flex items-center gap-5">
                                <a
                                    href="https://github.com/varunn29"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="text-text-primary transition-colors hover:text-accent"
                                >
                                    <FaGithub size={19} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/varun-kumar-tomar-a5892b360/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-text-primary transition-colors hover:text-accent"
                                >
                                    <FaLinkedinIn size={19} />
                                </a>

                                <a
                                    href="https://x.com/varunnn29"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X"
                                    className="text-text-primary transition-colors hover:text-accent"
                                >
                                    <FaXTwitter size={18} />
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;