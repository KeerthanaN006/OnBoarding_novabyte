const axios = require("axios");

(async () => {
  try {
    await axios.post("http://localhost:3000/api/v1/connectors/1/config", {
      api_key: "",
      base_url: ""
    });

    console.log(JSON.stringify({
      ticket_id: "FLOW-INTERN-001",
      status: "FAIL",
      message: "Empty strings accepted"
    }));
  } catch (err) {
    if (err.response && err.response.status === 400) {
      console.log(JSON.stringify({
        ticket_id: "FLOW-INTERN-001",
        status: "PASS"
      }));
    } else {
      console.log(JSON.stringify({
        ticket_id: "FLOW-INTERN-001",
        status: "FAIL",
        message: "Unexpected error"
      }));
    }
  }
})();