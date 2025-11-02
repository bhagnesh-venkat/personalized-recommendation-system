const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  tags: {
    type: [String], // Example: ["action", "drama", "thriller"]
  },
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Item", itemSchema);
