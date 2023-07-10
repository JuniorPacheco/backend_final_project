const express = require("express");
const authServices = require("../services/auth");
const { register } = require("../services/user");
const cors = require("cors");
const { validatorLogin, validatorRegister } = require("../validators/auth");

const router = express.Router();

//TODO: http://localhost:3001/api/auth POST

router.post("/register", validatorRegister, register);

router.post("/login", cors(), validatorLogin, authServices.login);

module.exports = router;
