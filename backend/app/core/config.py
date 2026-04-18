from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Persona AI Backend"
    API_V1_STR: str = "/api/v1"
    
    POSTGRES_SERVER: str = "localhost"
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "postgres"
    POSTGRES_DB: str = "persona_ai"
    DATABASE_URL: Optional[str] = None

    OPENAI_API_KEY: str
    
    HINDSIGHT_API_KEY: Optional[str] = None
    CHROMA_DB_PATH: str = "./chroma_db"

    class Config:
        env_file = ".env"
        case_sensitive = True

    @property
    def get_database_url(self) -> str:
        if self.DATABASE_URL:
            return self.DATABASE_URL
        return f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_SERVER}/{self.POSTGRES_DB}"

settings = Settings()
