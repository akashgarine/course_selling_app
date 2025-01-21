const mongoose =require("mongoose");
const courseSchema= new mongoose.Schema({
    title:String,
    description:String,
    price:String,
    imageURL : String,
    creatorId: mongoose.Types.ObjectId
})

module.exports=mongoose.model("course",courseSchema);