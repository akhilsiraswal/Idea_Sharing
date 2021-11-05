const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ideas: [
    {
      type: ObjectId,
      ref: "Idea",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
