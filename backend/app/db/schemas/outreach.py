from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


class OutreachMessageCreate(BaseModel):
    """Schema for creating outreach message."""
    prospect_id: str
    campaign_id: Optional[str] = None
    channel: str  # Email, LinkedIn, Follow-up
    subject: Optional[str] = None
    tone: str = "Direct"
    cta: str = "15-min call"
    angle: Optional[str] = None  # Can be auto-determined


class OutreachMessageResponse(BaseModel):
    """Schema for outreach message response."""
    id: str
    prospect_id: str
    channel: str
    message: str
    subject: Optional[str] = None
    tone: str
    cta: str
    angle: str
    status: str
    sent_at: Optional[datetime] = None
    created_at: datetime

    class Config:
        from_attributes = True


class OutreachOutcomeCreate(BaseModel):
    """Schema for recording outreach outcome."""
    message_id: str
    prospect_id: str
    outcome_type: str  # opened, replied, meeting, ignored
    outcome_details: Optional[dict] = None


class OutreachOutcomeResponse(BaseModel):
    """Schema for outcome response."""
    id: str
    message_id: str
    prospect_id: str
    outcome_type: str
    outcome_details: dict
    created_at: datetime

    class Config:
        from_attributes = True


class OutreachListResponse(BaseModel):
    """Schema for paginated outreach list."""
    items: List[OutreachMessageResponse]
    total: int
    skip: int
    limit: int
