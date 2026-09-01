import os

from dotenv import load_dotenv


load_dotenv()


class Settings:
    APP_NAME: str = os.getenv(
        "APP_NAME",
        "Chandan Portfolio API",
    )

    APP_VERSION: str = os.getenv(
        "APP_VERSION",
        "1.0.0",
    )

    FRONTEND_URL: str = os.getenv(
        "FRONTEND_URL",
        "http://localhost:3000",
    )

    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "",
    )

    GROQ_API_KEY: str = os.getenv(
        "GROQ_API_KEY",
        "",
    )

    GROQ_MODEL: str = os.getenv(
        "GROQ_MODEL",
        "llama-3.3-70b-versatile",
    )


settings = Settings()