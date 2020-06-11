from fastapi import APIRouter, Body
from pydantic import BaseModel


router = APIRouter()


@router.post("/login")
async def login():
    return {"token": "he", "code": 1}