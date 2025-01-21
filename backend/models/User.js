const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/course_selling_app');
const userSchema= new mongoose.Schema({
    email:{
        type:String,
    },
    password:String,
    firstname:String,
    lastname:String,
})


module.exports=mongoose.model("user",userSchema);