const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("We are learning Express");
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = server;
