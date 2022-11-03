const http = require("http");

const server = http.createServer((solicitud, respuesta) => {
  respuesta.end("Hola mundo, soy yooo");
});

const connectedServer = server.listen(8080, () => {
  console.log(`El servidor HTTP está escuchando en el puerto ${connectedServer.address().port} `);
});
