from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class Hello(BaseModel):
    hello: str


@router.get("/")
async def get_hello():
    return [{"hello": "hell"}]
