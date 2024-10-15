const express=require("express")
const dotenv=require("dotenv").config()
const {errorHandler}=require("./middleware/ErrorMiddleware")
const {connectToDB}=require("./config/db");
const app=express();

const PORT=process.env.PORT || 5000;


//middleware to use req.body functionality
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//for getting the route
app.use("/api/goals",require("./router/goalsrouter"))
app.use("/api/users",require("./router/usersrouter"))


//overwritting defult error handling
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server listening to port ${PORT}.....`)
})