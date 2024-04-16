const express = require("express");

// Express app
const app = express();

// Config variables
const localHost = "127.0.0.1";
const PORT = 3030;

// Middleware
app.get("/", (req, res) => {
  res.send("Working");
});

// Listen
app.listen(PORT, localHost, () => {
  console.log(`API is listening on ${PORT}`);
});
