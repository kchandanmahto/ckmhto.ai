from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.contact import (
    ContactRequest,
    ContactResponse,
)
from app.services.contact import create_contact_message


router = APIRouter(
    prefix="/api/contact",
    tags=["Contact"],
)


@router.post(
    "/",
    response_model=ContactResponse,
)
async def submit_contact(
    data: ContactRequest,
    db: AsyncSession = Depends(get_db),
):
    await create_contact_message(
        db,
        data,
    )

    return ContactResponse(
        success=True,
        message="Your message has been received.",
    )