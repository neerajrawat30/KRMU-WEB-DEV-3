const express = require("express");
const { getAvailableProducts } = require("../controllers/productControllerSolution");

const app = express();

app.get("/products/available", getAvailableProducts);

const server = app.listen(3000);

module.exports = server;
