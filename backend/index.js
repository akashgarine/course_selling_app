const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());

async function main(){
    try{
        await mongoose.connect('');
        console.log("DataBase connected");
    }
    catch(e){
        console.log(e);
    }
    
}

main();
const UserRoutes=require("./routes/user");
const CourseRoutes=require("./routes/course");
const AdminRoutes=require("./routes/admin");
app.use("/user",UserRoutes);
app.use("/course",CourseRoutes);
app.use("/admin",AdminRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});