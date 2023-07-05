const userControllers = require("../controllers/users");

const register = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (!data.name || !data.email || !data.password) {
    return res.status(400).json({
      message: "All fields must be completed",
      fields: {
        name: "string",
        email: "examle@examle.com",
        password: "string",
      },
    });
  } else {
    userControllers
      .createUser(data)
      .then((response) => {
        res.status(201).json({
          message: "User created succesfully",
          user: response,
        });
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  }
};

module.exports = { register };
