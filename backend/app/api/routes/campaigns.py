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
    1: {"id": 1, "name": "Enterprise CTOs - ROI", "status": "Active", "score": 92, "sent": 234, "opens": 156, "replies": 48, "meetings": 12},
    2: {"id": 2, "name": "Startup Founders", "status": "Active", "score": 87, "sent": 189, "opens": 128, "replies": 42, "meetings": 8},
    3: {"id": 3, "name": "VP Sales - SMB", "status": "Paused", "score": 78, "sent": 145, "opens": 89, "replies": 22, "meetings": 4},
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
