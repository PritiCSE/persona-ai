from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional, List
import uuid


class OutreachMessage(SQLModel, table=True):
    """OutreachMessage model - represents a generated/sent message."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    prospect_id: str = Field(foreign_key="prospect.id", index=True)
    campaign_id: Optional[str] = Field(default=None, foreign_key="campaign.id")
    channel: str  # Email, LinkedIn, Follow-up
    subject: Optional[str] = None  # For email
    message: str
    tone: str = Field(default="Direct")  # Direct, Warm, Bold, Curious
    cta: str = Field(default="15-min call")  # Call to action
    angle: str  # ROI, Vision, Social Proof, Pain Point
    generated_with_context: dict = Field(default_factory=dict)  # Similar prospects used
    status: str = Field(default="draft")  # draft, sent, replied, opened, ignored
    sent_at: Optional[datetime] = None
    replied_at: Optional[datetime] = None
    opened_at: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    prospect: "Prospect" = Relationship(back_populates="outreach_messages")
    outcomes: List["OutreachOutcome"] = Relationship(back_populates="message")

    class Config:
        table_name = "outreach_messages"


class OutreachOutcome(SQLModel, table=True):
    """OutreachOutcome model - tracks the result of an outreach."""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    message_id: str = Field(foreign_key="outreach_message.id", index=True)
    prospect_id: str = Field(foreign_key="prospect.id", index=True)
    outcome_type: str  # opened, replied, meeting, ignored
    outcome_details: dict = Field(default_factory=dict)  # Extra info (reply text, etc.)
    confidence_score: float = Field(default=1.0)  # Confidence in this outcome
    created_at: datetime = Field(default_factory=datetime.utcnow)

    message: OutreachMessage = Relationship(back_populates="outcomes")

    class Config:
        table_name = "outreach_outcomes"
