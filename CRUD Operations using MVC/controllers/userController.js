const users = require("../data/users");

// GET /users
const getAllUsers = (req, res) => {
  // TODO: return all users with status 200
};

// GET /users/:id
const getUserById = (req, res) => {
  // TODO:
  // 1) find user by id from req.params.id
  // 2) if not found -> status 404, { error: "User not found" }
  // 3) else -> status 200 and user object
};

// POST /users
const createUser = (req, res) => {
  // TODO:
  // 1) read name, email from req.body
  // 2) if missing -> status 400, { error: "name and email are required" }
  // 3) create new user with next id
  // 4) push into users array
  // 5) return status 201 and created user
};

// PUT /users/:id
const updateUser = (req, res) => {
  // TODO:
  // 1) read id from params, name/email from body
  // 2) validate name + email (400)
  // 3) find user by id (404 if not found)
  // 4) update user
  // 5) return status 200 and updated user
};

// DELETE /users/:id
const deleteUser = (req, res) => {
  // TODO:
  // 1) find user index by id
  // 2) if not found -> 404
  // 3) remove user from array
  // 4) return status 200 with success message
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
