const { Server } = require("socket.io");

let io;

class Socket {
  static init(httpServer) {
    console.log("Configurando el socket");
    io = new Server(httpServer);
    io.on("connection", (clienteSocket) => {
      console.log("Nuevo cliente conectado", clienteSocket.id);

      clienteSocket.on("nuevo-mensaje", (data) => {
        io.emit("notificacion", { socketID: clienteSocket.id, mensaje: data }); // el objeto io es el que permite enviar todos los datos a todos los clientes del servidor
      });

      clienteSocket.on("disconnect", () => {
        console.log("Cliente desconectado");
      });
    });
  }
}

module.exports = Socket;
