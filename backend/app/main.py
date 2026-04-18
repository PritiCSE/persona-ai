from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.config import settings
from app.api.routes import prospects, campaigns

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting Persona AI Backend")
    yield
    # Shutdown
    print("Shutting down Persona AI Backend")

app = FastAPI(
    title=settings.PROJECT_NAME,
    lifespan=lifespan
)

# CORS middleware
if settings.CORS_ORIGINS:
    origins = settings.CORS_ORIGINS.split(",")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

# Include routers
app.include_router(prospects.router)
app.include_router(campaigns.router)

@app.get("/health")
async def health_check():
    return {"status": "ok"}

@app.get("/")
async def root():
    return {"message": "Persona AI Backend"}
