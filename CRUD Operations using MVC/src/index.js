const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

const app = express();
app.use(express.json());

// Routes are already created here. Students only write controller logic.
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

const server = app.listen(3000);
module.exports = server;
