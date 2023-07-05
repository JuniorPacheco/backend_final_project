const express = require("express");
const { getRecomendations, getById, getAllBySearch } = require("../services/track");
const { validatorSeachTrack } = require("../validators/track");

const router = express.Router();

router.get("/", validatorSeachTrack, getAllBySearch)

router.get("/recommendations", getRecomendations);

router.get("/:id", getById)

module.exports = router;