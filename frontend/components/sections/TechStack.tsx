const stack = [
    {
        category: "AI / Machine Learning",
        description: "Intelligent models and production AI systems.",
        technologies: [
            "Python",
            "PyTorch",
            "TensorFlow",
            "Scikit-learn",
            "Pandas",
            "NumPy",
        ],
    },
    {
        category: "Generative AI",
        description: "LLM-powered applications and intelligent workflows.",
        technologies: [
            "LLMs",
            "RAG",
            "Embeddings",
            "Vector Search",
            "Prompt Engineering",
            "Tool Calling",
        ],
    },
    {
        category: "Agentic AI",
        description: "Autonomous and collaborative AI systems.",
        technologies: [
            "AI Agents",
            "Multi-Agent Systems",
            "A2A",
            "A2UI",
            "AG-UI",
            "Agent Orchestration",
        ],
    },
    {
        category: "Backend Engineering",
        description: "Scalable APIs and production backend systems.",
        technologies: [
            "Python",
            "FastAPI",
            "REST APIs",
            "Pydantic",
            "SQLAlchemy",
            "Authentication",
        ],
    },
    {
        category: "Frontend Engineering",
        description: "Modern interfaces and interactive applications.",
        technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
        ],
    },
    {
        category: "Data & Databases",
        description: "Data storage, querying and intelligent retrieval.",
        technologies: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "SQL",
            "Vector Databases",
        ],
    },
    {
        category: "DevOps & Cloud",
        description: "Deployment, automation and infrastructure.",
        technologies: [
            "Git",
            "GitHub",
            "Docker",
            "GitHub Actions",
            "CI/CD",
            "Vercel",
            "Render",
            "Cloud",
        ],
    },
    {
        category: "Engineering Practices",
        description: "Building reliable and maintainable software.",
        technologies: [
            "System Design",
            "Testing",
            "API Design",
            "Security",
            "Documentation",
            "Monitoring",
        ],
    },
];

export default function TechStack() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                        Technology Stack
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Tools I use to
                        <span className="text-white/35"> build real products.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/45">
                        A practical engineering stack covering artificial intelligence,
                        software development, data, infrastructure and modern application
                        development.
                    </p>
                </div>

                {/* Stack Grid */}
                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">

                    {stack.map((item, index) => (
                        <article
                            key={item.category}
                            className="group relative bg-black p-8 transition hover:bg-white/[0.03] md:p-10"
                        >
                            {/* Top */}
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <span className="text-xs tracking-[0.2em] text-white/20">
                                        0{index + 1}
                                    </span>

                                    <h3 className="mt-4 text-xl font-semibold">
                                        {item.category}
                                    </h3>
                                </div>

                                <span className="text-xs text-white/20">
                                    STACK
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-4 max-w-lg text-sm leading-6 text-white/40">
                                {item.description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-8 flex flex-wrap gap-2">
                                {item.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50 transition group-hover:border-white/20 group-hover:text-white/70"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            {/* Hover line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}

                </div>

                {/* Bottom statement */}
                <div className="mt-12 border-l border-white/15 pl-5">
                    <p className="text-sm leading-6 text-white/35">
                        The stack changes according to the problem — architecture and
                        reliability come first, technology second.
                    </p>
                </div>

            </div>
        </section>
    );
}