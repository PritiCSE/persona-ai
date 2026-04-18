from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/v1/prospects", tags=["prospects"])

class ProspectCreate(BaseModel):
    name: str
    email: str
    linkedin_url: Optional[str] = None
    company: str
    role: str
    industry: str
    company_size: str
    region: str

class ProspectResponse(BaseModel):
    id: int
    name: str
    email: str
    company: str
    status: str

# Temporary in-memory storage
prospects_db = {}
next_id = 1

@router.post("/", response_model=dict)
async def create_prospect(prospect: ProspectCreate):
    global next_id
    prospect_id = next_id
    next_id += 1
    prospects_db[prospect_id] = {
        "id": prospect_id,
        "name": prospect.name,
        "email": prospect.email,
        "linkedin_url": prospect.linkedin_url,
        "company": prospect.company,
        "role": prospect.role,
        "industry": prospect.industry,
        "company_size": prospect.company_size,
        "region": prospect.region,
        "status": "Created"
    }
    return {"success": True, "id": prospect_id, "message": f"Prospect {prospect.name} created"}

@router.get("/")
async def get_prospects():
    return {"prospects": list(prospects_db.values())}

@router.get("/{prospect_id}")
async def get_prospect(prospect_id: int):
    if prospect_id not in prospects_db:
        raise HTTPException(status_code=404, detail="Prospect not found")
    return prospects_db[prospect_id]

@router.post("/{prospect_id}/generate-outreach")
async def generate_outreach(prospect_id: int):
    if prospect_id not in prospects_db:
        raise HTTPException(status_code=404, detail="Prospect not found")
    prospect = prospects_db[prospect_id]
    return {
        "success": True,
        "prospect_id": prospect_id,
        "outreach": f"Generated outreach for {prospect['name']} at {prospect['company']}",
        "suggested_angle": "ROI",
        "suggested_channel": "Email",
        "suggested_timing": "Tuesday 9:00am"
    }
