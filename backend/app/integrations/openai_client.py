from openai import OpenAI
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)


class OpenAIClient:
    """Client for OpenAI API integration."""

    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = settings.OPENAI_MODEL
        self.embedding_model = settings.EMBEDDING_MODEL

    def generate_message(
        self,
        prospect_data: dict,
        similar_prospects: list,
        memory_insights: list,
        tone: str = "Direct",
        cta: str = "15-min call",
    ) -> str:
        """Generate outreach message using GPT-4."""
        prompt = self._build_prompt(
            prospect_data, similar_prospects, memory_insights, tone, cta
        )

        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7,
                max_tokens=500,
            )
            return response.choices[0].message.content
        except Exception as e:
            logger.error(f"Error generating message: {e}")
            raise

    def get_embedding(self, text: str) -> list:
        """Get embedding vector for text."""
        try:
            response = self.client.embeddings.create(
                input=text, model=self.embedding_model
            )
            return response.data[0].embedding
        except Exception as e:
            logger.error(f"Error getting embedding: {e}")
            raise

    def _build_prompt(
        self,
        prospect_data: dict,
        similar_prospects: list,
        memory_insights: list,
        tone: str,
        cta: str,
    ) -> str:
        """Build the prompt for message generation."""
        similar_context = (
            "\n".join([f"- {p}" for p in similar_prospects]) if similar_prospects else "None"
        )
        memory_context = (
            "\n".join([f"- {m}" for m in memory_insights]) if memory_insights else "None"
        )

        prompt = f"""You are an expert at writing personalized outreach messages. Generate a concise, compelling cold outreach message based on the prospect information.

PROSPECT INFORMATION:
- Name: {prospect_data.get("name")}
- Role: {prospect_data.get("role")}
- Company: {prospect_data.get("company_name")}
- Industry: {prospect_data.get("industry")}
- Company Size: {prospect_data.get("company_size")}

SIMILAR SUCCESSFUL PROSPECTS (for pattern matching):
{similar_context}

MEMORY INSIGHTS (what has worked):
{memory_context}

TONE: {tone}
CALL TO ACTION: {cta}

Write a short, personalized message (3-4 sentences) that:
1. Opens with a specific, relevant hook
2. References the prospect's context naturally
3. Includes a clear but soft CTA
4. Is authentic and not overly salesy
5. Avoids generic platitudes

Return ONLY the message text, nothing else."""

        return prompt
