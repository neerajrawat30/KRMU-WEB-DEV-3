const students = [
    { id: 1, name: "Aarav" },
    { id: 2, name: "Diya" }
];

const getStudents = (req, res) => {
    res.status(200).json(students);
};

const addStudent = (req, res) => {
    students.push(req.body);
    res.status(201).json({ message: "Student added successfully" });
};

module.exports = {
    getStudents,
    addStudent,
};
