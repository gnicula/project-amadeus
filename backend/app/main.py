# backend/app/main.py

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Project Amadeus Backend")

# Define the request schema
class ChatRequest(BaseModel):
    message: str

# Define the response schema
class ChatResponse(BaseModel):
    reply: str

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # For now, just echo the message back
    user_message = request.message
    reply_text = f"You said: {user_message}"  # Placeholder reply logic
    return ChatResponse(reply=reply_text)
