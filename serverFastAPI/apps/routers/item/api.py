from fastapi import APIRouter, Body
from pydantic import BaseModel


router = APIRouter()


class Item(BaseModel):
    name: str


@router.get("/")
async def read_items():
    return {"item": "item"}


@router.post("/{item_id}")
async def read_item(item_id: str, item: Item = Body(..., embed = True)):
    return {"name": item_id, "Item": item}


@router.post("/")
async def post_items(item: Item = Body(..., embed = True)):
    print(item)
    return {"item": item}

