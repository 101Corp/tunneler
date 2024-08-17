// server.js
const WebSocket = require('ws');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running');
});

// Create a WebSocket server and attach it to the HTTP server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('A new client connected');

  // Handle messages received from clients
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    
    // Echo the message back to the client
    ws.send(`You sent: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
