const nodemailer = require("nodemailer");

async function emailVerification(email,emailTemplate){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:process.env.USEREMAIL, 
          pass:process.env.USERPASSWORD, 
        },
      });
      let info = await transporter.sendMail({
        from: 'Oreby', // sender address
        to: email, // list of receivers
        subject: "Verification", // Subject line
        html: emailTemplate, 
      });
}

module.exports=emailVerification;