const { check } = require("express-validator");
const validationResults = require("../utils/handleValidators");

const validatorSeachTrack = [
  check("q")
    .exists()
    .withMessage("This query param is required")
    .notEmpty()
    .withMessage("This query param cannot be blank")
    .isLength({ max: 50 })
    .withMessage("The maximum length is 50 characters."),
  check("limit")
    .notEmpty()
    .withMessage("This query param cannot be blank")
    .isInt({ min: 1, max: 50 })
    .withMessage(
      "The limit has to be between a range of 1 to 50 and it has to be an enter value"
    ),
  (req, res, next) => validationResults(req, res, next),
];

module.exports = { validatorSeachTrack };
