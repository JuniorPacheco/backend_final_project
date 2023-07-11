const { check } = require("express-validator");
const validationResults = require("../utils/handleValidators");

const validatorCreatePlaylist = [
  check("title")
    .exists()
    .withMessage("This field is required")
    .notEmpty()
    .withMessage("This field cannot be blank")
    .isLength({ max: 50 })
    .withMessage("The maximum length is 50 characters."),
  check("message")
    .exists()
    .withMessage("This field is required")
    .notEmpty()
    .withMessage("This field cannot be blank")
    .isLength({ max: 200 })
    .withMessage("The maximum length is 200 characters."),
  check("from")
    .exists()
    .withMessage("This field is required")
    .notEmpty()
    .withMessage("This field cannot be blank")
    .isLength({ max: 50 })
    .withMessage("The maximum length is 50 characters."),
  check("to")
    .exists()
    .withMessage("This field is required")
    .notEmpty()
    .withMessage("This field cannot be blank")
    .isLength({ max: 50 })
    .withMessage("The maximum length is 50 characters."),
  check("tracks")
    .exists()
    .withMessage("This field is required")
    .isArray({min: 1})
    .withMessage("This field only accepts an array with at least 1 element"),
  check("tracks.*.id")
    .exists()
    .withMessage("Each array position must have an id"),
  (req, res, next) => validationResults(req, res, next),
];

const validatorGetPlaylistById = [
  check("id")
    .exists()
    .withMessage("This param is required")
    .isUUID("4")
    .withMessage("Incorrect format parameter id"),
  (req, res, next) => validationResults(req, res, next),
];

const validatorDeletePlaylistById = [
  check("id")
    .exists()
    .withMessage("This param is required")
    .isUUID("4")
    .withMessage("Incorrect format parameter id"),
  (req, res, next) => validationResults(req, res, next),
];

const validatorEditPlaylistById = [
  check("id")
    .exists()
    .withMessage("This param is required")
    .isUUID("4")
    .withMessage("Incorrect format parameter id"),
  check("title")
    .optional()
    .isLength({ max: 50, min: 1 })
    .withMessage(
      "The field must have a value between the range of 1 to 50 characters"
    ),
  check("message")
    .optional()
    .isLength({ max: 200, min: 1 })
    .withMessage(
      "The field must have a value between the range of 1 to 200 characters"
    ),
  check("from")
    .optional()
    .isLength({ max: 50, min: 1 })
    .withMessage(
      "The field must have a value between the range of 1 to 50 characters"
    ),
  check("to")
    .optional()
    .isLength({ max: 50, min: 1 })
    .withMessage(
      "The field must have a value between the range of 1 to 50 characters"
    ),
  (req, res, next) => validationResults(req, res, next),
];

module.exports = {
  validatorCreatePlaylist,
  validatorGetPlaylistById,
  validatorDeletePlaylistById,
  validatorEditPlaylistById,
};
