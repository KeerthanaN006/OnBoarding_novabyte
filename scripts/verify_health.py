import requests
import json

res = requests.get("http://localhost:8000/health")
data = res.json()

if "dependencies" in data:
    print(json.dumps({
        "ticket_id": "FLOW-JR-002",
        "status": "PASS"
    }))
else:
    print(json.dumps({
        "ticket_id": "FLOW-JR-002",
        "status": "FAIL",
        "message": "Missing dependency checks"
    }))