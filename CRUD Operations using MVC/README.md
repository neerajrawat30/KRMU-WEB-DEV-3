# CRUD Operations using MVC

## Difficulty

Easy

## Estimated Time

20-25 Minutes

---

## Problem Statement

In this question, **you do not need to write routing**.

All routes are already created in:

```text
src/index.js
```

Your task is to write only the controller/business logic for CRUD operations on users.

Data is already provided in:

```text
data/users.js
```

---

## Objective

Complete only this file:

```text
controllers/userController.js
```

Do not modify route setup in `src/index.js`.

---

## Pre-Given Routes (Already Created)

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

---

## Requirements

### GET /users
- Return all users
- Status `200`

### GET /users/:id
- Return single user by id
- If not found:
  - status `404`
  - `{ "error": "User not found" }`

### POST /users
- Read `name` and `email` from `req.body`
- If missing fields:
  - status `400`
  - `{ "error": "name and email are required" }`
- If valid:
  - create user with new id
  - status `201`
  - return created user

### PUT /users/:id
- Update user by id with `name` and `email`
- If user not found: `404`
- If body invalid: `400`
- If valid: return updated user with `200`

### DELETE /users/:id
- Delete user by id
- If user not found: `404`
- If deleted: `200` with success message

---

## Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | GET /users returns array with status 200 | Pass |
| TC-002 | GET /users/1 returns correct user | Pass |
| TC-003 | GET /users/99 returns 404 | Pass |
| TC-004 | POST /users creates user with status 201 | Pass |
| TC-005 | POST /users invalid body returns 400 | Pass |
| TC-006 | PUT /users/2 updates user with status 200 | Pass |
| TC-007 | DELETE /users/3 deletes user with status 200 | Pass |
| TC-008 | DELETE /users/99 returns 404 | Pass |

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
