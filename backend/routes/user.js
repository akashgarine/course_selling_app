const express=require("express");
const User=require("../models/User"); 
const router =express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_SECRET="swttt"
router.post("/signup",async function(req,res){
    const {email,password,firstname ,lastname}=req.body;
    console.log(req.body);
    const hashedpassword=await bcrypt.hash(password,5);
    try{
        const newUser=new User({
            email,
            password:hashedpassword,
            firstname,
            lastname
        });
        await newUser.save();
        res.status(200).json({ message: 'User registered successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Error registering user', error });
    }
});

router.post("/signin",async function(req,res){
    const {email,password}=req.body;
    console.log(email);
    try{
        const user=await User.findOne({email});console.log(user);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token=jwt.sign({id:user._id},JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token, userId: user._id, message: 'User logged in' });
    }
    catch(error){
        return res.status(500).json({message:'Error logging user', error });
    }
});




module.exports=router;