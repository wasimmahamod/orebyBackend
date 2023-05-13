const express =require('express');
const router =express.Router();
var jwt = require('jsonwebtoken');
const User =require('../../model/user.js')
const registrationControllers=require('../../controllers/authControllers/registrationControllers')
const loginControllers=require('../../controllers/authControllers/loginControllers.js')

router.post('/singup',registrationControllers)

router.post('/verify',async function(req,res){
    const{authorization}=req.headers;
    var decoded = jwt.verify(authorization, 'shhhhh');

    let updateUser=await User.findOneAndUpdate({email:decoded.email},{verifed:true},{new:true})
    res.json(updateUser)
})

router.get('/login',loginControllers)

module.exports=router;