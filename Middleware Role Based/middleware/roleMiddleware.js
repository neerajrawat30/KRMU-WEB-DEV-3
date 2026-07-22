const roles = require("../data/roles");

const allowOnlyAdmin = (req, res, next) => {
  // TODO: Complete middleware logic
  //
  // Steps:
  // 1) Read role from request header: req.headers.role
  // 2) If role is missing, return status 401 with:
  //    { error: "Role header is required" }
  // 3) If role is not admin, return status 403 with:
  //    { error: "Access denied. Admin only" }
  // 4) If role is admin, call next()
  //
  // Hint: admin value is available in roles.ADMIN
};

module.exports = {
  allowOnlyAdmin
};
