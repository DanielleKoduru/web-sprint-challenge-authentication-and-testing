const { JWT_SECRET } = require("../secrets");
const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
  try {
    const token = req.headers.authorization
    next();
    if (!token) {
      return res.status(401).json({
        message: "Token required"
      })
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Token invalid"
        })
      }
      req.token = decoded

      next()
    })
  } catch (err) {
    next(err)
  }
};
 