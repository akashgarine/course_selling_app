const express=require("express");
const router=express.Router();


router.post("/courses",function(req,res) {
    console.log("hi");
});
router.post("/purchase",function(req,res){
    console.log("hi");
});



module.exports=router;