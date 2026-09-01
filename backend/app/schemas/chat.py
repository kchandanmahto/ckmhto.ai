from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    conversation_id: str = Field(
        min_length=1,
        max_length=100,
    )

    message: str = Field(
        min_length=1,
        max_length=2000,
    )


class ChatResponse(BaseModel):
    conversation_id: str
    reply: str