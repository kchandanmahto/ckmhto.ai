import {
    BrainCircuit,
    Bot,
    Database,
    Globe,
    Smartphone,
    Cloud,
} from "lucide-react";

const expertise = [
    {
        number: "01",
        icon: BrainCircuit,
        title: "AI / Machine Learning",
        description:
            "Production-ready AI and ML systems for intelligent automation, prediction, classification, NLP and real-world decision making.",
        technologies: ["Python", "PyTorch", "Scikit-learn", "LLMs"],
    },
    {
        number: "02",
        icon: Bot,
        title: "Agentic AI",
        description:
            "Autonomous agents, multi-agent workflows and intelligent systems capable of reasoning, planning, tool usage and collaboration.",
        technologies: ["AI Agents", "A2A", "A2UI", "AG-UI"],
    },
    {
        number: "03",
        icon: Database,
        title: "Data Science",
        description:
            "Data-driven solutions including analysis, visualization, statistical modeling and machine learning pipelines.",
        technologies: ["Pandas", "NumPy", "SQL", "Analytics"],
    },
    {
        number: "04",
        icon: Globe,
        title: "Software Engineering",
        description:
            "Scalable backend systems, APIs, SaaS platforms and full-stack applications designed for production.",
        technologies: ["Python", "FastAPI", "React", "Next.js"],
    },
    {
        number: "05",
        icon: Smartphone,
        title: "Web & App Development",
        description:
            "Modern responsive web and mobile experiences with clean interfaces and powerful backend integrations.",
        technologies: ["TypeScript", "React", "Next.js", "Mobile"],
    },
    {
        number: "06",
        icon: Cloud,
        title: "Cloud & DevOps",
        description:
            "Containerized deployments, CI/CD pipelines and production infrastructure for reliable software delivery.",
        technologies: ["Docker", "GitHub Actions", "Cloud", "CI/CD"],
    },
];

export default function Expertise() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            What I Build
                        </p>

                        <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
                            From intelligent ideas
                            <span className="text-white/35"> to real systems.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/45">
                            I combine AI engineering, software development and modern
                            infrastructure to build systems that are useful beyond a
                            prototype.
                        </p>
                    </div>
                </div>

                {/* Expertise Grid */}
                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                    {expertise.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.number}
                                className="group relative bg-black p-8 transition hover:bg-white/[0.03]"
                            >
                                {/* Number */}
                                <div className="mb-12 flex items-center justify-between">
                                    <span className="text-sm text-white/25">
                                        {item.number}
                                    </span>

                                    <Icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-white/35 transition group-hover:text-white"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 min-h-24 text-sm leading-6 text-white/45">
                                    {item.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {item.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover line */}
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}