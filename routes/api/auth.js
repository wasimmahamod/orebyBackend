const express =require('express');
const router =express.Router();
var jwt = require('jsonwebtoken');
const User =require('../../model/user.js')
const registrationControllers=require('../../controllers/authControllers/registrationControllers')
const loginControllers=require('../../controllers/authControllers/loginControllers.js');
const emailVerificationOtpControllers = require('../../controllers/authControllers/emailVerifyOtpControllers.js');

router.post('/singup',registrationControllers)

router.post('/emailverify',emailVerificationOtpControllers)

router.post('/login',loginControllers)

module.exports=router;