const express = require("express");
const studentRoutes = require("../routes/studentRoutes");

const app = express();

app.use(express.json());
app.use("/students", studentRoutes);

const server = app.listen(3000);

module.exports = server;
