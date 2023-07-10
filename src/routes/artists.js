const express = require("express");
const passport = require("passport");
const { getById } = require("../services/artist");
require("../middleware/auth")(passport);

const router = express.Router();

router.get("/:id", passport.authenticate("jwt", { session: false }),  getById);

module.exports = router;