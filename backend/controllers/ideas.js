const Idea = require("../models/ideas");
const User = require("../models/user");

exports.findAllIdeas = (req, res) => {
  Idea.find().then((err, ideas) => {
    if (err || !ideas) {
      res.status(404).json({
        error: err || "Ideas not found",
      });
    }
    return res.status(200).json(ideas);
  });
};

exports.deleteIdea = (req, res) => {
  idea = res.ideas;

  Idea.findOneAndDelete({ _id: idea._id }).then((err, updatedIdeas) => {
    if (err || !updatedIdeas) {
      res.status(404).json({
        error: err || "Idea cannot be deleted",
      });
    }

    res.status(200).json(updatedIdeas);
  });
};

exports.findUserIdeas = (req, res) => {
  user = req.user;
  User.findById({ _id: user_id })
    .populate("ideas")
    .exec((err, ideas) => {
      if (err) {
        res.status(404).json({
          error: err,
        });
      }
      res.status(200).json(ideas);
    });
};

exports.getIdeaById = (req, res, id, next) => {
  Idea.findById({ _id: id }).then((err, ideas) => {
    if (err || !idea) {
      res.status(404).json({
        error: err || "Idea Not found",
      });
    }
    res.ideas = ideas;
    next();
  });
};

exports.getUserById = (req, res, id, next) => {
  User.findById({ _id: id }).then((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: err || "Idea Not found",
      });
    }
    res.user = user;
    next();
  });
};

exports.createIdea = (req,res) =>{
  
}