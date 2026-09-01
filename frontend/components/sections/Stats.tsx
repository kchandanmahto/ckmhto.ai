const stats = [
    {
        value: "20+",
        label: "Projects Built",
        description: "AI, software, web and data systems",
    },
    {
        value: "10+",
        label: "AI Systems",
        description: "LLM, RAG, agents and intelligent applications",
    },
    {
        value: "5+",
        label: "Production Deployments",
        description: "Applications deployed for real-world usage",
    },
    {
        value: "15+",
        label: "Technologies",
        description: "Across AI, backend, frontend and infrastructure",
    },
];

export default function Stats() {
    return (
        <section className="border-t border-white/10 py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-14">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                        By The Numbers
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Built with
                        <span className="text-white/35"> real engineering.</span>
                    </h2>
                </div>

                {/* Stats */}
                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <article
                            key={stat.label}
                            className="group bg-black p-8 transition hover:bg-white/[0.03] md:p-10"
                        >
                            <p className="text-5xl font-bold tracking-tight md:text-6xl">
                                {stat.value}
                            </p>

                            <h3 className="mt-6 text-base font-medium">
                                {stat.label}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/35">
                                {stat.description}
                            </p>

                            <div className="mt-8 h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}
                </div>

                {/* Statement */}
                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-2xl text-sm leading-6 text-white/35">
                        Numbers will be backed by actual projects, deployments and
                        engineering work — no inflated portfolio statistics.
                    </p>

                    <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                        Proof over claims
                    </span>
                </div>

            </div>
        </section>
    );
}