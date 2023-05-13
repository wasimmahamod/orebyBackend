const express =require('express');
const router =express.Router();

const authontication = require('./auth.js')

router.use('/auth',authontication)

module.exports=router;