const mongoose=require("mongoose");

const adminSchema= new mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String,
    firstname:String,
    lastname:String,
})


module.exports=mongoose.model("admin",adminSchema);