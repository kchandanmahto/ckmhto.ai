import asyncio

from sqlalchemy import select

from app.core.database import AsyncSessionLocal
from app.models.project import Project


PROJECTS = [
    {
        "id": "ai-agent-platform",
        "title": "AI Agent Platform",
        "category": "Agentic AI",
        "description": "Production-oriented AI agent system with tools, reasoning and task execution.",
        "technologies": [
            "Python",
            "FastAPI",
            "LLM",
            "Docker",
        ],
        "featured": True,
    },
    {
        "id": "multi-agent-system",
        "title": "Multi-Agent System",
        "category": "Multi-Agent AI",
        "description": "Orchestrated multi-agent workflow designed to solve complex problems through specialized agents.",
        "technologies": [
            "Python",
            "Agents",
            "A2A",
            "LLM",
        ],
        "featured": True,
    },
    {
        "id": "a2ui-system",
        "title": "A2UI Intelligent Interface",
        "category": "A2UI",
        "description": "AI-driven interface system capable of dynamically generating useful UI experiences.",
        "technologies": [
            "Next.js",
            "Python",
            "A2UI",
            "AI",
        ],
        "featured": True,
    },
]


async def seed():
    async with AsyncSessionLocal() as db:
        for data in PROJECTS:
            existing = await db.execute(
                select(Project).where(
                    Project.id == data["id"]
                )
            )

            if existing.scalar_one_or_none():
                continue

            db.add(Project(**data))

        await db.commit()

    print("Projects seeded successfully.")


if __name__ == "__main__":
    asyncio.run(seed())