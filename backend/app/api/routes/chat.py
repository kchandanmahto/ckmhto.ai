from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat import generate_reply, stream_reply


router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"],
)


# =========================================================
# NORMAL CHAT
# =========================================================

@router.post(
    "/",
    response_model=ChatResponse,
)
async def chat(
    data: ChatRequest,
    db: AsyncSession = Depends(get_db),
):
    try:
        reply = await generate_reply(
            data,
            db,
        )

        return ChatResponse(
            conversation_id=data.conversation_id,
            reply=reply,
        )

    except Exception as error:
        print(
            f"CHAT ERROR: "
            f"{type(error).__name__}: {error}"
        )

        raise HTTPException(
            status_code=500,
            detail="Unable to process chat request.",
        ) from error


# =========================================================
# STREAMING CHAT
# =========================================================

@router.post(
    "/stream",
)
async def chat_stream(
    data: ChatRequest,
    db: AsyncSession = Depends(get_db),
):
    try:
        return StreamingResponse(
            stream_reply(
                data,
                db,
            ),
            media_type="text/plain; charset=utf-8",
            headers={
                "Cache-Control": "no-cache",
                "X-Conversation-ID": data.conversation_id,
            },
        )

    except Exception as error:
        print(
            f"CHAT STREAM ERROR: "
            f"{type(error).__name__}: {error}"
        )

        raise HTTPException(
            status_code=500,
            detail="Unable to process streaming chat request.",
        ) from error