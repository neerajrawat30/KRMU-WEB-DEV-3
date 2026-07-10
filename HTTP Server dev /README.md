# HTTP Server - GET Request Handling and Response Management

## Difficulty

Medium

## Estimated Time

20–25 Minutes

---

# Problem Statement

In modern web development, understanding how to create and manage HTTP servers is fundamental. You need to build a simple HTTP server that can handle GET requests and respond appropriately based on the URL path.

Your task is to implement a **Simple HTTP Server** in Node.js that:
- Creates a server listening on a specific port
- Handles GET HTTP requests
- Routes requests based on the URL path
- Returns appropriate responses with proper status codes and content types

---

# Objective

Implement the server inside:

```text
src/index.js
```

The server should:

1. Listen on **port 3000**
2. Handle the following routes:

   | Route | Method | Response | Status |
   |-------|--------|----------|--------|
   | `/` | GET | `{"message": "Welcome to Home"}` | 200 |
   | `/api/data` | GET | `{"data": [1, 2, 3, 4, 5]}` | 200 |
   | `/about` | GET | `{"message": "About Page"}` | 200 |
   | Any other route | GET | `{"error": "Not Found"}` | 404 |

3. Set appropriate response headers (`Content-Type: application/json`)
4. Start the server when the module is executed
5. Export a function to close the server (for testing purposes)

---

# Functional Requirements

- The server must start automatically when `index.js` is executed
- All responses must be valid JSON
- The server should handle requests concurrently
- The server must be closable via an exported function for testing
- Proper HTTP status codes must be returned for each route
- Content-Type header must be set to `application/json` for all responses

---

# Example Usage

```javascript
const closeServer = require("./src/index");

// Server starts automatically
// It will listen on port 3000

// You can close the server using:
// closeServer();
```

When the server is running, requests like:

```bash
curl http://localhost:3000/
curl http://localhost:3000/api/data
curl http://localhost:3000/about
curl http://localhost:3000/unknown
```

Should return appropriate JSON responses with correct status codes.



---

# Test Cases

| ID | Description | Expected Result |
|----|-------------|----------------|
| TC-001 | Server listens on port 3000 | Pass |
| TC-002 | GET `/` returns correct response with status 200 | Pass |
| TC-003 | GET `/api/data` returns data array with status 200 | Pass |
| TC-004 | GET `/about` returns about message with status 200 | Pass |
| TC-005 | Unknown route returns 404 error | Pass |
| TC-006 | Response Content-Type is application/json | Pass |
| TC-007 | Server can be closed using exported function | Pass |

---

# Project Structure

```text
http-server/

│

├── src/
│   └── index.js

├── tests/
│   └── test.js

├── package.json

└── README.md
```

---

# Running the Project

Install dependencies:

```bash
npm install
```

Run the test cases:

```bash
npm test
```

---