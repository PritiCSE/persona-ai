# Persona AI

Full-stack AI application with React frontend and FastAPI backend.

## Quick Start

### Frontend

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

Backend runs on `http://localhost:8000`

### API Documentation

Once backend is running, visit `http://localhost:8000/docs` for interactive API docs.

## Structure

- `/src` - React frontend
- `/backend/app` - FastAPI backend
  - `/api` - API routes
  - `/db` - Database models and schemas
  - `/services` - Business logic
  - `/integrations` - External service clients
  - `/core` - Configuration and security

