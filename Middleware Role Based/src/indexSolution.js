const express = require("express");
const { allowOnlyAdmin } = require("../middleware/roleMiddlewareSolution");

const app = express();

app.get("/admin/dashboard", allowOnlyAdmin, (req, res) => {
  res.status(200).json({ message: "Welcome Admin" });
});

const server = app.listen(3000);

module.exports = server;
