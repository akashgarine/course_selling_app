const mongoose =require("mongoose");



const purchaseSchema= new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    creatorId: mongoose.Types.ObjectId
})

mongoose.export=mongoose.model("purchase",purchaseSchema);