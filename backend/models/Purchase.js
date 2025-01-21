const mongoose =require("mongoose");



const purchaseSchema= new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    creatorId: mongoose.Types.ObjectId
})

mongoose.exports=mongoose.model("purchase",purchaseSchema);