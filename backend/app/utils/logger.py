import logging
import sys
from app.core.config import settings

# Create logger
logger = logging.getLogger(__name__)

# Create console handler with a higher log level
handler = logging.StreamHandler(sys.stdout)
handler.setLevel(settings.LOG_LEVEL)

# Create formatter
formatter = logging.Formatter(
    "[%(asctime)s] %(name)s - %(levelname)s - %(message)s"
)
handler.setFormatter(formatter)

# Add handler to logger
logger.addHandler(handler)
logger.setLevel(settings.LOG_LEVEL)

# Prevent propagation to root logger
logger.propagate = False
