from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional, List
import uuid


class Campaign(SQLModel, table=True):
    """Campaign model - groups related outreach efforts."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    name: str = Field(index=True)
    description: Optional[str] = None
    status: str = Field(default="Active")  # Active, Paused, Completed, Optimizing
    target_persona: str  # e.g., "CTO", "Founder"
    target_industry: Optional[str] = None
    messaging_angle: str  # ROI, Vision, Social Proof, Pain Point
    sent_count: int = Field(default=0)
    opens: int = Field(default=0)
    replies: int = Field(default=0)
    meetings: int = Field(default=0)
    ai_score: float = Field(default=0.0)  # Campaign performance score
    metadata: dict = Field(default_factory=dict)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    messages: List["OutreachMessage"] = Relationship()

    class Config:
        table_name = "campaigns"
