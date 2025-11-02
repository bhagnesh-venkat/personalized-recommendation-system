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
    if(namr) updatedData.name = name;
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

module.exports = router;
