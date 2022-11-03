const { Server } = require("socket.io");

let io;

let today = new Date();
let now = today.toLocaleString();

const GestorProductos = require("./handlers/gestorProductos");
const archivoProductos = require("./productos.json");
const productos = new GestorProductos(archivoProductos);
const GestorChat = require("./handlers/gestorChat");
const archivoChat = require("./chat.json");
const chat = new GestorChat(archivoChat, now);
chat.archivo[0].hora = now;

function initSocket(httpServer) {
  io = new Server(httpServer);
  setEvents(io);
}

console.log();

function setEvents(io) {
  console.log("Configurando el socket");
  io.on("connection", (socketClient) => {
    console.log("Se conecto el cliente con el id ", socketClient.id);

    socketClient.on("disconnect", () => {
      console.log("Cliente desconectado");
    });

    // Conexiones del producto

    socketClient.emit("setData", productos.archivo);

    socketClient.on("getData", (data) => {
      productos.guardarProducto(data);
      io.emit("setData", productos.archivo);
    });

    // Conexiones del chat

    socketClient.emit("setChat", chat.archivo);

    socketClient.on("getChat", (data) => {
      chat.guardarChat(data);
      io.emit("setChat", chat.archivo);
    });

    // está escribiendo...

    let dataTeclear = {
      correo: "",
      estado: false,
    };

    socketClient.emit("setTeclear", dataTeclear);

    socketClient.on("getTeclear", (data) => {
      dataTeclear.correo = data.correo;
      dataTeclear.estado = true;
      io.emit("setTeclear", dataTeclear);
      estaEscribiendo();
    });

    function estaEscribiendo() {
      setTimeout(() => {
        dataTeclear.estado = false;
        io.emit("setTeclear", dataTeclear);
      }, 1000);
    }

    io.emit("setTeclear", dataTeclear);
  });
}

module.exports = {
  initSocket,
};
