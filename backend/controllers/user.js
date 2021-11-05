const User = require("../models/user");
exports.getUserById = (req, res, next, id) => {
  User.findById(id).then((user, err) => {
    if (err || !user) {
      console.log("inside iff... ");
      console.log(err);
      res.status(500).json({
        error: err || "User Not Found",
      });
    }
    req.user = user;
    next();
  });
};
