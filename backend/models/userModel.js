const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name!!']
    },
    email:{
        type:String,
        required:[true,'Please provide your email!!'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please provide your password!!']
    },
},
{
    timestamps:true //creatat and updateat fields will be automatically added to the document
})


module.exports=mongoose.model("User",userSchema)