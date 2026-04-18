from datetime import datetime, timedelta
from typing import Optional
import secrets


def generate_api_key() -> str:
    """Generate a secure random API key."""
    return secrets.token_urlsafe(32)


def sanitize_input(data: str, max_length: int = 1000) -> str:
    """Sanitize and validate input strings."""
    if not isinstance(data, str):
        raise ValueError("Input must be a string")

    if len(data) > max_length:
        raise ValueError(f"Input exceeds maximum length of {max_length}")

    # Strip dangerous characters/tags
    dangerous_chars = ["<", ">", "{", "}", "javascript:", "onclick", "onerror"]
    for char in dangerous_chars:
        if char.lower() in data.lower():
            raise ValueError(f"Input contains potentially dangerous content: {char}")

    return data.strip()


def hash_sensitive_data(data: str) -> str:
    """Hash sensitive data for logging."""
    if len(data) < 4:
        return "***"
    return data[:2] + "*" * (len(data) - 4) + data[-2:]
