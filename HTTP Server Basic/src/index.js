// TODO: Build Your First Backend HTTP Server
//
// Your task is to create a simple HTTP server that:
// 1. Listens on port 3000
// 2. Handles GET requests to the root path (/)
// 3. Responds with a 200 status code
// 4. Sets the Content-Type header to 'text/plain'
// 5. Sends the response: "Welcome to your first backend route"
//
const http = require('http');

const server = http.createServer((req, res) => {

  // write code here


});



server.listen(3000, () => {
    console.log("Server running on port 3000");
});
module.exports= server;