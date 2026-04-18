import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, JSON, Float
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from app.db.session import Base

class User(Base):
    __tablename__ = "users"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Prospect(Base):
    __tablename__ = "prospects"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True, index=True)
    full_name = Column(String, nullable=False)
    role = Column(String)
    linkedin_url = Column(String)
    industry = Column(String)
    region = Column(String)
    company_id = Column(UUID(as_uuid=True), ForeignKey("companies.id"))
    metadata = Column(JSON, default={})
    status = Column(String, default="Imported") # Imported, Outreach Sent, Replied, Meeting Booked, Not Interested
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class Company(Base):
    __tablename__ = "companies"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, unique=True, index=True, nullable=False)
    domain = Column(String)
    size = Column(String)
    industry = Column(String)
    region = Column(String)
    metadata = Column(JSON, default={})
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Persona(Base):
    __tablename__ = "personas"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    description = Column(Text)
    target_criteria = Column(JSON) # e.g. {"role": "CTO", "industry": "SaaS"}
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class OutreachMessage(Base):
    __tablename__ = "outreach_messages"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    prospect_id = Column(UUID(as_uuid=True), ForeignKey("prospects.id"), nullable=False)
    campaign_id = Column(UUID(as_uuid=True), ForeignKey("campaigns.id"))
    content = Column(Text, nullable=False)
    type = Column(String) # Email, LinkedIn, Follow-up
    status = Column(String, default="Generated") # Generated, Sent, Delivered, Opened, Replied
    tone = Column(String)
    cta = Column(String)
    sent_at = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class OutreachOutcome(Base):
    __tablename__ = "outreach_outcomes"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    outreach_id = Column(UUID(as_uuid=True), ForeignKey("outreach_messages.id"), nullable=False)
    outcome = Column(String, nullable=False) # Replied, Meeting Booked, Unsubscribed, Invalid Email
    details = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Campaign(Base):
    __tablename__ = "campaigns"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    description = Column(Text)
    status = Column(String, default="Active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class MemoryEvent(Base):
    __tablename__ = "memory_events"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    type = Column(String, nullable=False) # outreach_sent, outreach_outcome, prospect_imported
    data = Column(JSON, nullable=False)
    persona_id = Column(UUID(as_uuid=True), ForeignKey("personas.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Insight(Base):
    __tablename__ = "insights"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    confidence = Column(Float)
    persona_id = Column(UUID(as_uuid=True), ForeignKey("personas.id"))
    metadata = Column(JSON, default={})
    created_at = Column(DateTime(timezone=True), server_default=func.now())
