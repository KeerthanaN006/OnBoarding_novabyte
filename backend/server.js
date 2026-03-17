
const express = require('express');
const app = express();
app.use(express.json());

const config = require('./src/routes/connector-config');

app.post('/api/v1/connectors/:id/config', config);

app.listen(3000, () => console.log("Backend running"));
