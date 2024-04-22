exports.isLogged = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("Access Denied");
  }

  next();
};
