from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional, List
import uuid


class Company(SQLModel, table=True):
    """Company model."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    name: str = Field(index=True)
    industry: str
    size: str  # e.g., "1-10", "11-50", "51-200", etc.
    region: str
    website: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    prospects: List["Prospect"] = Relationship(back_populates="company")

    class Config:
        table_name = "companies"


class Persona(SQLModel, table=True):
    """Persona/role model for categorization."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    name: str = Field(index=True)  # e.g., "CTO", "Founder", "VP Sales"
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        table_name = "personas"


class Prospect(SQLModel, table=True):
    """Prospect model - represents a potential contact."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    name: str = Field(index=True)
    email: str = Field(unique=True, index=True)
    linkedin_url: Optional[str] = None
    role: str  # e.g., CTO, Founder
    company_id: Optional[str] = Field(default=None, foreign_key="company.id")
    company_name: str  # Denormalized for search
    industry: str
    company_size: str
    region: str
    status: str = Field(default="new")  # new, contacted, replied, meeting, closed
    last_contacted: Optional[datetime] = None
    ai_score: float = Field(default=0.0)  # Score from similarity/memory system
    embedding: Optional[str] = None  # Serialized embedding vector for Chroma
    metadata: dict = Field(default_factory=dict)  # Custom fields
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    company: Optional[Company] = Relationship(back_populates="prospects")
    outreach_messages: List["OutreachMessage"] = Relationship(back_populates="prospect")

    class Config:
        table_name = "prospects"
