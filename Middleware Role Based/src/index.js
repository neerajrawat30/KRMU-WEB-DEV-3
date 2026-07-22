const express = require("express");
const { allowOnlyAdmin } = require("../middleware/roleMiddleware");

const app = express();

// Route is already given. Apply role-based middleware here.
// TODO: Add allowOnlyAdmin middleware to this route.
app.get("/admin/dashboard", (req, res) => {
  res.status(200).json({ message: "Welcome Admin" });
});

const server = app.listen(3000);

module.exports = server;
