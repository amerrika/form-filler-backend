const express = require("express");
const companyRoutes = require("./routes/companyRoutes")

// Express app
const app = express();

// Config variables
const localHost = "127.0.0.1";
const PORT = 3030;

// Middleware
app.get("/", (req, res) => {
  res.send("Working");
});
app.use("/api/companies", companyRoutes)

// Listen
app.listen(PORT, localHost, () => {
  console.log(`API is listening on ${PORT}`);
});
