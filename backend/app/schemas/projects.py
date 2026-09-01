from pydantic import BaseModel, ConfigDict


class Project(BaseModel):
    model_config = ConfigDict(
        from_attributes=True
    )

    id: str
    title: str
    category: str
    description: str
    technologies: list[str]
    featured: bool = False


class ProjectsResponse(BaseModel):
    count: int
    projects: list[Project]