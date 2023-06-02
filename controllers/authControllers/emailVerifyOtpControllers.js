const User = require("../../model/user");

async function emailVerificationOtpControllers(req, res) {
  let { email, otp } = req.body;
  let existingUser = await User.find({ email });
  if (!email) {
    return res.json({ error: "Email is Required " });
  } else {
    if (existingUser.length > 0) {
      if (existingUser[0].otp == otp) {
        res.json({ success: "Otp match " });
        let verifyemail = await User.findOneAndUpdate(
          { email },
          { verifid: true },
          { new: true }
        );
        let otpDeleted = await User.findOneAndUpdate(
          { email },
          { $unset: { otp: "" } },
          { new: true }
        );
      } else {
        return res.json({ error: "otp not match " });
      }
    } else {
      return res.json({ error: "Email not found" });
    }
  }
}

module.exports = emailVerificationOtpControllers;
