from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware

from fastapi.responses import FileResponse

import uvicorn

from routers.api import api_router
import os

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


# @app.get("/hello")
# def read_root():
#     return {"Hello": "World"}

app.include_router(api_router)

# Mount the static files
app.mount("/", StaticFiles(directory="public"), name="public")

@app.get("/")
async def main():
    return FileResponse('public/index.html')


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, log_level="info")