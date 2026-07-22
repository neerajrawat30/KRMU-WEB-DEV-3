const express = require("express");
const { getStudents, addStudent } = require("../controllers/studentController");

const router = express.Router();

router.get("/list", getStudents);
router.post("/add", addStudent);

module.exports = router;
