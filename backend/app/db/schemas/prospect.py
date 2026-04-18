from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List


class ProspectCreate(BaseModel):
    """Schema for creating a prospect."""
    name: str
    email: EmailStr
    linkedin_url: Optional[str] = None
    role: str
    company_name: str
    industry: str
    company_size: str
    region: str


class ProspectUpdate(BaseModel):
    """Schema for updating a prospect."""
    status: Optional[str] = None
    ai_score: Optional[float] = None
    metadata: Optional[dict] = None


class ProspectResponse(BaseModel):
    """Schema for prospect response."""
    id: str
    name: str
    email: str
    linkedin_url: Optional[str] = None
    role: str
    company_name: str
    industry: str
    company_size: str
    region: str
    status: str
    ai_score: float
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class ProspectsListResponse(BaseModel):
    """Schema for paginated prospects list."""
    items: List[ProspectResponse]
    total: int
    skip: int
    limit: int
