const path = require("path");
const http = require('http')
const express = require("express");
const socketio = require('socket.io');
const { createSocket } = require("dgram");

const app = express();
const server = http.createServer(app)
const io=socketio(server)

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//run when client connects

io.on('connection', socket => {
    console.log('new WS connection...');
    socket.emit('message','Welcome to chat Cord')
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
