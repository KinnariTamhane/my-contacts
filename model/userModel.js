const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : [true , "user already exists"],
        required : true
    },
    password : {
        type : String,
        required : true
    },
},{
    Timestamp : true
})

module.exports = mongoose.model('User',userSchema);