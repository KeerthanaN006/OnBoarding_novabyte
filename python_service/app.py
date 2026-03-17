
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Workflow(BaseModel):
    name: str  # BUG: no validation

@app.post("/api/v1/workflows")
def create_workflow(workflow: Workflow):
    return {"data": workflow}

@app.get("/health")
def health():
    return {"status": "healthy"}  # BUG: no dependencies
