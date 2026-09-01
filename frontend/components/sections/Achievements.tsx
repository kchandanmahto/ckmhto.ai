import {
    ArrowUpRight,
    Award,
    BookOpen,
    Code2,
    Trophy,
} from "lucide-react";

const achievements = [
    {
        icon: Trophy,
        title: "Projects & Engineering",
        description:
            "Built and explored real-world systems across AI, machine learning, software engineering and modern application development.",
    },
    {
        icon: Code2,
        title: "Open Source & GitHub",
        description:
            "Building, documenting and experimenting with software systems, AI applications and developer-focused projects.",
    },
    {
        icon: Award,
        title: "Certifications & Recognition",
        description:
            "Professional certifications, technical achievements and recognitions will be showcased here.",
    },
];

const articles = [
    {
        number: "01",
        category: "AI Engineering",
        title: "Building Production-Ready AI Systems",
        description:
            "Engineering considerations behind turning an AI prototype into a reliable production application.",
    },
    {
        number: "02",
        category: "Agentic AI",
        title: "Designing Multi-Agent Systems",
        description:
            "Exploring orchestration, agent communication, tool usage and reliable multi-agent workflows.",
    },
    {
        number: "03",
        category: "Generative UI",
        title: "Understanding A2UI",
        description:
            "Exploring how AI systems can dynamically communicate interface experiences instead of returning text alone.",
    },
];

export default function Achievements() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            Proof & Knowledge
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            Build.
                            <span className="text-white/35"> Learn. Share.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/45">
                            Beyond projects, I document engineering ideas, experiments,
                            technical lessons and the systems I build.
                        </p>
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-20">
                    <div className="mb-8 flex items-center gap-3">
                        <Award size={18} className="text-white/40" />

                        <h3 className="text-sm uppercase tracking-[0.2em] text-white/40">
                            Achievements
                        </h3>
                    </div>

                    <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
                        {achievements.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group bg-black p-8 transition hover:bg-white/[0.03]"
                                >
                                    <Icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-white/35 transition group-hover:text-white"
                                    />

                                    <h4 className="mt-8 text-lg font-semibold">
                                        {item.title}
                                    </h4>

                                    <p className="mt-4 text-sm leading-6 text-white/40">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Technical Writing */}
                <div>
                    <div className="mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <BookOpen size={18} className="text-white/40" />

                            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40">
                                Technical Writing
                            </h3>
                        </div>

                        <span className="hidden text-xs text-white/20 md:block">
                            KNOWLEDGE / ENGINEERING
                        </span>
                    </div>

                    <div className="space-y-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
                        {articles.map((article) => (
                            <article
                                key={article.number}
                                className="group relative bg-black p-7 transition hover:bg-white/[0.03] md:p-9"
                            >
                                <div className="grid gap-6 md:grid-cols-[70px_180px_1fr_auto] md:items-start">

                                    <span className="text-sm text-white/20">
                                        {article.number}
                                    </span>

                                    <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                                        {article.category}
                                    </span>

                                    <div>
                                        <h4 className="text-xl font-semibold">
                                            {article.title}
                                        </h4>

                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
                                            {article.description}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-sm text-white/35 transition hover:text-white"
                                    >
                                        Read
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}