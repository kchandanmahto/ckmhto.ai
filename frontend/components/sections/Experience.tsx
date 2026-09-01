import {
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Rocket,
    Terminal,
} from "lucide-react";

const journey = [
    {
        year: "01",
        period: "Foundation",
        icon: Terminal,
        title: "Software Development",
        description:
            "Started building software systems and developed a strong foundation in programming, problem solving, APIs and application development.",
        focus: ["Programming", "APIs", "Web Development", "Git"],
    },
    {
        year: "02",
        period: "Expansion",
        icon: Code2,
        title: "Full-Stack Engineering",
        description:
            "Expanded into frontend and backend engineering, building complete applications from user interface to server-side systems and databases.",
        focus: ["React", "Next.js", "Python", "FastAPI", "Databases"],
    },
    {
        year: "03",
        period: "Intelligence",
        icon: BrainCircuit,
        title: "AI / ML Engineering",
        description:
            "Moved deeper into machine learning, data science and generative AI, focusing on turning models into useful applications.",
        focus: ["Machine Learning", "Data Science", "LLMs", "RAG"],
    },
    {
        year: "04",
        period: "Systems",
        icon: Rocket,
        title: "Agentic AI & Production Systems",
        description:
            "Focused on autonomous agents, multi-agent architectures, intelligent interfaces and production-ready AI systems.",
        focus: ["AI Agents", "Multi-Agent", "A2A", "A2UI", "Cloud"],
    },
];

export default function Experience() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-20 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            Experience & Journey
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            From writing code
                            <span className="text-white/35">
                                {" "}to engineering systems.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/40">
                            A continuous progression from software development to AI
                            engineering and intelligent production systems.
                        </p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">

                    {/* Vertical line */}
                    <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-white/10 md:block" />

                    <div className="space-y-6">
                        {journey.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group relative grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04] md:grid-cols-[110px_1fr] md:p-10"
                                >

                                    {/* Timeline marker */}
                                    <div className="relative hidden md:block">
                                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black">
                                            <Icon
                                                size={16}
                                                strokeWidth={1.5}
                                                className="text-white/40 transition group-hover:text-white"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                            <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                                                {item.period}
                                            </span>

                                            <span className="text-xs text-white/20">
                                                {item.year}
                                            </span>
                                        </div>

                                        <h3 className="mt-5 text-2xl font-semibold md:text-3xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/40">
                                            {item.description}
                                        </p>

                                        <div className="mt-7 flex flex-wrap gap-2">
                                            {item.focus.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Hover indicator */}
                                    <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Resume CTA */}
                <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:justify-between md:p-10">
                    <div>
                        <p className="text-lg font-medium">
                            Want the complete professional journey?
                        </p>

                        <p className="mt-2 text-sm text-white/35">
                            A detailed resume covering experience, projects and technical
                            expertise.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="group flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition hover:border-white/25 hover:text-white"
                    >
                        View Resume
                        <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>

            </div>
        </section>
    );
}