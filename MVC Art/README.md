# MVC Architecture - Active Employees Controller

## Difficulty

Easy

## Estimated Time

15-20 Minutes

---

## Problem Statement

You are building a simple Express application using the **MVC Architecture**.

Your task is to complete the controller that returns only the **active employees**.

---

## Objective

Complete the implementation in:

```text
controllers/employeeController.js
```

---

## How Your Controller Will Be Used

See `controllers/example.js` to understand:
- How the controller is imported
- How it's used in the Express route (MVC pattern)
- What the request/response flow looks like

You can also run the example:

```bash
node controllers/example.js
```

---

## Existing Data

Employee data is already provided in:

```text
data/employees.js
```

Use it in the controller with:

```javascript
const employees = require("../data/employees");
```

---

## Requirements

Implement the controller function:

```javascript
getActiveEmployees(req, res)
```

The function should:

- Return status code **200**
- Return only those employees whose `isActive` value is `true`
- Send the filtered array as JSON

---

## Expected Response

Request:

```text
GET /employees
```

Response:

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "department": "Engineering",
    "isActive": true
  },
  {
    "id": 3,
    "name": "Priya",
    "department": "Engineering",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Rohit",
    "department": "Marketing",
    "isActive": true
  }
]
```

---

## Notes

- Do not modify `src/index.js`
- Do not modify `data/employees.js`
- Use JavaScript array methods
- Write only the controller logic

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | `GET /employees` returns status code 200 | Pass |
| TC-002 | Response is an array | Pass |
| TC-003 | Response contains only active employees (isActive: true) | Pass |
| TC-004 | Response contains exactly 3 active employees | Pass |
| TC-005 | Response returns employee names in order: Rahul, Priya, Rohit | Pass |
| TC-006 | Response returns employee IDs in order: 1, 3, 5 | Pass |
| TC-007 | Each employee object has required keys: id, name, department, isActive | Pass |

---

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Running the Reference Solution

```bash
npm run solution
```

---
