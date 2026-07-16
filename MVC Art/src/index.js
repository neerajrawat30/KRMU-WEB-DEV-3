const express = require("express");
const { getActiveEmployees } = require("../controllers/employeeController");

const app = express();

app.get("/employees", getActiveEmployees);

const server = app.listen(3000);

module.exports = server;
