from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.projects import Project, ProjectsResponse
from app.services.projects import (
    get_all_projects,
    get_project_by_id,
)


router = APIRouter(
    prefix="/api/projects",
    tags=["Projects"],
)


@router.get(
    "/",
    response_model=ProjectsResponse,
)
async def projects(
    db: AsyncSession = Depends(get_db),
):
    items = await get_all_projects(db)

    return ProjectsResponse(
        count=len(items),
        projects=items,
    )


@router.get(
    "/{project_id}",
    response_model=Project,
)
async def project(
    project_id: str,
    db: AsyncSession = Depends(get_db),
):
    item = await get_project_by_id(
        db,
        project_id,
    )

    if item is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found",
        )

    return item