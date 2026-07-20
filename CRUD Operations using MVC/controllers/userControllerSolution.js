const users = require("../data/users");

const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = { id: nextId, name, email };
  users.push(newUser);

  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = name;
  user.email = email;

  res.status(200).json(user);
};

const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
