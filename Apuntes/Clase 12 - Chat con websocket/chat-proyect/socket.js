const { Server } = require("socket.io"); // el objeto server, permite hacer las configuraciones iniciales del servidor socket

let io;

let messages = [{ fullname: "Amarok Dev", message: "Bienvenidos" }];

function initSocket(httpServer) {
  io = new Server(httpServer);
  setEvents(io);
}

function setEvents(io) {
  io.on("connection", (socketClient) => {
    console.log("Se conecto con el id ", socketClient.id);

    socketClient.emit("history-message", messages);

    socketClient.on("new-message", (data) => {
      io.emit("notification", data);
    });

    socketClient.on("disconection", () => {
      console.log("Se desconecto el cliente con el id".socketClient.id);
    });
  });
}

module.exports = {
  initSocket,
};
