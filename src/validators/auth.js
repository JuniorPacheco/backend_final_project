const { check } = require("express-validator");
const validationResults = require("../utils/handleValidators");

const validatorLogin = [
  check("email")
    .exists()
    .withMessage("This field is required")
    .isEmail()
    .withMessage("Enter a valid email"),
  check("password")
    .exists()
    .withMessage("This field is required")
    .isLength({ max: 200, min: 8 })
    .withMessage("This field must be between 8 and 200 characters long"),
  (req, res, next) => validationResults(req, res, next),
];

const validatorRegister = [
  check("email")
    .exists()
    .withMessage("This field is required")
    .isEmail()
    .withMessage("Enter a valid email"),
  check("password")
    .exists()
    .withMessage("This field is required")
    .isLength({ max: 200, min: 8 })
    .withMessage("This field must be between 8 and 200 characters long"),
  check("name")
    .exists()
    .withMessage("This field is required")
    .isLength({ max: 50, min: 1 })
    .withMessage("This field must be between 1 and 50 characters long"),
  (req, res, next) => validationResults(req, res, next),
];

module.exports = { validatorLogin, validatorRegister };
