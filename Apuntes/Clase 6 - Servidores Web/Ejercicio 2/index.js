const http = require("http");
const server = http.createServer((solicitud, respuesta) => {
  const ahora = new Date();
  const horaActual = ahora.getHours();
  let mensaje = "";

  if (horaActual >= 6 && horaActual <= 12) {
    mensaje = "Buenos dias!";
  } else if (horaActual >= 13 && horaActual <= 19) {
    mensaje = "Buenas tardes!";
  } else {
    mensaje = "Buenas noches!";
  }

  respuesta.end(mensaje);
});

const connectedServer = server.listen(8080, () => {
  console.log(`El servidor HTTP está escuchando en el puerto ${connectedServer.address().port} `);
});
