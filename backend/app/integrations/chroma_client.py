import chromadb
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)


class ChromaClient:
    """Client for Chroma vector database."""

    def __init__(self):
        self.client = chromadb.PersistentClient(path=settings.CHROMA_PATH)
        self.collection = self.client.get_or_create_collection(
            name="prospects",
            metadata={"hnsw:space": "cosine"}
        )

    def add_prospect(self, prospect_id: str, embedding: list, metadata: dict):
        """Add prospect to vector store."""
        try:
            self.collection.add(
                ids=[prospect_id],
                embeddings=[embedding],
                metadatas=[metadata]
            )
            logger.info(f"Added prospect {prospect_id} to Chroma")
        except Exception as e:
            logger.error(f"Error adding prospect to Chroma: {e}")
            raise

    def find_similar(self, embedding: list, n_results: int = 5) -> list:
        """Find similar prospects using embedding."""
        try:
            results = self.collection.query(
                query_embeddings=[embedding],
                n_results=n_results
            )
            if results and results["ids"]:
                return results["ids"][0]
            return []
        except Exception as e:
            logger.error(f"Error querying similar prospects: {e}")
            return []

    def get_prospect(self, prospect_id: str) -> dict:
        """Get prospect by ID."""
        try:
            result = self.collection.get(ids=[prospect_id])
            if result and result["ids"]:
                return {
                    "id": result["ids"][0],
                    "embedding": result["embeddings"][0] if result["embeddings"] else None,
                    "metadata": result["metadatas"][0] if result["metadatas"] else {}
                }
            return None
        except Exception as e:
            logger.error(f"Error getting prospect from Chroma: {e}")
            return None

    def update_prospect(self, prospect_id: str, embedding: list, metadata: dict):
        """Update prospect in vector store."""
        try:
            # Chroma doesn't have direct update, so delete and re-add
            self.collection.delete(ids=[prospect_id])
            self.add_prospect(prospect_id, embedding, metadata)
            logger.info(f"Updated prospect {prospect_id} in Chroma")
        except Exception as e:
            logger.error(f"Error updating prospect in Chroma: {e}")
            raise

    def delete_prospect(self, prospect_id: str):
        """Delete prospect from vector store."""
        try:
            self.collection.delete(ids=[prospect_id])
            logger.info(f"Deleted prospect {prospect_id} from Chroma")
        except Exception as e:
            logger.error(f"Error deleting prospect from Chroma: {e}")
