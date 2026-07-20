const express = require("express");
const tasks = require("../data/tasks");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = { id: nextId, title, done: false };
  tasks.push(newTask);

  res.status(201).json(newTask);
});

const server = app.listen(PORT);

module.exports = server;
