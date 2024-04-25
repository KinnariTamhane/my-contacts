const mongoose = require('mongoose');
const uri = "mongodb+srv://kinnari123:admin123@kinnaricluster.njse3tl.mongodb.net/?retryWrites=true&w=majority&appName=kinnariCluster";


const connect = async() =>{
 try{
    const connectToDB = await mongoose.connect(uri);
 }
 catch(error){
    console.log('error',error);
    process.exit(1);
 }
}

module.exports = connect;