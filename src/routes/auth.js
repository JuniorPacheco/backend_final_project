const express = require("express");
const authServices = require("../services/auth");
const { register } = require("../services/user");
const { validatorLogin, validatorRegister } = require("../validators/auth");

const router = express.Router();

//TODO: http://localhost:3001/api/auth POST

router.post("/register", validatorRegister, register);

router.post("/login", validatorLogin, authServices.login);

module.exports = router;
