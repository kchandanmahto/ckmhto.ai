export type CaseStudy = {
    id: string;
    title: string;
    category: string;
    shortDescription: string;

    problem: string;
    solution: string;

    architecture: string[];

    engineeringDecisions: string[];

    challenges: string[];

    results: string[];

    technologies: string[];

    github?: string;
    live?: string;
};

export const caseStudies: CaseStudy[] = [
    {
        id: "multi-agent-intelligence-system",

        title: "Multi-Agent Intelligence System",

        category: "Agentic AI",

        shortDescription:
            "A multi-agent system designed to coordinate specialized AI agents, tools and workflows for complex problem solving.",

        problem:
            "Complex AI tasks often require multiple capabilities such as research, reasoning, verification and synthesis. Handling everything inside a single agent can make the system difficult to control, extend and debug.",

        solution:
            "Designed a modular multi-agent architecture where an orchestrator coordinates specialized agents. Each agent focuses on a specific responsibility while tools and shared context allow the system to complete larger workflows.",

        architecture: [
            "User Interface",
            "API Gateway",
            "Agent Orchestrator",
            "Specialized AI Agents",
            "Tools & External APIs",
            "Data / Knowledge Layer",
            "Final Response",
        ],

        engineeringDecisions: [
            "Separated agent responsibilities into specialized modules.",
            "Used an orchestrator instead of tightly coupling agents.",
            "Designed the system so new agents and tools can be added independently.",
            "Kept the API layer separate from the AI orchestration layer.",
        ],

        challenges: [
            "Agent coordination",
            "Context management",
            "Tool failures",
            "Response reliability",
            "Latency management",
        ],

        results: [
            "Modular multi-agent architecture",
            "Reusable agent components",
            "Tool-enabled AI workflows",
            "Production-oriented backend structure",
        ],

        technologies: [
            "Python",
            "FastAPI",
            "LLMs",
            "Multi-Agent",
            "A2A",
            "RAG",
        ],

        github: "#",
        live: "#",
    },

    {
        id: "ai-knowledge-assistant",

        title: "AI Knowledge Assistant",

        category: "AI Engineering",

        shortDescription:
            "A retrieval-based AI system designed to answer questions using contextual knowledge instead of relying only on model memory.",

        problem:
            "General-purpose language models may not have access to private or domain-specific information and can produce unsupported answers.",

        solution:
            "Built a retrieval-augmented workflow where relevant information is retrieved from a knowledge source and provided to the language model as context before generating a response.",

        architecture: [
            "User Query",
            "Query Processing",
            "Embedding Generation",
            "Vector Search",
            "Relevant Context",
            "LLM",
            "Grounded Response",
        ],

        engineeringDecisions: [
            "Separated retrieval from generation.",
            "Used semantic search instead of relying only on keyword matching.",
            "Designed the pipeline to support different knowledge sources.",
            "Kept the retrieval layer independently replaceable.",
        ],

        challenges: [
            "Retrieval quality",
            "Context size",
            "Hallucination reduction",
            "Chunking strategy",
            "Latency",
        ],

        results: [
            "Context-aware responses",
            "Reusable RAG pipeline",
            "Knowledge-grounded AI workflow",
        ],

        technologies: [
            "Python",
            "RAG",
            "Embeddings",
            "Vector Database",
            "LLM",
        ],

        github: "#",
        live: "#",
    },
];