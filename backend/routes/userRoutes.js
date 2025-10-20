const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");

// Example of a protected route
router.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Access granted — this is a protected route",
    user: req.user, // comes from verifyToken.js
  });
});

module.exports = router;
