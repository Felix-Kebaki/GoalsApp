const express=require('express')
const router=express.Router()
const {getGoals,PostGoal,UpdateGoal,DeleteGoal}=require("../controllers/goalscontroller")
const {Protect}=require("../middleware/AuthMiddleware")

router.route("/").get(Protect,getGoals).post(Protect,PostGoal)
router.route("/:id").put(Protect,UpdateGoal).delete(Protect,DeleteGoal)

//an alternative
// router.get("/",getGoals)
// router.post("/",PostGoal)
// router.put("/:id",UpdateGoal)
// router.delete("/:id",DeleteGoal)

module.exports=router