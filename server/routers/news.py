from fastapi import APIRouter
from schemas.news import NewsResponseSchema, CurrencyForecastSchema
from utils.newsfilter import getFinancialNews
from utils.usdjpyforecast import currencyForecast

router = APIRouter()

@router.get("/news/all", response_model=NewsResponseSchema)
async def getNewsList():
    response = getFinancialNews()
    return response


@router.get("/news/forecast", response_model=CurrencyForecastSchema)
async def getCurrencyForecast():
    response = currencyForecast()
    return response


