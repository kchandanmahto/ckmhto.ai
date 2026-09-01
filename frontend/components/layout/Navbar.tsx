"use client";

import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "AI Lab", href: "/lab" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const [light, setLight] = useState(() => {
        if (typeof window === "undefined") {
            return false;
        }

        return localStorage.getItem("theme") === "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("light", light);
        localStorage.setItem("theme", light ? "light" : "dark");
    }, [light]);

    function toggleTheme() {
        setLight((value) => !value);
    }

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function closeMenu() {
        setOpen(false);
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
            <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-theme bg-theme-surface/90 px-4 py-3 backdrop-blur-xl sm:px-5">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="shrink-0 text-base font-bold tracking-tight text-theme-primary sm:text-lg"
                >
                    CHANDAN<span className="opacity-40">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-5 lg:flex xl:gap-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-sm text-theme-muted transition hover:text-theme-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 lg:flex">

                    {/* Theme */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            light
                                ? "Switch to dark mode"
                                : "Switch to light mode"
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-theme text-theme-muted transition hover:bg-theme-soft hover:text-theme-primary"
                    >
                        {light ? (
                            <Moon size={16} />
                        ) : (
                            <Sun size={16} />
                        )}
                    </button>

                    {/* Let's Talk */}
                    <Link
                        href="/contact"
                        className="rounded-full bg-theme-primary px-5 py-2 text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-80"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>

                {/* Mobile / Tablet Actions */}
                <div className="flex items-center gap-2 lg:hidden">

                    {/* Theme */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            light
                                ? "Switch to dark mode"
                                : "Switch to light mode"
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-theme text-theme-muted transition hover:bg-theme-soft hover:text-theme-primary"
                    >
                        {light ? (
                            <Moon size={17} />
                        ) : (
                            <Sun size={17} />
                        )}
                    </button>

                    {/* Menu */}
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-label={
                            open
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={open}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-theme text-theme-primary transition hover:bg-theme-soft"
                    >
                        {open ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile / Tablet Menu */}
            {open && (
                <div className="mx-3 mt-2 rounded-2xl border border-theme bg-theme-surface/95 p-4 backdrop-blur-xl sm:mx-4 lg:hidden">
                    <div className="flex flex-col">

                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="rounded-xl px-3 py-3 text-sm text-theme-secondary transition hover:bg-theme-soft hover:text-theme-primary"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="mt-2 rounded-xl bg-theme-primary px-4 py-3 text-center text-sm font-medium text-[var(--accent-foreground)] transition hover:opacity-80"
                        >
                            Let&apos;s Talk
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}