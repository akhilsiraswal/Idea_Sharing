const User = require("../models/user");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const expressJwt = require("express-jwt");

exports.signin = (req, res) => {
  console.log(req.body);
  User.find({ email: req.body.email }).then((user, err) => {
    if (err || !user) {
      return res.status(500).json({
        error: err || "Email or password not correct",
        // error: "error",
      });
    } else {
      // console.log(user);
      // console.log(err);
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(200).json({
            error: err,
          });
        }
        if (result) {
          const { _id, email, name } = user[0];
          const token = jwt.sign({ _id }, process.env.SECRET);
          console.log(token);
          res.cookie("token", token);
          res.status(200).json({
            token,
            user: { _id, name, email },
          });
        }
      });
    }
  });
};

exports.signup = (req, res) => {
  User.find({ email: req.body.email }).then((user, err) => {
    if (err || user[0]) {
      return res.status(404).json({
        error: err || "User already registered",
      });
    }
    const { username, email, password } = req.body;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log("error while signup");
        res.status(400).json({
          error: err,
        });
      }
      const newUser = new User({
        name: username,
        email: email,
        password: hash,
      });

      newUser.save((err, user) => {
        if (err || !user) {
          return res.status(500).json({
            error: err || "Error !! User not saved",
          });
        }

        const { _id, name, email } = user;
        const token = jwt.sign({ _id }, process.env.SECRET);

        return res.status(200).json({
          _id,
          name,
          email,
        });
      });
    });
  });
};

exports.signout = (req, res) => {
  console.log("inside signout");
  res.clearCookie("token");
  res.status(200).json({
    message: "User Signout Successfully",
  });
};
