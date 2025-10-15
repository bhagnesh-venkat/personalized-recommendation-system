// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Create the express app
const app = express();

// Define the port number (from .env or default 5000)
const PORT = process.env.PORT || 5000;

// Middleware (helps process requests)
app.use(cors());           // allows requests from frontend
app.use(express.json());   // allows sending JSON data

// Simple route to test server
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ Error connecting to DB:", err));
