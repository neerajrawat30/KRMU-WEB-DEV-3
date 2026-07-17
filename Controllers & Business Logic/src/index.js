const express = require("express");
const { getAvailableProducts } = require("../controllers/productController");

const app = express();

// Route is already given. Students only write logic in controller.
app.get("/products/available", getAvailableProducts);

const server = app.listen(3000);

module.exports = server;
