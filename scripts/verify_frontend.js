const fs = require("fs");

try {
  const content = fs.readFileSync(
    "./frontend/src/components/StatusBadge.tsx",
    "utf-8"
  );

  if (content.includes("Running") && content.includes("Failed")) {
    console.log(JSON.stringify({
      ticket_id: "FLOW-FE-001",
      status: "PASS"
    }));
  } else {
    console.log(JSON.stringify({
      ticket_id: "FLOW-FE-001",
      status: "FAIL",
      message: "Missing new states"
    }));
  }

} catch (err) {
  console.log(JSON.stringify({
    ticket_id: "FLOW-FE-001",
    status: "FAIL",
    message: "File not found or error reading file"
  }));
}