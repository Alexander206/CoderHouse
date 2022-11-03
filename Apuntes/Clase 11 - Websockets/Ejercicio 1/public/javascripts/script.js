(function () {
  console.log("Here");
  const socket = io();
  socket.on("connect", () => {
    // este es el mismo objeto "io" pero hay que definirlo desde el servidor
    console.log("Conectado al servidor");
  });
})();
