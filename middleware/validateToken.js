const asyncHandler = require('express-async-handler');

const jwt = require('jsonwebtoken');

const verifyToken = asyncHandler(async(req,res,next)=>{
    let authToken;
    let authHeader = req.headers.authorization ||  req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")){
        authToken = authHeader.split(" ")[1];
        if(!authToken){
            res.status(404)
            throw new Error("UnAuthorized")
        }
        jwt.verify(authToken,'admin123',(err,decoded) => {
            if(err){
                res.status(404);
                throw new Error('unauthorized user');
            }
            req.user = decoded.user;
            next();
        })
    }
})

module.exports = verifyToken;