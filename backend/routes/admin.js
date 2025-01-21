const express=require("express");
const router=express.Router();
const User=require("../models/User")
router.post("/courses",function(req,res) {
    console.log("hi");
});

router.post("/signup",function(req,res){
    console.log("hi");
});

router.post("/signin",function(req,res){
    console.log("hi");
});




module.exports=router;