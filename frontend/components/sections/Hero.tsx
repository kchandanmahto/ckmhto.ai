import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32">

                <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

                    {/* LEFT — Content */}
                    <div>

                        {/* Status */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            Available for selected projects
                        </div>

                        {/* Heading */}
                        <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
                            AI Engineer
                            <span className="block text-white/35">
                                &amp; Software Developer
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
                            I build intelligent, scalable and production-ready
                            systems across AI, machine learning, data science,
                            software engineering, agentic AI and multi-agent
                            architectures.
                        </p>

                        {/* CTA */}
                        <div className="mt-10 flex flex-wrap gap-4">

                            <Link
                                href="/projects"
                                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/85"
                            >
                                Explore My Work

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-full border border-white/15 px-6 py-3 font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                            >
                                Let&apos;s Build Something
                            </Link>

                        </div>

                        {/* Expertise strip */}
                        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/35">
                            <span>AI / ML</span>
                            <span>Agentic AI</span>
                            <span>Multi-Agent Systems</span>
                            <span>A2A</span>
                            <span>A2UI</span>
                            <span>AG-UI</span>
                            <span>Full Stack</span>
                            <span>Cloud &amp; DevOps</span>
                        </div>

                    </div>

                    {/* RIGHT — Chandan Image */}
                    <div className="relative flex justify-center lg:justify-end">

                        {/* Image glow */}
                        <div className="pointer-events-none absolute inset-10 rounded-full bg-white/10 blur-3xl" />

                        {/* Image container */}
                        <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">

                            <Image
                                src="/chandan1.png"
                                alt="Chandan Kumar — AI Engineer and Software Developer"
                                width={900}
                                height={1200}
                                priority
                                className="h-auto w-full object-cover"
                            />

                            {/* Bottom gradient */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/50 to-transparent" />

                        </div>

                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-white/30 md:flex">
                Scroll to explore
                <ArrowDown size={14} />
            </div>

        </section>
    );
}