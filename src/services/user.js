const userControllers = require("../controllers/users");

const register = async (req, res) => {
  try{
    const data = req.body;
    const response = await userControllers.createUser(data);

    if(!response) return res.status(409).json({ message: "This email is in use" });

    res.status(201).json({
      message: "User created succesfully",
      user: response,
    });
  }catch(err){
    return res.status(500).json({ message: err });
  }
};

module.exports = { register };
