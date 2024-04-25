const express = require('express');
const app = express();
const errorHandling = require('./middleware/errorHandling');
const connection = require('./config/dbConnection');
const port = 5001;

app.use(express.json());

app.use('/api/contacts',require('./routes/contactRouter'))
app.use(errorHandling);
connection();
app.listen(port,()=>{
    console.log(`listening to the PORT ${port}`)
})