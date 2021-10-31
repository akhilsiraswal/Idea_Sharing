const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const ideaSchema = mongoose.Schema({
  idea: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Idea", ideaSchema);
