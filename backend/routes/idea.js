const express = require("express");
const { getUserById } = require("../controllers/user");
const { findAllIdeas, createIdea } = require("../controllers/idea");
const router = express.Router();

router.param("userId", getUserById);

router.get("/allIdeas", findAllIdeas);
router.post("/createIdea/:userId", createIdea);
module.exports = router;
