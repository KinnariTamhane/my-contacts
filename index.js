const express = require('express');
const app = express();
const port = 5001;

const errorHandling = require('./middleware/errorHandling');

const connection = require('./config/dbConnection');

app.use(express.json());

app.use('/api/contacts',require('./routes/contactRouter'));

app.use('/api/user',require('./routes/userRouter'));

app.use(errorHandling);
connection();
app.listen(port,()=>{
    console.log(`listening to the PORT ${port}`)
})