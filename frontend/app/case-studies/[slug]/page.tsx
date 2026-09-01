import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;

    const study = caseStudies.find((item) => item.id === slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-5xl px-6 pb-32 pt-32">

                {/* Back */}
                <Link
                    href="/"
                    className="mb-12 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
                >
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </Link>

                {/* Header */}
                <header>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                        {study.category}
                    </p>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-7xl">
                        {study.title}
                    </h1>

                    <p className="mt-7 max-w-3xl text-lg leading-8 text-white/45">
                        {study.shortDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {study.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Problem */}
                <section className="mt-24 border-t border-white/10 pt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        01 — Problem
                    </p>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-white/55">
                        {study.problem}
                    </p>
                </section>

                {/* Solution */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        02 — Solution
                    </p>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-white/55">
                        {study.solution}
                    </p>
                </section>

                {/* Architecture */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        03 — Architecture
                    </p>

                    <div className="mt-8 space-y-3">
                        {study.architecture.map((layer, index) => (
                            <div
                                key={layer}
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                            >
                                <span className="text-xs text-white/20">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="text-sm text-white/65">
                                    {layer}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Engineering Decisions */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        04 — Engineering Decisions
                    </p>

                    <ul className="mt-8 space-y-4">
                        {study.engineeringDecisions.map((decision) => (
                            <li
                                key={decision}
                                className="border-l border-white/15 pl-5 text-sm leading-7 text-white/50"
                            >
                                {decision}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Challenges */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        05 — Challenges
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {study.challenges.map((challenge) => (
                            <span
                                key={challenge}
                                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/45"
                            >
                                {challenge}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Results */}
                <section className="mt-20 border-t border-white/10 pt-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                        06 — Results
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {study.results.map((result) => (
                            <div
                                key={result}
                                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/50"
                            >
                                {result}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Links */}
                <div className="mt-16 flex flex-wrap gap-3 border-t border-white/10 pt-10">
                    {study.github && (
                        <Link
                            href={study.github}
                            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 hover:text-white"
                        >
                            GitHub
                            <ArrowUpRight size={16} />
                        </Link>
                    )}

                    {study.live && (
                        <Link
                            href={study.live}
                            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 hover:text-white"
                        >
                            Live Demo
                            <ArrowUpRight size={16} />
                        </Link>
                    )}
                </div>

            </div>
        </main>
    );
}