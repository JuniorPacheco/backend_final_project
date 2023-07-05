const usersControllers = require("../controllers/users");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.JWT_SECRET,
  };
  passport.use(
    new JwtStrategy(opts, async (decoded, done) => {
      try {
        const user = await usersControllers.getUserById(decoded.id);
        if (user) {
          return done(null, decoded);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );
};