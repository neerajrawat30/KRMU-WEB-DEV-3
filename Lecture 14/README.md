# Lecture 14: Express Student Routes

## Difficulty

🟢 Easy

## Estimated Time

15-20 Minutes

---

## Problem Statement

You are building a simple Express application with separate route and controller files.

Your task is to complete the routes so the application can:

- return all students
- add a new student

---

## Objective

Complete the implementation in:

```text
routes/studentRoutes.js
```

Do **NOT** modify any other file.

---

## Updated Requirements

| HTTP Method | Route | Controller |
|------------|-------|------------|
| GET | `/list` | `getStudents` |
| POST | `/add` | `addStudent` |

Since the router is mounted on `/students`, the final endpoints are:

- `GET /students/list`
- `POST /students/add`

---

## Provided Application Setup

`src/index.js`

```javascript
const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use("/students", studentRoutes);

const server = app.listen(3000);

module.exports = server;
```

---

## Boilerplate

`routes/studentRoutes.js`

```javascript
const express = require("express");
const router = express.Router();

// Import the controller functions here

// Create the required routes here
// GET /list
// POST /add

module.exports = router;
```

You must:

- import `getStudents` and `addStudent`
- create the `GET /list` route
- create the `POST /add` route

---

## Expected API

### GET `/students/list`

Returns:

```json
[
  {
    "id": 1,
    "name": "Aarav"
  },
  {
    "id": 2,
    "name": "Diya"
  }
]
```

### POST `/students/add`

Request Body:

```json
{
  "id": 3,
  "name": "Rohan"
}
```

Response:

```json
{
  "message": "Student added successfully"
}
```

---

## Notes

- Do not modify `src/index.js`
- Do not modify the controller file
- Write only the route logic
- Use `router.get(...)` and `router.post(...)`

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | `GET /students/list` should return status code 200 | Pass |
| TC-002 | `GET /students/list` should return an array of students | Pass |
| TC-003 | Initial GET request should return 2 students | Pass |
| TC-004 | `POST /students/add` should add a new student successfully | Pass |
| TC-005 | POST request should return status code 201 | Pass |
| TC-006 | After POST, `GET /students/list` should return 3 students | Pass |

---

## Project Structure

```text
student-routes/
│
├── controllers/
│   └── studentController.js
├── routes/
│   ├── studentRoutes.js
│   └── studentRoutesSolution.js
├── src/
│   ├── index.js
│   └── indexSolution.js
├── tests/
│   └── test.js
├── .gitignore
├── package.json
└── README.md
```

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
node src/indexSolution.js
```
