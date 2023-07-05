const jwt = require("jsonwebtoken");
const { loginUser } = require("../controllers/auth");


const login = async (req, res) => {
  const data = req.body;

  const response = await loginUser(data.email, data.password);

  if (response) {
    const token = jwt.sign(
      {
        id: response.id,
        email: response.email,
        name: response.name,
      },
      process.env.JWT_SECRET
    );
    return res
      .status(200)
      .json({ message: "All ok, valid credentials", token });
  } else {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
};

module.exports = {
  login,
};
