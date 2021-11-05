// const idea = require("../models/idea");
const Idea = require("../models/idea");
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

exports.createIdea = (req, res) => {
  console.log("inside createIdea");

  const idea = new Idea(req.body);
  // console.log(req.user);

  const userId = req.user._id;
  idea.save().then((idea, err) => {
    if (err || !idea) {
      res.status(500).json({
        error: err || "Idea Not saved",
      });
    }
    var ideas = [];

    ideas.push(idea);

    User.findOneAndUpdate(
      { _id: userId },
      { $push: { ideas: ideas } },
      { new: true },
      (err, updatedUser) => {
        if (err || !updatedUser) {
          res.status(500).json({
            error: err || "Idea Not SAVed..",
          });
        }
      }
    );

    return res.status(200).json({
      idea,
    });
  });
};
