import subprocess
import json

def run(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout.strip()

outputs = []

commands = [
    "node scripts/verify_backend.js",
    "node scripts/verify_sanitization.js",
    "python scripts/verify_python.py",
    "python scripts/verify_health.py",
    "node scripts/verify_frontend.js"
]

for cmd in commands:
    try:
        out = run(cmd)
        outputs.append(json.loads(out))
    except:
        outputs.append({
            "ticket_id": "UNKNOWN",
            "status": "FAIL",
            "message": f"Error running {cmd}"
        })

final_output = {
    "results": outputs
}

print(json.dumps(final_output, indent=2))