const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  //   console.log("Password received in registerUser:", fullname);

  const hashedPassword = await userModel.hashPassword(password);
  const { firstname, lastname } = fullname;
  console.log(firstname + " " + lastname);
  const user = await userService.createUser({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();

  res.status(201).json({ token });
};
