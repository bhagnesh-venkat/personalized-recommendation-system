const router = require("express").Router();
const Movie = require("../models/Movie");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

// Add a movie (admin only)
router.post("/", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json({ message: "Error adding movie", error: err.message });
  }
});

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies", error: err.message });
  }
});

module.exports = router;
