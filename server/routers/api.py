from fastapi import APIRouter
from . import news

api_router = APIRouter()

api_router.include_router(news.router, prefix="", tags=["News"])