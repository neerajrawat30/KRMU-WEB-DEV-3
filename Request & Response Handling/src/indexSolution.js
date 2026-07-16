const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users/:id", (req, res) => {
    res.status(200).json({
        message: "User fetched successfully",
        userId: req.params.id
    });
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        res.status(400).json({ error: "name and email are required" });
        return;
    }

    res.status(201).json({
        message: "User created successfully",
        user: {
            name,
            email
        }
    });
});

const server = app.listen(PORT);

module.exports = server;
