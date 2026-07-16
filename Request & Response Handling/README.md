# Express Routing + Request/Response Handling

## Difficulty

Easy

## Estimated Time

10-15 Minutes

---

## Problem Statement

You are given an Express app where routes are already created.

Your task is to write only the logic inside these pre-given route handlers:

- `app.get("/users/:id", ...)`
- `app.post("/users", ...)`

Do not add new routes.

---

## Objective

Complete your logic in:

```text
src/index.js
```

---

## Requirements

### Pre-given Route 1: GET `/users/:id`

Inside this route, return:

- status code `200`
- JSON:

```json
{
  "message": "User fetched successfully",
  "userId": "5"
}
```

> Example shown for `GET /users/5`.

### Pre-given Route 2: POST `/users`

Read JSON body from `req.body`:

```json
{
  "name": "Rohan",
  "email": "rohan@example.com"
}
```

- If either `name` or `email` is missing:
  - status `400`
  - JSON:

```json
{
  "error": "name and email are required"
}
```

- If both are present:
  - status `201`
  - JSON:

```json
{
  "message": "User created successfully",
  "user": {
    "name": "Rohan",
    "email": "rohan@example.com"
  }
}
```

---

## Notes

- `express.json()` is already enabled in boilerplate.
- Use `req.params.id` in GET route.
- Use `req.body` in POST route.
- Send responses with `res.status(...).json(...)`.

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | GET `/users/:id` should return status 200 | Pass |
| TC-002 | GET `/users/:id` should return correct JSON | Pass |
| TC-003 | POST `/users` with valid body should return 201 and success JSON | Pass |
| TC-004 | POST `/users` without `name` should return 400 and error JSON | Pass |
| TC-005 | POST `/users` without `email` should return 400 and error JSON | Pass |

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
