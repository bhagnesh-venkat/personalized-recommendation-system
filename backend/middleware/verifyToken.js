const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization; // token will come from header
  console.log(req.headers);
  if (!authHeader) return res.status(401).json("Access Denied");

  const token = authHeader.split(" ")[1];
  jwt.verify(token, "secretKey123", (err, user) => {
    if (err) return res.status(403).json("Invalid Token");
    req.user = user;
    next();
  });
}

module.exports = verifyToken;
