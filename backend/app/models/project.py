from sqlalchemy import Boolean, String, Text
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[str] = mapped_column(
        String(100),
        primary_key=True,
    )

    title: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    category: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    technologies: Mapped[list[str]] = mapped_column(
        JSONB,
        default=list,
        nullable=False,
    )

    featured: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )