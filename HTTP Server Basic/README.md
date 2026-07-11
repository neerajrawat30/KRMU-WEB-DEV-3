# Basic HTTP Server - First Backend Route

## Difficulty
Easy

## Estimated Time

15–20 Minutes

---

## Problem Statement

You are tasked with building your **first backend HTTP server** using Node.js. Your server should handle HTTP requests and respond to a single route.

### Requirements

Your server should:
1. Create an HTTP server using Node.js `http` module
2. Listen on **port 3000**
3. Handle a **GET request** to the root path (`/`)
4. Respond with a welcome message when accessed
5. The response should be sent with:
   - Status code: `200` (OK)
   - Content-Type: `text/plain`
   - Body: `"Welcome to your first backend route"`

### Server Behavior
When a client makes a GET request to `http://localhost:3000/`, your server should:
- Receive the request
- Send back a 200 OK response
- Include the welcome message in the response body
- The client should see: `Welcome to your first backend route`

---

## Examples

| Request | Method | Response Code | Response Body |
|---------|--------|---------------|---------------|
| `GET /` | GET | `200` | `Welcome to your first backend route` |

### Testing the Server
```bash
# Start the server
node src/indexSolution.js

# In another terminal, test with curl
curl http://localhost:3000/

# Output:
# Welcome to your first backend route
```

---

## Constraints

- The server must listen on **port 3000**
- The route must respond to **GET requests** to the **root path** (`/`)
- The response must have **status code 200**
- The response must have **Content-Type: text/plain**
- The server must handle the request without crashing
- The response body must be exactly: `"Welcome to your first backend route"`

---
### Installation

```bash
npm install
```

### Running the Solution

```bash
# Start the server in one terminal
node src/indexSolution.js

# In another terminal, test it
curl http://localhost:3000/
# Output: Welcome to your first backend route
```

### Running Tests

```bash
npm test
```

The tests will:
- Start your server automatically
- Make HTTP requests to localhost:3000
- Verify the response status, headers, and body
- Stop the server after testing

---

## Architecture Overview

```
Client                    Your Server
   |                          |
   +------- GET / ----------->|
   |                          |
   |    HTTP Request          |
   |                      [createServer]
   |                          |
   |                    [Check URL]
   |                          |
   |<----- 200 OK ------------|
   |  Content-Type: text/plain|
   |  "Welcome to your..."    |
   |                    [Response sent]
   |
[Display response]
```

---

**Good luck with your first backend! 🚀**
