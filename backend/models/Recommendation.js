const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    message: {
      type: String,
      max: 500,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
  },
  { timestamps: true }
);

// Prevent duplicate recommendations by same user for same movie
recommendationSchema.index({ userId: 1, movieId: 1 }, { unique: true });

module.exports = mongoose.model("Recommendation", recommendationSchema);
