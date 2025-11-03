const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // user is admin → continue
  } else {
    return res.status(403).json("Access Denied: Admins only");
  }
};

module.exports = verifyAdmin;
