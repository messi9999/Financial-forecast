from datetime import date, datetime
from pydantic import BaseModel

class NewsResponseSchema(BaseModel):
    title: str
    link: str
    summary: str
    published: datetime
    source: str

