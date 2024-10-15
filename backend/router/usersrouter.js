const express=require("express")
const router=express.Router()
const {getUser,RegisterUser,LoginUser}=require("../controllers/usercontroller")

router.post("/Login",LoginUser)
router.get("/profile",getUser)
router.post("/register",RegisterUser)


module.exports=router