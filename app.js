const express = require("express");
const pool = require("./db/connect");
const app = express();

const PORT = process.env.PORT || 3000;

// Test database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("reunion-backend active");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
