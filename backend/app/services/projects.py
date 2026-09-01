from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.project import Project


async def get_all_projects(
    db: AsyncSession,
) -> list[Project]:
    result = await db.execute(
        select(Project).order_by(Project.title)
    )

    return list(result.scalars().all())


async def get_project_by_id(
    db: AsyncSession,
    project_id: str,
) -> Project | None:
    result = await db.execute(
        select(Project).where(
            Project.id == project_id
        )
    )

    return result.scalar_one_or_none()