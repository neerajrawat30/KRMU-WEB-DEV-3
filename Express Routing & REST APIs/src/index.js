// TODO: Express Routing & REST APIs
//
// Build these routes using the tasks data from ../data/tasks:
//
// 1) GET /tasks
//    - Return all tasks with status 200
//
// 2) GET /tasks/:id
//    - Return one task by id
//    - If not found, return 404 with: { error: "Task not found" }
//
// 3) POST /tasks
//    - Read title from req.body
//    - If title missing, return 400 with: { error: "title is required" }
//    - Create new task: { id: nextId, title, done: false }
//    - Return 201 with new task

const express = require("express");
const tasks = require("../data/tasks");

const app = express();
const PORT = 3000;

app.use(express.json());

// Write routes here

const server = app.listen(PORT);

module.exports = server;
