"use client";

import { motion } from "framer-motion";
import {
    Bot,
    BrainCircuit,
    Database,
    Eye,
    Network,
    Wrench,
    ArrowUpRight,
} from "lucide-react";

const experiments = [
    {
        number: "01",
        icon: Database,
        type: "RAG SYSTEM",
        title: "Retrieval-Augmented Generation",
        description:
            "Explore how an AI system retrieves relevant knowledge and uses it to generate grounded responses.",
        tags: ["RAG", "Embeddings", "Vector Search"],
    },
    {
        number: "02",
        icon: Bot,
        type: "AI AGENTS",
        title: "Autonomous AI Agent",
        description:
            "An interactive environment demonstrating reasoning, planning, tool usage and task execution.",
        tags: ["Agents", "Tools", "LLM"],
    },
    {
        number: "03",
        icon: Network,
        type: "MULTI-AGENT",
        title: "Multi-Agent Collaboration",
        description:
            "Multiple specialized agents collaborate through an orchestrated workflow to solve complex problems.",
        tags: ["Multi-Agent", "Orchestration", "A2A"],
    },
    {
        number: "04",
        icon: BrainCircuit,
        type: "A2UI",
        title: "AI Generated Interfaces",
        description:
            "Explore an AI system that can dynamically describe and render interface components based on user intent.",
        tags: ["A2UI", "AI UI", "Dynamic UI"],
    },
    {
        number: "05",
        icon: Wrench,
        type: "TOOL CALLING",
        title: "AI Tool Execution",
        description:
            "See how an intelligent system decides when to use external tools and incorporates their results.",
        tags: ["Tools", "APIs", "Function Calling"],
    },
    {
        number: "06",
        icon: Eye,
        type: "VISION AI",
        title: "Multimodal Intelligence",
        description:
            "Experiment with AI systems capable of understanding and reasoning over visual information.",
        tags: ["Vision", "Multimodal", "LLM"],
    },
];

export default function Lab() {
    return (
        <section className="border-t border-white/10 py-32">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/35">
                            AI Engineering Lab
                        </p>

                        <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
                            Don&apos;t just read about it.
                            <span className="text-white/35">
                                {" "}Interact with it.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-lg text-base leading-7 text-white/45">
                            A collection of experiments and interactive systems exploring
                            modern AI engineering, agentic workflows and intelligent
                            interfaces.
                        </p>
                    </div>
                </div>

                {/* Experiments */}
                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                    {experiments.map((experiment, index) => {
                        const Icon = experiment.icon;

                        return (
                            <motion.article
                                key={experiment.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                className="group relative bg-black p-8 transition hover:bg-white/[0.03]"
                            >
                                {/* Top */}
                                <div className="mb-12 flex items-center justify-between">
                                    <span className="text-xs tracking-[0.2em] text-white/20">
                                        {experiment.number}
                                    </span>

                                    <Icon
                                        size={22}
                                        strokeWidth={1.5}
                                        className="text-white/35 transition duration-300 group-hover:text-white"
                                    />
                                </div>

                                {/* Type */}
                                <p className="text-[10px] tracking-[0.25em] text-white/25">
                                    {experiment.type}
                                </p>

                                {/* Title */}
                                <h3 className="mt-3 text-xl font-semibold">
                                    {experiment.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-6 text-white/40">
                                    {experiment.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-7 flex flex-wrap gap-2">
                                    {experiment.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/35"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Explore */}
                                <div className="mt-8 flex items-center gap-2 text-sm text-white/30 transition group-hover:text-white">
                                    Explore experiment
                                    <ArrowUpRight
                                        size={15}
                                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>

                                {/* Hover line */}
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                            </motion.article>
                        );
                    })}
                </div>

                {/* Lab footer */}
                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-2xl text-sm leading-6 text-white/30">
                        These experiments will progressively become live interactive
                        demonstrations as the engineering lab evolves.
                    </p>

                    <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                        Experimental Systems
                    </span>
                </div>

            </div>
        </section>
    );
}