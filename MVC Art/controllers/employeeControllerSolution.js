const employees = require("../data/employees");

const getActiveEmployees = (req, res) => {
    const activeEmployees = employees.filter((employee) => employee.isActive);

    res.status(200).json(activeEmployees);
};

module.exports = {
    getActiveEmployees,
};
