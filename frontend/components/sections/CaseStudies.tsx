import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudies() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            Case Studies
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            Behind the
                            <span className="text-white/35"> projects.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/40">
                            A deeper look into the problems, architecture, engineering
                            decisions and challenges behind selected systems.
                        </p>
                    </div>
                </div>

                {/* Case Studies */}
                <div className="space-y-4">
                    {caseStudies.map((study, index) => (
                        <article
                            key={study.id}
                            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04] md:p-10"
                        >
                            <div className="grid gap-10 md:grid-cols-[80px_1fr_auto]">

                                {/* Number */}
                                <span className="text-sm text-white/20">
                                    0{index + 1}
                                </span>

                                {/* Content */}
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                                        {study.category}
                                    </p>

                                    <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                                        {study.title}
                                    </h3>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                                        {study.shortDescription}
                                    </p>

                                    {/* Tech */}
                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {study.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex items-start">
                                    <Link
                                        href={`/case-studies/${study.id}`}
                                        className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition hover:border-white/30 hover:text-white"
                                    >
                                        Read Case Study
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </div>

                            </div>

                            {/* Hover */}
                            <div className="mt-8 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}