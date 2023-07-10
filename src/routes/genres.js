const express = require("express");
const { getAll } = require("../services/genre");
const passport = require("passport");
require("../middleware/auth")(passport);

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAll);

module.exports = router;
