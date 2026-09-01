import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "@/components/chatbot/Chatbot";

export const metadata: Metadata = {
  title: "Chandan Kumar — AI Engineer & Software Developer",
  description:
    "Portfolio of Chandan Kumar — AI Engineer and Software Developer building AI, agentic systems, intelligent applications and scalable software.",
  keywords: [
    "Chandan Kumar",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Agentic AI",
    "Multi-Agent Systems",
    "A2A",
    "A2UI",
    "AG-UI",
    "Python",
    "FastAPI",
    "Next.js",
    "Software Developer",
  ],
  authors: [
    {
      name: "Chandan Kumar",
    },
  ],
  creator: "Chandan Kumar",
  metadataBase: new URL("https://ckmhto.ai"),
  openGraph: {
    title: "Chandan Kumar — AI Engineer & Software Developer",
    description:
      "AI Engineer and Software Developer building intelligent systems, agentic AI, multi-agent applications and scalable software.",
    url: "https://ckmhto.ai",
    siteName: "ckmhto.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}<Chatbot /></body>
    </html>
  );
}