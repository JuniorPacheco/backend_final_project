const express = require("express");
const { getRecomendations, getById, getAllBySearch } = require("../services/track");
const { validatorSeachTrack } = require("../validators/track");
const passport = require("passport");
require("../middleware/auth")(passport);

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), validatorSeachTrack, getAllBySearch)

router.get("/recommendations", passport.authenticate("jwt", { session: false }), getRecomendations);

router.get("/:id", passport.authenticate("jwt", { session: false }), getById)

module.exports = router;