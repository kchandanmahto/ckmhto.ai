from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings


def prepare_database_url(url: str) -> str:
    """
    Convert the Neon PostgreSQL URL into an asyncpg-compatible URL.
    """

    if not url:
        raise RuntimeError(
            "DATABASE_URL is not configured in .env"
        )

    if url.startswith("postgresql://"):
        url = url.replace(
            "postgresql://",
            "postgresql+asyncpg://",
            1,
        )

    parts = urlsplit(url)

    query = dict(parse_qsl(parts.query))

    # asyncpg does not accept these libpq-style parameters
    query.pop("channel_binding", None)
    query.pop("sslmode", None)

    # asyncpg uses `ssl=require`
    if "ssl" not in query:
        query["ssl"] = "require"

    clean_query = urlencode(query)

    return urlunsplit(
        (
            parts.scheme,
            parts.netloc,
            parts.path,
            clean_query,
            parts.fragment,
        )
    )


DATABASE_URL = prepare_database_url(
    settings.DATABASE_URL
)


engine = create_async_engine(
    DATABASE_URL,
    echo=False,
    pool_pre_ping=True,
)


AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


class Base(DeclarativeBase):
    pass


async def get_db():
    async with AsyncSessionLocal() as session:
        yield session


async def init_db():
    import app.models  # noqa: F401

    async with engine.begin() as connection:
        await connection.run_sync(
            Base.metadata.create_all
        )


async def close_db():
    await engine.dispose()