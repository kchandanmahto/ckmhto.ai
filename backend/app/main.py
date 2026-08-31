from fastapi import FastAPI

app = FastAPI(
    title="Chandan Portfolio API",
    description="Backend API for Chandan's AI Engineering Portfolio",
    version="1.0.0",
)


@app.get("/")
async def root():
    return {
        "message": "Chandan Portfolio API is running 🚀"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }