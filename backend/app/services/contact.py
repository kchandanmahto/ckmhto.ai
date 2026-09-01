from sqlalchemy.ext.asyncio import AsyncSession

from app.models.contact import ContactMessage
from app.schemas.contact import ContactRequest


async def create_contact_message(
    db: AsyncSession,
    data: ContactRequest,
) -> ContactMessage:
    message = ContactMessage(
        name=data.name,
        email=str(data.email),
        message=data.message,
    )

    db.add(message)

    await db.commit()
    await db.refresh(message)

    return message