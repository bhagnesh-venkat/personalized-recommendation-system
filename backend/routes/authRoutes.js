const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Register user
router.post("/register", async (req, res) => {
  try{
    //generate hashed password
    const salt= await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    //create a new user
    const newUser=new User({
      name:req.body.name,
      email:req.body.email,
      password:hashedPassword,
    });  

    //save user
    const user=await newUser.save();
    res.status(200).json(user);
  }catch(err){
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login",async(req,res)=>{
  try{
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(404).json("User not found");
    
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(404).json("Wrong Password");

    res.status(200).json(user);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
