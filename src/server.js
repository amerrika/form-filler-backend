const express = require("express");
const cors = require("cors");
const companyRoutes = require("./routes/companyRoutes");

// Express app
const app = express();

// Configs
const localHost = "localhost";
const PORT = 3030;

// Middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/companies", companyRoutes);

// Listen
app.listen(PORT, localHost, () => {
  console.log(`API is listening on ${PORT}`);
});
