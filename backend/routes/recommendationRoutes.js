const router = require("express").Router();
const Recommendation = require("../models/Recommendation");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

// Recommend a movie
router.post("/", verifyToken, async (req, res) => {
  try {
    const newRec = new Recommendation({
      userId: req.user.id,
      movieId: req.body.movieId,
      message: req.body.message,
      rating: req.body.rating,
    });

    const savedRec = await newRec.save();
    res.status(201).json(savedRec);
  } catch (err) {
    res.status(500).json({ message: "Error creating recommendation", error: err.message });
  }
});

// Get all recommendations
router.get("/all", verifyToken, async (req, res) => {
  try {
    const recs = await Recommendation.find()
      .populate("userId", "name email")
      .populate("movieId", "title genre releaseYear");
    res.status(200).json(recs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching recommendations", error: err.message });
  }
});

// Get recommendations by user
router.get("/user/:id", verifyToken, async (req, res) => {
  try {
    const recs = await Recommendation.find({ userId: req.params.id })
      .populate("movieId", "title genre releaseYear");
    res.status(200).json(recs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user recommendations", error: err.message });
  }
});

// ✅ Delete a recommendation (Admin only)
router.delete("/:id", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const deletedRecommendation = await Recommendation.findByIdAndDelete(req.params.id);
    if (!deletedRecommendation) return res.status(404).json("Recommendation not found");
    res.status(200).json("Recommendation deleted successfully");
  } catch (err) {
    res.status(500).json({ message: "Error deleting recommendation", error: err.message });
  }
});

module.exports = router;
