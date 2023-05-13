const mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect(process.env.MONGODBURL)
    .then(() => console.log('db Connected!'));
}

module.exports =dbConnection;