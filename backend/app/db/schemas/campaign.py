from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


class CampaignCreate(BaseModel):
    """Schema for creating campaign."""
    name: str
    description: Optional[str] = None
    target_persona: str
    target_industry: Optional[str] = None
    messaging_angle: str


class CampaignUpdate(BaseModel):
    """Schema for updating campaign."""
    status: Optional[str] = None
    ai_score: Optional[float] = None
    metadata: Optional[dict] = None


class CampaignResponse(BaseModel):
    """Schema for campaign response."""
    id: str
    name: str
    description: Optional[str] = None
    status: str
    target_persona: str
    target_industry: Optional[str] = None
    messaging_angle: str
    sent_count: int
    opens: int
    replies: int
    meetings: int
    ai_score: float
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class CampaignsListResponse(BaseModel):
    """Schema for campaigns list."""
    items: List[CampaignResponse]
    total: int
