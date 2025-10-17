// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("dotenv").config();

// Create the express app
const app = express();

// Define the port number (from .env or default 5000)
const PORT = process.env.PORT || 5000;

// Middleware (helps process requests)
app.use(cors());           // allows requests from frontend
app.use(bodyParser.json());   // allows sending JSON data


// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log(err));


// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Personalized Recommendation API!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
