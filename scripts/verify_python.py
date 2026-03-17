import requests
import json

res = requests.post("http://localhost:8000/api/v1/workflows", json={"name": "@@@"})

if res.status_code == 422:
    print(json.dumps({
        "ticket_id": "FLOW-JR-001",
        "status": "PASS"
    }))
else:
    print(json.dumps({
        "ticket_id": "FLOW-JR-001",
        "status": "FAIL",
        "message": "Invalid name accepted"
    }))