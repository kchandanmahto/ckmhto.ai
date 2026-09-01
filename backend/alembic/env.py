from logging.config import fileConfig
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

from sqlalchemy import pool
from sqlalchemy.engine import Connection
from sqlalchemy.ext.asyncio import async_engine_from_config

from alembic import context

from app.core.config import settings
from app.core.database import Base

# Import models so Alembic can detect them.
from app.models.project import Project  # noqa: F401
from app.models.contact import ContactMessage  # noqa: F401


config = context.config


if config.config_file_name is not None:
    fileConfig(config.config_file_name)


target_metadata = Base.metadata


def get_database_url() -> str:
    url = settings.DATABASE_URL

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

    # Remove libpq parameters that asyncpg does not accept.
    query.pop("channel_binding", None)
    query.pop("sslmode", None)

    # asyncpg uses ssl=require.
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


def run_migrations_offline() -> None:
    url = get_database_url()

    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={
            "paramstyle": "named",
        },
    )

    with context.begin_transaction():
        context.run_migrations()


def do_run_migrations(connection: Connection) -> None:
    context.configure(
        connection=connection,
        target_metadata=target_metadata,
        compare_type=True,
    )

    with context.begin_transaction():
        context.run_migrations()


async def run_async_migrations() -> None:
    configuration = config.get_section(
        config.config_ini_section,
        {},
    )

    configuration["sqlalchemy.url"] = get_database_url()

    connectable = async_engine_from_config(
        configuration,
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    async with connectable.connect() as connection:
        await connection.run_sync(
            do_run_migrations
        )

    await connectable.dispose()


def run_migrations_online() -> None:
    import asyncio

    asyncio.run(
        run_async_migrations()
    )


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()