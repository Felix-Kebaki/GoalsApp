const mongoose=require("mongoose")

const goalSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"//name of model to reference
    },
    text:{
        type:String,
        required:[true ,"Please add a text value"]
    }
},{
    timestamps:true
})

module.exports=mongoose.model("Goal",goalSchema)  //in quotes is the name of the model