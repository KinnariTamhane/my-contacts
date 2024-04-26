const errorHandling = (error,req,res,next) => {
   if (res.statusCode != 201){
    res.json({message:error.message})
   }
}

module.exports = errorHandling;