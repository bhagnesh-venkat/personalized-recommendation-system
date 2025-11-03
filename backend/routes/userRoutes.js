const router = require("express").Router();
const User = require("../models/User");
const verifyToken = require("../middleware/verifyToken");
const bcrypt = require("bcryptjs");

// GET user profile (protected route)
router.get("/profile", verifyToken, async (req, res) => {
  try {
    // req.user.id is available because of JWT verification
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json("User not found");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update user profile
router.put("/update",verifyToken,async(req,res)=>{
  try{
    const {name, email, password} = req.body;
    const updatedData = {};
    if(name) updatedData.name = name;
    if(email) updatedData.email = email;
    if(password){
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(password,salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {$set:updatedData},
      {new:true}
    ).select("-password");
    res.status(200).json(updatedUser);
  }catch(err){
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
});

// GET ALL USERS (Admin only)
router.get("/all", verifyToken, async (req, res) => {
  try {
    // Check if the logged-in user is admin
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Access Denied! Admins only." });
    }

    // Get all users (exclude passwords)
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});


// DELETE USER
router.delete("/delete",verifyToken,async(req,res)=>{
  try{
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "User deleted successfully" });
  }catch(err){
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
});

module.exports = router;
