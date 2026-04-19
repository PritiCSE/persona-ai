from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/v1/campaigns", tags=["campaigns"])

class CampaignUpdate(BaseModel):
    status: Optional[str] = None
    name: Optional[str] = None

class CampaignResponse(BaseModel):
    id: int
    name: str
    status: str

# Temporary in-memory storage with mock campaigns
campaigns_db = {
    1: {"id": 1, "name": "SaaS Founders Q4", "status": "Active", "score": 92, "sent": 412, "opens": 281, "replies": 96, "meetings": 28},
    2: {"id": 2, "name": "Recruiters Outbound", "status": "Active", "score": 84, "sent": 308, "opens": 197, "replies": 71, "meetings": 19},
    3: {"id": 3, "name": "Agencies Pilot", "status": "Optimizing", "score": 76, "sent": 188, "opens": 112, "replies": 38, "meetings": 11},
    4: {"id": 4, "name": "Enterprise CTOs", "status": "Active", "score": 96, "sent": 332, "opens": 222, "replies": 143, "meetings": 39},
}

@router.get("/")
async def get_campaigns():
    return {"campaigns": list(campaigns_db.values())}

@router.get("/{campaign_id}")
async def get_campaign(campaign_id: int):
    if campaign_id not in campaigns_db:
        raise HTTPException(status_code=404, detail="Campaign not found")
    return campaigns_db[campaign_id]

@router.post("/{campaign_id}/pause")
async def pause_campaign(campaign_id: int):
    if campaign_id not in campaigns_db:
        raise HTTPException(status_code=404, detail="Campaign not found")
    campaigns_db[campaign_id]["status"] = "Paused"
    return {"success": True, "message": f"Campaign {campaigns_db[campaign_id]['name']} paused"}

@router.post("/{campaign_id}/resume")
async def resume_campaign(campaign_id: int):
    if campaign_id not in campaigns_db:
        raise HTTPException(status_code=404, detail="Campaign not found")
    campaigns_db[campaign_id]["status"] = "Active"
    return {"success": True, "message": f"Campaign {campaigns_db[campaign_id]['name']} resumed"}

@router.post("/{campaign_id}/optimize")
async def optimize_campaign(campaign_id: int):
    if campaign_id not in campaigns_db:
        raise HTTPException(status_code=404, detail="Campaign not found")
    campaign = campaigns_db[campaign_id]
    return {
        "success": True,
        "campaign_id": campaign_id,
        "optimization": f"Optimized {campaign['name']}",
        "suggested_change": "Switch to ROI messaging for better results",
        "projected_improvement": "12%"
    }

@router.post("/{campaign_id}/duplicate")
async def duplicate_campaign(campaign_id: int):
    if campaign_id not in campaigns_db:
        raise HTTPException(status_code=404, detail="Campaign not found")
    source = campaigns_db[campaign_id]
    new_id = max(campaigns_db.keys()) + 1
    new_campaign = {
        "id": new_id,
        "name": f"{source['name']} (Copy)",
        "status": "Draft",
        "score": source["score"],
        "sent": 0,
        "opens": 0,
        "replies": 0,
        "meetings": 0
    }
    campaigns_db[new_id] = new_campaign
    return {"success": True, "message": f"Campaign duplicated", "new_campaign_id": new_id}

@router.post("/{campaign_id}/apply-insight")
async def apply_insight(campaign_id: int):
    if campaign_id not in campaigns_db:
        raise HTTPException(status_code=404, detail="Campaign not found")
    campaign = campaigns_db[campaign_id]
    return {
        "success": True,
        "message": f"Applied AI insight to {campaign['name']}",
        "result": "Campaign updated with ROI messaging angle"
    }
