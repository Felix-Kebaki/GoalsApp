const asyncHandler = require("express-async-handler"); //this library helps us avoid using try and catch
const Goal = require("../models/goalsModel");

//whenever you interact with database ,you get a promise thus we use async functions
//GET
const getGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    //by default error message will be in text/html,the error middleware prevent that default
    throw new Error("Please enter text!!");
  }
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//POST
const PostGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text!!");
  }
  const goals = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goals);
});

//UPDATE
const UpdateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    throw new Error("The goal can't be found!!!");
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
  await goal.remove();
  res.status(200).json({id:req.params.id});
});

module.exports = {
  getGoals,
  PostGoal,
  UpdateGoal,
  DeleteGoal,
};
