const MONGO_URL=process.env.MONGO_URL ;
const JWT_USER_SECRET=   process.env.JWT_USER_SECRET;
const JWT_ADMIN_SECRET= process.env.JWT_ADMIN_SECRET;

module.exports={
    MONGO_URL,
    JWT_USER_SECRET,
    JWT_ADMIN_SECRET
}
