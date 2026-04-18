from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


class MemoryCreate(BaseModel):
    """Schema for creating memory."""
    tag: str
    text: str
    persona: Optional[str] = None
    role: Optional[str] = None
    industry: Optional[str] = None
    outcome: Optional[str] = None
    messaging_angle: Optional[str] = None
    weight: float = 1.0


class MemoryResponse(BaseModel):
    """Schema for memory response."""
    id: str
    tag: str
    text: str
    persona: Optional[str] = None
    weight: float
    created_at: datetime

    class Config:
        from_attributes = True


class InsightResponse(BaseModel):
    """Schema for insight response."""
    id: str
    title: str
    detail: str
    weight: str
    confidence_score: float
    pattern_type: str
    affected_personas: List[str]
    improvement_metrics: dict
    based_on_sample_size: int
    created_at: datetime

    class Config:
        from_attributes = True


class InsightsListResponse(BaseModel):
    """Schema for insights list."""
    items: List[InsightResponse]
    reflections: List[dict]  # Reflections from Hindsight


class AnalyticsOverviewResponse(BaseModel):
    """Schema for analytics overview."""
    prospects_contacted: int
    reply_rate: float  # percentage
    meetings_booked: int
    revenue_influenced: float
    active_campaigns: int
    reply_rate_trend: float  # percentage change
    meetings_trend: float
    revenue_trend: float
    campaigns_trend: float
