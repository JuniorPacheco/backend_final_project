const { getUserByEmail } = require("./users");
const { comparePassword } = require("../utils/crypt");

const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);
  //? user.password Contraseña hasheada
  //* password Contraseña en texto plano
  if (user) {
    const verify_password = comparePassword(password, user.password);
    if (verify_password) {
      return user;
    }
  }
  return false;
};

module.exports = {
  loginUser,
};
