const roles = require("../data/roles");

const allowOnlyAdmin = (req, res, next) => {
  const role = req.headers.role;

  if (!role) {
    return res.status(401).json({ error: "Role header is required" });
  }

  if (role !== roles.ADMIN) {
    return res.status(403).json({ error: "Access denied. Admin only" });
  }

  next();
};

module.exports = {
  allowOnlyAdmin
};
