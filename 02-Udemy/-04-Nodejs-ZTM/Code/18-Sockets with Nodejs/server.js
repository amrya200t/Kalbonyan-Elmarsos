const http = require("http");
const io = require("socket.io");
const apiServer = require("./server/api");
const sockets = require("./server/sockets");

const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

sockets.listen(socketServer);
