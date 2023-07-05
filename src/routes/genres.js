const express = require("express");
const { getAll } = require("../services/genre");

const router = express.Router();

router.get("/", getAll);

module.exports = router;
