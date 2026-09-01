import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">

                <div>
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight"
                    >
                        CHANDAN<span className="text-white/35">.</span>
                    </Link>

                    <p className="mt-2 text-xs text-white/30">
                        AI Engineer · Software Developer · Agentic AI
                    </p>
                </div>

                <p className="text-xs text-white/25">
                    © {new Date().getFullYear()} Ckmhto.ai. All rights reserved.
                </p>

            </div>
        </footer>
    );
}