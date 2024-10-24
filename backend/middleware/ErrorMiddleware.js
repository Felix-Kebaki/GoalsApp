//using this middleware to overwrite the default error handling

const errorHandler=(err,req,res,next)=>{
    const statusCode=err.statusCode?err.statusCode:500

    res.status(statusCode).json({
        message:err.message,
        status:statusCode,
        stack:process.env.NODE_ENV==="production"?null:err.stack
    })
}

module.exports={errorHandler}