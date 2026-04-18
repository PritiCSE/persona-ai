from app.integrations.openai_client import OpenAIClient
import logging

logger = logging.getLogger(__name__)


class LLMService:
    """Service for LLM operations."""

    def __init__(self):
        self.openai_client = OpenAIClient()

    def generate_outreach_message(
        self,
        prospect_data: dict,
        similar_prospects: list = None,
        memory_insights: list = None,
        tone: str = "Direct",
        cta: str = "15-min call",
        angle: str = "ROI",
    ) -> str:
        """Generate an outreach message for a prospect."""
        similar_prospects = similar_prospects or []
        memory_insights = memory_insights or []

        try:
            message = self.openai_client.generate_message(
                prospect_data=prospect_data,
                similar_prospects=similar_prospects,
                memory_insights=memory_insights,
                tone=tone,
                cta=cta,
            )
            logger.info(f"Generated message for {prospect_data.get('name')}")
            return message
        except Exception as e:
            logger.error(f"Error generating message: {e}")
            raise

    def get_embedding(self, text: str) -> list:
        """Get embedding for text."""
        try:
            embedding = self.openai_client.get_embedding(text)
            return embedding
        except Exception as e:
            logger.error(f"Error getting embedding: {e}")
            raise

    def generate_prospect_embedding(self, prospect_data: dict) -> list:
        """Generate embedding for prospect profile."""
        prospect_text = f"{prospect_data.get('name')} {prospect_data.get('role')} at {prospect_data.get('company_name')} {prospect_data.get('industry')} {prospect_data.get('company_size')}"
        return self.get_embedding(prospect_text)
