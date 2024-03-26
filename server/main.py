from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from routers.api import api_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Run when starts the server.
    print("Starting server...")
   
    yield
    # Run when shutdown the server.
    print("Shutdown server..")


app = FastAPI(
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

app.include_router(api_router)
