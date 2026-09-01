from pydantic import BaseModel, EmailStr


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str