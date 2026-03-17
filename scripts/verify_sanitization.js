const { sanitize } = require("../backend/src/utils/sanitizer");

const input = "<script>alert(1)</script>";
const output = sanitize(input);

if (output.includes("<script>")) {
  console.log(JSON.stringify({
    ticket_id: "FLOW-FS-001",
    status: "FAIL",
    message: "Script tag not removed"
  }));
} else {
  console.log(JSON.stringify({
    ticket_id: "FLOW-FS-001",
    status: "PASS"
  }));
}