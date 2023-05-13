const express = require('express')
const dbConnection = require('./config/db');

const app = express()
require('dotenv').config();
const router = require('./routes');

dbConnection();



app.use(express.json());
app.use(router)



app.listen(8000,function(){
    console.log("Server is Running")
})