const express=require('express')
const router=express.Router()
const {getGoals,PostGoal,UpdateGoal,DeleteGoal}=require("../controllers/goalscontroller")

router.route("/").get(getGoals).post(PostGoal)
router.route("/:id").put(UpdateGoal).delete(DeleteGoal)

//an alternative
// router.get("/",getGoals)
// router.post("/",PostGoal)
// router.put("/:id",UpdateGoal)
// router.delete("/:id",DeleteGoal)

module.exports=router