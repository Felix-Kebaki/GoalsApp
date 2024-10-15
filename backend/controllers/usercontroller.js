const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

//access is PRIVATE
const getUser = asyncHandler(async (req, res) => {
  res.status(200).send("Hello user");
});

const LoginUser = asyncHandler(async (req, res) => {
  res.status(200).send("Hello user");
});

const RegisterUser = asyncHandler(async (req, res) => {
    const {name,email,password}=req.body
    //checking all fields are filled
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please enter details")
    }
    //check if user already exists

    const userExists=await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    //Hash password
    const salt=await bcrypt.genSalt(12)
    const HashedPassword=await bcrypt.hash(password,salt)

    //creating user and saving them to db
    const user=await User.create({
        name,
        email,
        password:HashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            password:user.password
        });
    }else{
        res.status(400)
        throw new Error("Invalid data")
    }

});

// const DeleteUser=(req,res)=>{
//     res.json({message:`User ${req.params.id} deleted`})
// }

module.exports = {
  getUser,
  RegisterUser,
  LoginUser,
};
