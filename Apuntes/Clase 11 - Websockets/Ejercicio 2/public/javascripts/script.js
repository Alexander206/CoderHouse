(function () {
  const inputMessage = document.getElementById("input-message");
  const showMessage = document.getElementById("show-message");

  const socket = io();

  inputMessage.addEventListener("keyup", (event) => {
    socket.emit("nuevo-mensaje", event.target.value);
  });

  socket.on("connect", () => {
    console.log("Conectados al servidor");
  });

  socket.on("notificacion", (data) => {
    showMessage.innerText = data.mensaje;
  });
})();
