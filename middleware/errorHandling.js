const errorHandling = (error,req,res,next) => {
   if (res.statusCode != 200){
    res.json({message:error})
   }
}

module.exports = errorHandling;