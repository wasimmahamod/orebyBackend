const emailValidation = require("../../helpars/emaiValidation");
const emailVerification = require("../../helpars/emailVerification");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const User = require("../../model/user.js");
const bcrypt = require("bcrypt");
const emailTemplate = require("../../helpars/emailTemplate");
// var jwt = require('jsonwebtoken');

async function registrationControllers(req, res) {
  const { fullname, email, password } = req.body;

  if (!fullname) {
    return res.json({ error: "Name is Required " });
  }

  if (emailValidation(email)) {
    return res.json({ error: "Valid Email Required" });
  }

  let existingUserCheck = await User.find({ email });
  if (existingUserCheck.length > 0) {
    return res.json({ error: "Email Already In Use" });
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    let user = new User({
      fullname,
      email: email,
      password: hash,
    });
    // var token = jwt.sign({ email },process.env.JWTSCRET,{ expiresIn: '1h' });
    user.save();
    const generator2 = aleaRNGFactory(Date.now());
    let randomOtp = generator2.uInt32().toString().substring(0, 4);
    let otpset = await User.findOneAndUpdate(
      { email },
      { $set: { otp: randomOtp } },
      { new: true }
    );
    emailVerification(user.email, emailTemplate(randomOtp));

    res.send(user);
  });
}

module.exports = registrationControllers;
