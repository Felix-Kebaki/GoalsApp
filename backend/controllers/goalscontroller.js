const asyncHandler = require("express-async-handler"); //this library helps us avoid using try and catch
const Goal = require("../models/goalsModel");
const User = require("../models/userModel");

//whenever you interact with database ,you get a promise thus we use async functions
//GET
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({user:req.user.id});//user in filter object is the "user" used at goals models
  res.status(200).json(goals);
});

//POST
const PostGoal = asyncHandler(async (req, res) => {
  console.log(req.user)
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text!!");
  }
  const goals = await Goal.create({
    text: req.body.text,
    user:req.user._id
  });
  res.status(200).json(goals);
});

//UPDATE
const UpdateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    throw new Error("The goal can't be found!!!");
  }

  //check for user
  if(!req.user){
    res.status(401)
    throw new Error("User not found!!!")
  }

  //make sure logged in user matches goal user
  if(goal.user.toString() !== req.user.id){
    res.status(401)
    throw new Error("User not authorized!!!")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body.text,
    { new: true }
  );
  res.status(200).json(updatedGoal);
});

//DELETE
const DeleteGoal = asyncHandler(async (req, res) => {
  const goal=await Goal.findById(req.params.id)
  if(!goal){
    throw new Error("The goal can't be found!!!")
  }

  //check for user
  if(!req.user){
    res.status(401)
    throw new Error("User not found!!!")
  }

  //make sure logged in user matches goal user
  if(goal.user.toString() !== req.user.id){
    res.status(401)
    throw new Error("User not authorized!!!")
  }
  
  await goal.remove();
  res.status(200).json({id:req.params.id});
});

module.exports = {
  getGoals,
  PostGoal,
  UpdateGoal,
  DeleteGoal,
};
