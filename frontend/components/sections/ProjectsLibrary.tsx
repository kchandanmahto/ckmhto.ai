"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";
import { apiFetch } from "@/lib/api";

type Project = {
    id: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    featured: boolean;
};

const categories = [
    "All",
    "AI",
    "Agentic AI",
    "Machine Learning",
    "Data Science",
    "Full Stack",
    "Web",
    "App",
    "DevOps",
] as const;

export default function ProjectsLibrary() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeCategory, setActiveCategory] =
        useState<(typeof categories)[number]>("All");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await apiFetch<{
                    count: number;
                    projects: Project[];
                }>("/api/projects/");

                setProjects(data.projects);
            } catch {
                setError("Unable to load projects.");
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") {
            return projects;
        }

        return projects.filter(
            (project) =>
                project.category === activeCategory,
        );
    }, [activeCategory, projects]);

    return (
        <section className="border-t border-theme py-20 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Header */}
                <div className="mb-10 sm:mb-12">
                    <p className="mb-4 text-xs uppercase tracking-[0.3em] text-theme-muted sm:text-sm">
                        Project Library
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Everything
                        <span className="text-theme-muted">
                            {" "}I&apos;ve built.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-6 text-theme-secondary sm:text-base sm:leading-7">
                        A growing collection of AI systems, software
                        applications, machine learning projects,
                        data solutions and engineering experiments.
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => {
                        const active =
                            activeCategory === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                onClick={() =>
                                    setActiveCategory(category)
                                }
                                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${active
                                        ? "border-theme-strong bg-theme-primary text-[var(--accent-foreground)]"
                                        : "border-theme text-theme-muted hover:text-theme-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Status */}
                <div className="mb-6 text-xs uppercase tracking-[0.2em] text-theme-muted">
                    {loading
                        ? "Loading projects..."
                        : `${filteredProjects.length} Projects`}
                </div>

                {/* Error */}
                {error && (
                    <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-80 animate-pulse rounded-3xl border border-theme bg-theme-soft"
                            />
                        ))}
                    </div>
                )}

                {/* Empty */}
                {!loading &&
                    !error &&
                    filteredProjects.length === 0 && (
                        <div className="rounded-3xl border border-theme p-10 text-center text-sm text-theme-muted">
                            No projects found in this category.
                        </div>
                    )}

                {/* Projects */}
                {!loading && !error && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="group relative flex min-h-80 flex-col overflow-hidden rounded-3xl border border-theme bg-theme-soft p-6 transition hover:border-theme-strong sm:p-7"
                            >
                                {/* Category */}
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full border border-theme px-3 py-1 text-xs text-theme-muted">
                                        {project.category}
                                    </span>

                                    {project.featured && (
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-theme-muted">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-theme-primary">
                                        {project.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-theme-secondary">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="text-xs text-theme-muted"
                                            >
                                                #
                                                {technology.replaceAll(
                                                    " ",
                                                    "-",
                                                )}
                                            </span>
                                        ),
                                    )}
                                </div>

                                {/* Links */}
                                <div className="mt-auto flex gap-2 pt-8">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="flex items-center gap-2 rounded-full border border-theme px-4 py-2 text-xs text-theme-secondary transition hover:text-theme-primary"
                                    >
                                        View Project
                                        <ArrowUpRight size={15} />
                                    </Link>

                                    <button
                                        type="button"
                                        className="flex items-center gap-2 rounded-full border border-theme px-4 py-2 text-xs text-theme-secondary transition hover:text-theme-primary"
                                    >
                                        <GitBranch size={15} />
                                        GitHub
                                    </button>
                                </div>

                                {/* Hover line */}
                                <div className="absolute bottom-0 left-0 h-px w-0 bg-theme-primary transition-all duration-500 group-hover:w-full" />
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}