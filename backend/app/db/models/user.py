from sqlmodel import SQLModel, Field
from datetime import datetime
import uuid


class User(SQLModel, table=True):
    """User model for authentication and authorization."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    email: str = Field(unique=True, index=True)
    name: str
    api_key: str = Field(unique=True, index=True)
    is_active: bool = Field(default=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        table_name = "users"
