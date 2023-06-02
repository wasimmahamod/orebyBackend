const User = require("../../model/user");
const bcrypt = require("bcrypt");
async function loginControllers(req, res) {
  let { email, password } = req.body;
  let existingUser = await User.find({ email });
  if (!email) {
    return res.json({ error: "Email is Required " });
  } else if (!password) {
    return res.json({ error: "Password is Required " });
  } else if (existingUser.length == 0) {
    return res.json({ error: "Email not found" });
  } else {
    bcrypt.compare(password, existingUser[0].password).then(function (result) {
      if (result) {
        res.json({ success: "Login Successfull " });
      } else {
        return res.json({ error: "Password not match " });
      }
    });
  }
}

module.exports = loginControllers;
