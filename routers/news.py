from fastapi import APIRouter
from schemas.news import NewsResponseSchema

router = APIRouter()

@router.get("/news/all", response_model=NewsResponseSchema)
async def getNewsList():
    return None
