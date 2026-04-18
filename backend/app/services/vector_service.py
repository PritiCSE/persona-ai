from app.integrations.chroma_client import ChromaClient
from app.services.llm_service import LLMService
import logging

logger = logging.getLogger(__name__)


class VectorService:
    """Service for vector operations with Chroma."""

    def __init__(self):
        self.chroma_client = ChromaClient()
        self.llm_service = LLMService()

    def index_prospect(self, prospect_id: str, prospect_data: dict) -> bool:
        """Add prospect to vector store."""
        try:
            # Generate embedding for prospect
            embedding = self.llm_service.generate_prospect_embedding(prospect_data)

            # Prepare metadata
            metadata = {
                "name": prospect_data.get("name"),
                "role": prospect_data.get("role"),
                "company": prospect_data.get("company_name"),
                "industry": prospect_data.get("industry"),
                "company_size": prospect_data.get("company_size"),
                "region": prospect_data.get("region"),
            }

            # Add to Chroma
            self.chroma_client.add_prospect(prospect_id, embedding, metadata)
            logger.info(f"Indexed prospect {prospect_id} to Chroma")
            return True
        except Exception as e:
            logger.error(f"Error indexing prospect: {e}")
            return False

    def find_similar_prospects(self, prospect_id: str, n_results: int = 5) -> list:
        """Find similar prospects using vector similarity."""
        try:
            prospect = self.chroma_client.get_prospect(prospect_id)
            if not prospect or not prospect.get("embedding"):
                logger.warning(f"No embedding found for prospect {prospect_id}")
                return []

            similar_ids = self.chroma_client.find_similar(
                prospect["embedding"], n_results
            )
            # Remove the prospect itself from results
            similar_ids = [id for id in similar_ids if id != prospect_id]
            logger.info(f"Found {len(similar_ids)} similar prospects for {prospect_id}")
            return similar_ids
        except Exception as e:
            logger.error(f"Error finding similar prospects: {e}")
            return []

    def remove_prospect(self, prospect_id: str) -> bool:
        """Remove prospect from vector store."""
        try:
            self.chroma_client.delete_prospect(prospect_id)
            logger.info(f"Removed prospect {prospect_id} from Chroma")
            return True
        except Exception as e:
            logger.error(f"Error removing prospect: {e}")
            return False
