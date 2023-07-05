const { validationResult } = require("express-validator");
const { formatErrorsExpress } = require("./format");

const validationResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: formatErrorsExpress(error.array()) });
  }
};

module.exports = validationResults