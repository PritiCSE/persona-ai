import requests
from app.core.config import settings
import logging
from typing import List, Dict, Any

logger = logging.getLogger(__name__)


class HindsightClient:
    """Client for Hindsight memory management."""

    def __init__(self):
        self.base_url = settings.HINDSIGHT_API_URL
        self.api_key = settings.HINDSIGHT_API_KEY
        self.headers = {"Authorization": f"Bearer {self.api_key}"}

    def retain(self, memory_data: Dict[str, Any]) -> bool:
        """Store a memory event using Hindsight retain."""
        try:
            response = requests.post(
                f"{self.base_url}/api/memories/retain",
                json=memory_data,
                headers=self.headers,
                timeout=10
            )
            response.raise_for_status()
            logger.info(f"Retained memory: {memory_data.get('tag')}")
            return True
        except Exception as e:
            logger.error(f"Error retaining memory: {e}")
            return False

    def recall(self, context: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Recall relevant memories for given context."""
        try:
            response = requests.post(
                f"{self.base_url}/api/memories/recall",
                json=context,
                headers=self.headers,
                timeout=10
            )
            response.raise_for_status()
            memories = response.json().get("memories", [])
            logger.info(f"Recalled {len(memories)} memories")
            return memories
        except Exception as e:
            logger.error(f"Error recalling memories: {e}")
            return []

    def reflect(self) -> List[Dict[str, Any]]:
        """Generate insights using Hindsight reflect."""
        try:
            response = requests.post(
                f"{self.base_url}/api/memories/reflect",
                json={},
                headers=self.headers,
                timeout=30  # Reflect might take longer
            )
            response.raise_for_status()
            insights = response.json().get("insights", [])
            logger.info(f"Generated {len(insights)} insights")
            return insights
        except Exception as e:
            logger.error(f"Error reflecting on memories: {e}")
            return []

    def health_check(self) -> bool:
        """Check if Hindsight is available."""
        try:
            response = requests.get(
                f"{self.base_url}/health",
                headers=self.headers,
                timeout=5
            )
            return response.status_code == 200
        except Exception as e:
            logger.warning(f"Hindsight health check failed: {e}")
            return False
