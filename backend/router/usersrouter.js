const express=require("express")
const router=express.Router()
const {getUser,RegisterUser,LoginUser}=require("../controllers/usercontroller")
const {Protect}=require("../middleware/AuthMiddleware")

router.post("/Login",LoginUser)
router.get("/home",Protect,getUser)
router.post("/register",RegisterUser)


module.exports=router