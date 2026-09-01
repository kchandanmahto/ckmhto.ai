import {
    BrainCircuit,
    Database,
    Globe,
    Server,
    ShieldCheck,
    Workflow,
} from "lucide-react";

const layers = [
    {
        icon: Globe,
        title: "Experience Layer",
        description:
            "Modern interfaces, dashboards, AI chat experiences and responsive applications.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
    {
        icon: BrainCircuit,
        title: "Intelligence Layer",
        description:
            "LLMs, RAG pipelines, AI agents, multi-agent orchestration and intelligent workflows.",
        technologies: ["LLMs", "RAG", "Agents", "A2A", "A2UI"],
    },
    {
        icon: Workflow,
        title: "Application Layer",
        description:
            "Business logic, APIs, services and reliable application workflows.",
        technologies: ["Python", "FastAPI", "REST APIs"],
    },
    {
        icon: Database,
        title: "Data Layer",
        description:
            "Structured data, caching, vector search and persistent application state.",
        technologies: ["PostgreSQL", "Redis", "Vector DB"],
    },
    {
        icon: Server,
        title: "Infrastructure Layer",
        description:
            "Containerized applications, automated deployments and scalable cloud infrastructure.",
        technologies: ["Docker", "CI/CD", "Cloud"],
    },
    {
        icon: ShieldCheck,
        title: "Security & Reliability",
        description:
            "Authentication, validation, rate limiting, monitoring and production safeguards.",
        technologies: ["Auth", "Validation", "Monitoring"],
    },
];

export default function Architecture() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            Engineering Architecture
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            Systems designed
                            <span className="text-white/35">
                                {" "}from interface to infrastructure.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/45">
                            I approach projects as complete systems — connecting user
                            experience, application logic, intelligence, data and
                            infrastructure into one reliable architecture.
                        </p>
                    </div>
                </div>

                {/* Architecture diagram */}
                <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10">

                    <div className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-white/25">
                        System Flow
                    </div>

                    <div className="flex flex-col items-center">

                        {/* User */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm">
                            User / Client
                        </div>

                        <div className="h-10 w-px bg-white/10" />

                        {/* Frontend */}
                        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                            <p className="font-medium">Frontend / Experience</p>
                            <p className="mt-2 text-xs text-white/35">
                                Web · Mobile · AI Interfaces · A2UI
                            </p>
                        </div>

                        <div className="h-10 w-px bg-white/10" />

                        {/* Backend */}
                        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                            <p className="font-medium">API & Application Layer</p>
                            <p className="mt-2 text-xs text-white/35">
                                FastAPI · Services · Authentication · Business Logic
                            </p>
                        </div>

                        <div className="h-10 w-px bg-white/10" />

                        {/* AI */}
                        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                            <p className="font-medium">AI / Agentic Intelligence</p>
                            <p className="mt-2 text-xs text-white/35">
                                LLMs · RAG · Agents · Multi-Agent · A2A
                            </p>
                        </div>

                        <div className="h-10 w-px bg-white/10" />

                        {/* Data */}
                        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
                            <p className="font-medium">Data & Infrastructure</p>
                            <p className="mt-2 text-xs text-white/35">
                                PostgreSQL · Redis · Vector DB · Docker · Cloud
                            </p>
                        </div>

                    </div>
                </div>

                {/* Architecture capabilities */}
                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                    {layers.map((layer) => {
                        const Icon = layer.icon;

                        return (
                            <article
                                key={layer.title}
                                className="group bg-black p-8 transition hover:bg-white/[0.03]"
                            >
                                <div className="mb-8 flex items-center justify-between">
                                    <Icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-white/40 transition group-hover:text-white"
                                    />

                                    <span className="text-xs text-white/20">
                                        ARCH
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold">
                                    {layer.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-white/40">
                                    {layer.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {layer.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}