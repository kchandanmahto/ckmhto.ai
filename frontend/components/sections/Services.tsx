import {
    ArrowUpRight,
    Bot,
    Code2,
    Database,
    Globe,
    Layers3,
    Smartphone,
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Bot,
        number: "01",
        title: "AI & Agentic AI",
        description:
            "Custom AI applications, intelligent agents, RAG systems and multi-agent workflows.",
    },
    {
        icon: Layers3,
        number: "02",
        title: "AI Product Engineering",
        description:
            "From AI prototype to production-ready product with reliable architecture and APIs.",
    },
    {
        icon: Code2,
        number: "03",
        title: "Software Development",
        description:
            "Scalable backend systems, APIs, SaaS applications and full-stack products.",
    },
    {
        icon: Globe,
        number: "04",
        title: "Web Development",
        description:
            "Modern, responsive and high-performance web applications.",
    },
    {
        icon: Smartphone,
        number: "05",
        title: "Application Development",
        description:
            "Application experiences connected with powerful APIs, databases and AI services.",
    },
    {
        icon: Database,
        number: "06",
        title: "Data & ML Solutions",
        description:
            "Machine learning, data analysis, intelligent pipelines and data-driven systems.",
    },
];

export default function Services() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            Services
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            Have a problem?
                            <span className="text-white/35"> Let&apos;s build the solution.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/45">
                            I work across AI, software, data and product engineering to turn
                            complex ideas into useful, scalable systems.
                        </p>
                    </div>
                </div>

                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.number}
                                className="group relative bg-black p-8 transition hover:bg-white/[0.03]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-white/20">
                                        {service.number}
                                    </span>

                                    <Icon
                                        size={21}
                                        strokeWidth={1.5}
                                        className="text-white/30 transition group-hover:text-white"
                                    />
                                </div>

                                <h3 className="mt-10 text-xl font-semibold">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-white/40">
                                    {service.description}
                                </p>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                            </article>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-lg font-medium">
                            Have an idea worth building?
                        </p>

                        <p className="mt-2 text-sm text-white/35">
                            Tell me what you are trying to build and let&apos;s explore it.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
                    >
                        Start a Project
                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>

            </div>
        </section>
    );
}