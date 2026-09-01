export type ProjectCategory =
    | "AI"
    | "Agentic AI"
    | "Machine Learning"
    | "Data Science"
    | "Full Stack"
    | "Web"
    | "App"
    | "DevOps";

export type Project = {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    technologies: string[];
    featured?: boolean;
    github?: string;
    live?: string;
};

export const projects: Project[] = [
    {
        id: "multi-agent-intelligence",
        title: "Multi-Agent Intelligence System",
        category: "Agentic AI",
        description:
            "A multi-agent architecture where specialized AI agents collaborate to solve complex tasks through orchestration and tool usage.",
        technologies: ["Python", "FastAPI", "LLMs", "Multi-Agent", "A2A"],
        featured: true,
        github: "#",
        live: "#",
    },
    {
        id: "ai-knowledge-assistant",
        title: "AI Knowledge Assistant",
        category: "AI",
        description:
            "A knowledge-based AI application combining retrieval, embeddings and language models to generate contextual responses.",
        technologies: ["Python", "RAG", "Embeddings", "Vector DB", "LLM"],
        featured: true,
        github: "#",
        live: "#",
    },
    {
        id: "ml-prediction-system",
        title: "Machine Learning Prediction System",
        category: "Machine Learning",
        description:
            "A machine learning system designed to transform structured data into predictive insights.",
        technologies: ["Python", "Pandas", "Scikit-learn", "SQL"],
        github: "#",
    },
    {
        id: "data-analytics-platform",
        title: "Data Analytics Platform",
        category: "Data Science",
        description:
            "An analytics platform for exploring datasets, generating insights and presenting information through interactive visualizations.",
        technologies: ["Python", "Pandas", "NumPy", "SQL", "Analytics"],
        github: "#",
    },
    {
        id: "ai-saas-platform",
        title: "AI SaaS Platform",
        category: "Full Stack",
        description:
            "A full-stack SaaS application combining modern web technologies with AI-powered backend capabilities.",
        technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
        github: "#",
        live: "#",
    },
    {
        id: "ai-web-application",
        title: "AI Web Application",
        category: "Web",
        description:
            "A responsive web application integrating intelligent features with a modern user experience.",
        technologies: ["React", "Next.js", "TypeScript", "AI"],
        github: "#",
        live: "#",
    },
    {
        id: "intelligent-mobile-app",
        title: "Intelligent Mobile Application",
        category: "App",
        description:
            "A mobile application designed around intelligent workflows and AI-powered user experiences.",
        technologies: ["Mobile", "API", "AI", "Backend"],
        github: "#",
    },
    {
        id: "cloud-deployment-system",
        title: "Cloud Deployment Pipeline",
        category: "DevOps",
        description:
            "A deployment workflow automating testing, containerization and application delivery.",
        technologies: ["Docker", "GitHub Actions", "CI/CD", "Cloud"],
        github: "#",
    },
];