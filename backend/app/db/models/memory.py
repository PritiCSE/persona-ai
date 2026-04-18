from sqlmodel import SQLModel, Field
from datetime import datetime
from typing import Optional
import uuid


class MemoryEvent(SQLModel, table=True):
    """MemoryEvent model - stores learned facts from Hindsight."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    event_type: str  # "retain", "recall", "reflect"
    tag: str  # e.g., "CTO", "Timing", "Template", "Channel"
    text: str  # The actual memory text
    persona: Optional[str] = None  # Associated persona
    role: Optional[str] = None
    industry: Optional[str] = None
    outcome: Optional[str] = None  # e.g., "replied", "opened", "ignored"
    messaging_angle: Optional[str] = None
    weight: float = Field(default=1.0)  # Importance/confidence
    source_data: dict = Field(default_factory=dict)  # Metadata about how memory was created
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        table_name = "memory_events"


class Insight(SQLModel, table=True):
    """Insight model - stores generated insights and patterns."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    title: str = Field(index=True)
    detail: str
    weight: str  # "high", "med", "low"
    confidence_score: float = Field(default=0.0)
    pattern_type: str  # "persona_preference", "timing", "messaging", "channel", etc.
    affected_personas: list = Field(default_factory=list)  # JSON list of personas
    improvement_metrics: dict = Field(default_factory=dict)  # Projected improvements
    based_on_sample_size: int = Field(default=0)  # Number of data points
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        table_name = "insights"
