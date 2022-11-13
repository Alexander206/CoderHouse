const { Server } = require("socket.io");

let io;

let today = new Date();
let now = today.toLocaleString();

const productosdb = require('./db/productosdb');
const chatdb = require('./db/chatdb');
// chat.archivo[0].hora = now;

function initSocket(httpServer) {
  io = new Server(httpServer);
  setEvents(io);
}

console.log();

function setEvents(io) {
  console.log("Configurando el socket");
  io.on("connection", async (socketClient) => {
    console.log("Se conecto el cliente con el id ", socketClient.id);

    socketClient.on("disconnect", () => {
      console.log("Cliente desconectado");
    });

    // Conexiones del producto

    await productosdb.crearTabla();

    socketClient.emit("setData", await productosdb.mostrarProductos());

    socketClient.on("getData", async (data) => {
      productosdb.guardarProducto(data);
      io.emit("setData", await productosdb.mostrarProductos());
    });

    // Conexiones del chat

    await chatdb.crearTabla()

    socketClient.emit("setChat", await chatdb.mostrarMensajes());

    socketClient.on("getChat", async (data) => {
      chatdb.guardarMensajes(data)
      console.log(await chatdb.mostrarMensajes());
      io.emit("setChat", await chatdb.mostrarMensajes());
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
      }, 1100);
    }

    io.emit("setTeclear", dataTeclear);
  });
}

module.exports = {
  initSocket,
};
