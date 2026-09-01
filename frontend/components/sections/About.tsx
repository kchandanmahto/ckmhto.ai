import Image from "next/image";
import { ArrowUpRight, Code2, Cpu, Layers3, Rocket } from "lucide-react";

const focusAreas = [
    {
        icon: Cpu,
        title: "AI Engineering",
        description:
            "Building practical AI systems around LLMs, RAG, intelligent automation and production workflows.",
    },
    {
        icon: Layers3,
        title: "Agentic Systems",
        description:
            "Designing AI agents, multi-agent architectures and intelligent systems that can reason and use tools.",
    },
    {
        icon: Code2,
        title: "Software Engineering",
        description:
            "Developing scalable APIs, full-stack applications and reliable software systems.",
    },
    {
        icon: Rocket,
        title: "Production Mindset",
        description:
            "Moving beyond prototypes with deployment, testing, CI/CD, security and maintainable architecture.",
    },
];

export default function About() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Left */}
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            About Me
                        </p>

                        <h2 className="max-w-md text-4xl font-bold tracking-tight md:text-6xl">
                            Building beyond
                            <span className="text-white/35">
                                {" "}the prototype.
                            </span>
                        </h2>

                        {/* Profile Image */}
                        <div className="relative mt-10 max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                            <Image
                                src="/chandan2.png"
                                alt="Chandan Kumar"
                                width={800}
                                height={1000}
                                className="h-auto w-full object-cover"
                            />

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/40 to-transparent" />
                        </div>
                    </div>

                    {/* Introduction */}
                    <div>
                        <p className="text-xl leading-9 text-white/65 md:text-2xl">
                            I&apos;m an AI-focused software engineer who enjoys turning
                            complex ideas into useful, scalable and production-ready
                            systems.
                        </p>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/40">
                            My work spans artificial intelligence, machine learning, data
                            science, software engineering, full-stack development, agentic
                            systems and modern cloud infrastructure.
                        </p>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-white/40">
                            I care about the complete engineering lifecycle — understanding
                            the problem, designing the architecture, building the system,
                            testing it and getting it into production.
                        </p>

                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                            >
                                Let&apos;s work together

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Focus Areas */}
                <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
                    {focusAreas.map((area) => {
                        const Icon = area.icon;

                        return (
                            <article
                                key={area.title}
                                className="group bg-black p-8 transition hover:bg-white/[0.03] md:p-10"
                            >
                                <Icon
                                    size={23}
                                    strokeWidth={1.5}
                                    className="text-white/35 transition group-hover:text-white"
                                />

                                <h3 className="mt-8 text-xl font-semibold">
                                    {area.title}
                                </h3>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                                    {area.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Philosophy */}
                <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        Engineering Philosophy
                    </p>

                    <blockquote className="mt-6 max-w-4xl text-2xl font-medium leading-10 tracking-tight text-white/70 md:text-4xl md:leading-[1.25]">
                        &quot;Good engineering is not about using the most technology.
                        It&apos;s about building the right system for the problem.&quot;
                    </blockquote>
                </div>

            </div>
        </section>
    );
}