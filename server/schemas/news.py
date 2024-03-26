from pydantic import BaseModel, Json

class NewsResponseSchema(BaseModel):
    newsData: Json


class CurrencyForecastSchema(BaseModel):
    Daily: Json
    Yearly: Json