// TODO: Complete only the route logic in the pre-given routes

// Expected behavior:
// 1) GET /users/:id
//    - status: 200
//    - response:
//      { message: "User fetched successfully", userId: req.params.id }
//
// 2) POST /users
//    - read { name, email } from req.body
//    - if name or email missing:
//      status: 400
//      { error: "name and email are required" }
//    - if both present:
//      status: 201
//      { message: "User created successfully", user: { name, email } }

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Pre-given route: write logic inside only
app.get("/users/:id", (req, res) => {
    // TODO: write GET logic
});

// Pre-given route: write logic inside only
app.post("/users", (req, res) => {
    // TODO: write POST logic
});

const server = app.listen(PORT);

module.exports = server;
