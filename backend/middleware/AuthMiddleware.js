const jwt=require("jsonwebtoken")
const asyncHandler=require('express-async-handler')
const User=require("../models/userModel")


const Protect=asyncHandler(async(req,res,next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get token from headers
            token=req.headers.authorization.split(" ")[1]

            //verify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            
            //get user from token
            req.user=await User.findById(decoded.getId).select("-password")
            //req.user shall be used in protected routes and it wont have password as it is excluded 
            
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Unauthorized!!!")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("Unauthorized,no token")
    }
   
})

module.exports={Protect}