// Write your code here

const http = require("http");

// Create server and implement route handling
// Your implementation should:
// 1. Handle GET requests
// 2. Route requests based on URL path
// 3. Return appropriate JSON responses
// 4. Use correct HTTP status codes

const server = http.createServer((req, res) => {
    // Set Content-Type header
    res.setHeader("Content-Type", "application/json");

    // TODO: Implement your GET route handling logic here
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = server;