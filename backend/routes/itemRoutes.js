const express = require("express");
const router = express.Router();
const Item = require("../models/itemModel");
const verifyToken = require("../middleware/verifyToken");

// Add a new item
router.post("/", verifyToken, async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all items
router.get("/", verifyToken, async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
