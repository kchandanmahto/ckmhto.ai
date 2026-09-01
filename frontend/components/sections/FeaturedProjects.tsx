import Link from "next/link";
import { ArrowUpRight, GitBranch } from "lucide-react";
const projects = [
    {
        number: "01",
        category: "Agentic AI",
        title: "Multi-Agent Intelligence System",
        description:
            "A production-oriented multi-agent system designed to coordinate specialized AI agents, tools and workflows to solve complex tasks.",
        technologies: ["Python", "FastAPI", "LLMs", "Multi-Agent"],
        github: "#",
        live: "#",
    },
    {
        number: "02",
        category: "AI Engineering",
        title: "Intelligent Knowledge Assistant",
        description:
            "An AI-powered knowledge system that combines retrieval, contextual reasoning and conversational interaction to answer questions from structured knowledge.",
        technologies: ["Python", "RAG", "Vector DB", "LLM"],
        github: "#",
        live: "#",
    },
    {
        number: "03",
        category: "Full Stack",
        title: "AI-Powered Application",
        description:
            "A full-stack application combining a modern web interface with intelligent backend services and AI-powered workflows.",
        technologies: ["Next.js", "TypeScript", "FastAPI", "AI"],
        github: "#",
        live: "#",
    },
];

export default function FeaturedProjects() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            Selected Work
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            Projects that turn
                            <span className="text-white/35"> ideas into systems.</span>
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="group flex w-fit items-center gap-2 text-sm text-white/50 transition hover:text-white"
                    >
                        View all projects
                        <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>

                {/* Projects */}
                <div className="space-y-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group relative bg-black p-7 transition hover:bg-white/[0.025] md:p-10"
                        >
                            <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-start">

                                {/* Number */}
                                <span className="text-sm text-white/25">
                                    {project.number}
                                </span>

                                {/* Main content */}
                                <div>
                                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/35">
                                        {project.category}
                                    </p>

                                    <h3 className="text-2xl font-semibold md:text-3xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} GitHub`}
                                        className="rounded-full border border-white/10 p-3 text-white/40 transition hover:border-white/30 hover:text-white"
                                    >
                                        <GitBranch size={18} />
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} live demo`}
                                        className="rounded-full border border-white/10 p-3 text-white/40 transition hover:border-white/30 hover:text-white"
                                    >
                                        <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}