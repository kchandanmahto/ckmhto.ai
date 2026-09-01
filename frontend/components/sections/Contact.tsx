"use client";

// import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { apiFetch } from "@/lib/api";

const contactLinks = [
    {
        label: "Email",
        value: "pvtkcmog@gmail.com",
        href: "mailto:pvtkcmog@gmail.com",
        icon: "✉",
    },
    {
        label: "GitHub",
        value: "kchandanmahto",
        href: "https://github.com/kchandanmahto",
        icon: "GH",
    },
    {
        label: "LinkedIn",
        value: "mahtochandan",
        href: "https://www.linkedin.com/in/mahtochandan/",
        icon: "in",
    },
    {
        label: "Instagram",
        value: "ckmhto.ai",
        href: "https://www.instagram.com/ckmhto.ai/",
        icon: "IG",
    },
];

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const message = String(formData.get("message") || "");

        try {
            await apiFetch("/api/contact/", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            setSuccess(
                "Thanks! Your message has been received.",
            );

            form.reset();
        } catch {
            setError(
                "Something went wrong. Please try again.",
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="border-t border-theme py-20 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Main CTA */}
                <div className="relative overflow-hidden rounded-3xl border border-theme bg-theme-soft p-7 sm:p-10 md:p-14">

                    <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-theme-primary/5 blur-3xl" />

                    <div className="relative max-w-4xl">
                        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-theme-muted sm:text-sm">
                            Let&apos;s Work Together
                        </p>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl">
                            Have something
                            <span className="block text-theme-muted">
                                worth building?
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-sm leading-6 text-theme-secondary sm:text-base sm:leading-7 md:text-lg">
                            Whether it is an AI product, intelligent
                            agent, software platform or a complex
                            engineering problem, let&apos;s turn the
                            idea into a real system.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-theme-muted">
                            Send a Message
                        </p>

                        <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                            Start a conversation.
                        </h3>

                        <p className="mt-4 max-w-md text-sm leading-6 text-theme-secondary">
                            Have an idea, project or engineering
                            challenge? Send the details and I&apos;ll
                            get back to you.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-theme bg-theme-soft p-6 sm:p-8"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-xs uppercase tracking-[0.2em] text-theme-muted"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    minLength={2}
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-theme bg-transparent px-4 py-3 text-sm text-theme-primary outline-none placeholder:text-theme-muted focus:border-theme-strong"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs uppercase tracking-[0.2em] text-theme-muted"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-theme bg-transparent px-4 py-3 text-sm text-theme-primary outline-none placeholder:text-theme-muted focus:border-theme-strong"
                                />
                            </div>

                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-xs uppercase tracking-[0.2em] text-theme-muted"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                required
                                minLength={10}
                                rows={6}
                                placeholder="Tell me about your project..."
                                className="w-full resize-none rounded-xl border border-theme bg-transparent px-4 py-3 text-sm text-theme-primary outline-none placeholder:text-theme-muted focus:border-theme-strong"
                            />
                        </div>

                        {success && (
                            <p className="mt-5 text-sm text-green-400">
                                {success}
                            </p>
                        )}

                        {error && (
                            <p className="mt-5 text-sm text-red-400">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-theme-primary px-6 py-3 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <Loader2
                                        size={17}
                                        className="animate-spin"
                                    />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <ArrowUpRight
                                        size={17}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-theme bg-theme-soft sm:grid-cols-2 lg:grid-cols-4">
                    {contactLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={
                                item.href.startsWith("mailto:")
                                    ? undefined
                                    : "_blank"
                            }
                            rel={
                                item.href.startsWith("mailto:")
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            className="group bg-theme p-6 transition hover:bg-theme-soft sm:p-7"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex h-5 min-w-8 items-center text-sm font-semibold text-theme-muted transition group-hover:text-theme-primary">
                                    {item.icon}
                                </div>

                                <ArrowUpRight
                                    size={16}
                                    className="text-theme-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-theme-primary"
                                />
                            </div>

                            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-theme-muted">
                                {item.label}
                            </p>

                            <p className="mt-2 truncate text-sm text-theme-secondary">
                                {item.value}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Availability */}
                <div className="mt-10 flex flex-col gap-4 border-t border-theme pt-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-green-400" />

                        <span className="text-sm text-theme-secondary">
                            Open to selected freelance and engineering projects
                        </span>
                    </div>

                    <span className="text-xs uppercase tracking-[0.2em] text-theme-muted">
                        Ranchi · Jharkhand · India
                    </span>
                </div>
            </div>
        </section>
    );
}