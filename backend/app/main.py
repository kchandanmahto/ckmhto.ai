from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import close_db, init_db

from app.api.routes.health import router as health_router
from app.api.routes.projects import router as projects_router
from app.api.routes.contact import router as contact_router
from app.api.routes.chat import router as chat_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()

    yield

    await close_db()


app = FastAPI(
    title=settings.APP_NAME,
    description="Backend API for Chandan's AI Engineering Portfolio",
    version=settings.APP_VERSION,
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.FRONTEND_URL,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(health_router)
app.include_router(projects_router)
app.include_router(contact_router)
app.include_router(chat_router)


@app.get("/")
async def root():
    return {
        "message": "Chandan Portfolio API is running 🚀"
    }