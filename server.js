const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects
io.on('connect', socket => {
    console.log('New websocket connection');
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));