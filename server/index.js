const express = require('express')
const app = express();
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');

app.use(cors());

let player1Room = null;
let player2Room = null;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log(`${socket}`)

  socket.on("join_room", (data) => {
    socket.join(data);
  })

  socket.on("send_data", (data) => {
    console.log(data);
    socket.broadcast.emit("recieve_data", data);
  })

  socket.on("send_score", (data) => {
    socket.broadcast.emit("recieve_score", data);
  })

  socket.on('send_room_id_player1', (data) => {
    player1Room = data.roomId;
    socket.join(player1Room);
    console.log(player1Room);
  })

  socket.on('join_room_player2', (data) => {
    player2Room = data;
    socket.join(player2Room);
    // clg(player2Room)
    console.log("player2" + player2Room);
    console.log("player1" + player1Room)
    if (player2Room === player1Room) {
      console.log("here")
      socket.to(player2Room).emit("recieve_status", { connectionEstablished: true });
    }
    else {
      socket.to(player2Room).emit("recieve_status", { connectionEstablished: false });
    }
  })

})

server.listen(3001, () => {
  console.log("Server is Running")
})