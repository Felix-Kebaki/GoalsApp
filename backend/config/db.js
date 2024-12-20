const mongoose=require("mongoose")
const dotenv=require("dotenv").config()

const connectToDB= async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(conn.connection.host)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports={connectToDB}