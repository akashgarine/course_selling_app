const jwtwebtoken=require("jsonwebtoken");
const {JWT_USER_SECRET}=require("../config");

const userMiddleware=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        return res.status(401).json({message:"No token provided"});
    }
    try{
        const decoded=jwtwebtoken.verify(token,JWT_USER_SECRET);
        req.user=decoded.id;
        next();
    }
    catch(e){
        return res.status(401).json({message:"Unauthorized"});
    }
}
module.exports=userMiddleware;
