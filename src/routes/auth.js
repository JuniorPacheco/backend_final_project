const express = require("express");
const authServices = require("../services/auth");
const { register } = require("../services/user");
const passport = require("passport");
const { validatorLogin, validatorRegister } = require("../validators/auth");
require("../middleware/auth")(passport);

const router = express.Router();

//TODO: http://localhost:3001/api/auth POST

router.post("/register", validatorRegister, register);

router.post("/login", validatorLogin, authServices.login);

module.exports = router;
