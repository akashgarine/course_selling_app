    const jwtwebtoken=require("jsonwebtoken");
    const {JWT_ADMIN_SECRET}=require("../config");
    const adminMiddleware=(req,res,next)=>{
        const token=req.header('Authorization');
        if(!token){
            return res.status(401).json({message:"No token provided"});
        }
        try{
            const decoded=jwtwebtoken.verify(token,JWT_ADMIN_SECRET);
            req.userId=decoded.id;
            next();
        }
        catch(e){
            return res.status(401).json({message:"Unauthorized"});
        }
    }
    module.exports=adminMiddleware;
