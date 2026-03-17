import sys
import subprocess

checks = {
    "python": sys.version,
    "node": subprocess.getoutput("node -v"),
    "npm": subprocess.getoutput("npm -v")
}

print(checks)