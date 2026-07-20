# Express Routing & REST APIs

## Difficulty

Easy

## Estimated Time

15-20 Minutes

---

## Problem Statement

Create a simple REST API using Express for task management.

You need to implement 3 routes using REST principles.

---

## Objective

Implement your solution in:

```text
src/index.js
```

---

## Existing Data

Task data is already available in:

```text
data/tasks.js
```

---

## Requirements

### 1) GET `/tasks`
- Return all tasks
- Status: `200`

### 2) GET `/tasks/:id`
- Return one task by id
- If task not found:
  - Status: `404`
  - Response: `{ "error": "Task not found" }`

### 3) POST `/tasks`
- Read `title` from `req.body`
- If title missing:
  - Status: `400`
  - Response: `{ "error": "title is required" }`
- If valid:
  - Create task with shape: `{ id, title, done: false }`
  - Status: `201`
  - Return new task

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | GET /tasks returns status 200 and array | Pass |
| TC-002 | GET /tasks/1 returns the first task | Pass |
| TC-003 | GET /tasks/99 returns 404 | Pass |
| TC-004 | POST /tasks creates a task | Pass |
| TC-005 | POST /tasks without title returns 400 | Pass |

---

## Installation

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Run Solution Tests

```bash
npm run solution
```
