const express=require("express")
const dotenv=require("dotenv").config()
const {errorHandler}=require("./middleware/ErrorMiddleware")
const {connectToDB}=require("./config/db");
const cors=require("cors")
const app=express();

const PORT=process.env.PORT || 5000;


app.use(cors())
// {
//     origin:"http://localhost:5173",
//     methods:['POST','GET','DELETE','PUT'],
//     allowedHeaders:['Content-Type']
//   }

//middleware to use req.body functionality
app.use(express.json())
// app.use(express.urlencoded({extended:false}))


//for getting the route
app.use("/api/goals",require("./router/goalsrouter"))
app.use("/api/users",require("./router/usersrouter"))


//handling unknown route
app.all("*",(req,res,next)=>{
    throw new Error("Invalid url!!")
})

//overwritting defult error handling
app.use(errorHandler)



app.listen(PORT,()=>{
    connectToDB()
    console.log(`Server listening to port ${PORT}.....`)
})