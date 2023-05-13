const emailValidation = require('../../helpars/emaiValidation');
const emailVerification = require('../../helpars/emailVerification');
const User = require('../../model/user.js');
const bcrypt = require('bcrypt');
const emailTemplate = require('../../helpars/emailTemplate');
var jwt = require('jsonwebtoken');


async function registrationControllers (req, res) {

    const {fname,lname,email,password}=req.body;

    if(!fname || !lname){
        return res.json({error:'Frist Name and Last Name is Required '})
    }

    if(emailValidation(email)){
        return res.json({error:'Valid Email Required'})
    }

    let existingUserCheck=await User.find({email})
    if(existingUserCheck.length>0){
        return res.json({error:'Email Already In Use'})
    }

    bcrypt.hash(password, 10, function(err, hash) {
        let user=new User({
            fname:fname,
            lname:lname,
            email:email,
            password:hash,
        })
        var token = jwt.sign({ email },process.env.JWTSCRET,{ expiresIn: '1h' });
        emailVerification(user.email,emailTemplate(token))
        user.save()
        res.send(user)
    });
  
}

module.exports=registrationControllers;