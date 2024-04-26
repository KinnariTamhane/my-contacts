const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwtToken = require('jsonwebtoken');

const registerUser = asyncHandler(async(req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(404);
        throw new Error('All fields are required');
    }

    const userAvailable = await User.findOne({email})

    if(userAvailable){
        res.status(404);
        throw new Error('User does not exist');
    }
    else{
        const hashPassword = await bcrypt.hash(password,10);

        const userCreated = User.create({
            name,
            email,
            password : hashPassword
        })
    
        if(userCreated){
            res.status(201).json({message:"User Created"});
        }
        else{
            res.status(404);
            throw new Error('unable to create user');
        }
    }

})

const loggedInUser = asyncHandler(async(req,res) =>{ 
    res.status(201).json(req.User);
})

const loginUser = asyncHandler(async(req,res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(404);
        throw new Error('No contacts found!');
    }
    const user = await User.findOne({email})
    if(!user){
        res.status(404);
        throw new Error('User not found!');
    }
    if(user && (await bcrypt.compare(password,user.password))){
        const authToken = jwtToken.sign(
            {
                user:{
                    id : user.id,
                    username : user.name,
                    email : user.email
                },
            },
            "admin123",
            {expiresIn: "30m"}
        )
        if(authToken){
            // console.log(authToken)
            res.status(201).json({message:"User login successful..."});
        }
    }
    else{
        res.status(404);
        throw new Error('Password Mismatch');
    }
})

module.exports = {registerUser, loginUser, loggedInUser}