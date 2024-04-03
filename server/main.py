from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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


@app.get("/hello")
def read_root():
    return {"Hello": "World"}

app.include_router(api_router)



# Get the directory of the current script
current_dir = os.path.dirname(os.path.realpath(__file__))



# Make sure to replace 'path_to_your_static_files' with the actual path to your static files
app.mount("/public", StaticFiles(directory="public"), name="public")