from fastapi import APIRouter, Body
from pydantic import BaseModel
from apps.middlewares.pymongo_middleware import Collection


router = APIRouter()


@router.post("/login")
async def login():
    visits_collects = Collection(table_name="visits")
    number = visits_collects.get_one()
    if not number:
        visits_collects.add_one({"_id": 1, "number": 1})
    else:
        visits_collects.update_one_data({"_id": 1}, {'$inc': {"number": 1}})
    return {"token": "he", "code": 1}


@router.post("/logout")
async def logout():
    return {"code": 1}
