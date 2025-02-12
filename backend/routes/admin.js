const express=require("express");
const router=express.Router();
const Admin=require("../models/Admin");
const {JWT_ADMIN_SECRET}=require("../config");
const jwt=require("jsonwebtoken");
const adminMiddleware=require("../middlewares/adminMiddleware");
const bcrypt = require("bcrypt");
const Course=require("../models/Course");


router.post("/courses",adminMiddleware,async function(req,res) {
    const adminId=req.userId;
    console.log(typeof adminId);
     const {title,description,price,imageURL}=req.body;
     try{
            const newCourse= new Course({
                title:title,
                description:description,
                price:price,
                imageURL:imageURL,
                creatorId :adminId,
            });
            await newCourse.save();
            return res.status(200).json({message:'Course added successfully',
                courseId:newCourse._id}); 

     }
     catch(error){
         res.status(500).json({message:'Error adding course',error});
     }
});
router.put("/courses",adminMiddleware,async function(req,res) {
    const adminId=req.userId;
    console.log(typeof adminId);
     const {title,description,price,imageURL,courseId}=req.body;
     try{
            const newCourse=await Course.updateOne({
                _id:courseId,
                creatorId:adminId},
                {
                title:title,
                description:description,
                price:price,
                imageURL:imageURL,
                creatorId :adminId,
            });
            return res.status(200).json({message:'Course updated successfully',
                courseId:newCourse._id}); 

     }
     catch(error){
         res.status(500).json({message:'Error adding course',error});
     }
});

router.post("/signup",async function(req,res){
    const {email,password,firstname ,lastname}=req.body;
    console.log(req.body);
    const hashedpassword=await bcrypt.hash(password,5);
    try{
        const newUser=new Admin({
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
        const user=await Admin.findOne({email});console.log(user);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token=jwt.sign({
            id:user._id},JWT_ADMIN_SECRET, { expiresIn: '1h' });
        return res.json({ token, userId: user._id, message: 'User logged in' });
    }
    catch(error){
        return res.status(500).json({message:'Error logging user', error });
    }
});
router.get("/courses/bulk",adminMiddleware,async function(req,res) {
    const adminId=req.userId;
     try{
            const yourCourses=await Course.find({creatorId:adminId});

            return res.status(200).json({message:' your Courses successfully',
                courses:yourCourses}); 

     }
     catch(error){
         res.status(500).json({message:'Error adding course',error});
     }
});




module.exports=router;