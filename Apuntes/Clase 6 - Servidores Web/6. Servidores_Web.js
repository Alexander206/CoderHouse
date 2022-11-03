console.log(`\n ------ Servidores web ----- \n`);

// los servidores web son programas informaticos, por lo general usados para procesar los datos del lado del backend alojados en una red, conmunmente son coectados a traves de protocolos HTTP. Realiza conecciones bidireccionales, unidireccionales, sincrónicas y asincrónicas, interactuando con entre cliente y servidor.

// lo primero que hay que hacer es requerir un objeto en la variable http.
const http = require("http");

// luego se crea una función callback llamada createServer() recibe dos parámetros: petición y respuesta. respuesta.end() sirve para terminar la petición y enviarle datos al cliente

const server = http.createServer((solicitud, respuesta) => {
  respuesta.end("Hola mundo");
});

// A ESTE MOMENTO DEL CÓDIGO, AUN NO AH ARRANCADO EL SERVIDOR

// hay que ejecutar el metodo listen:

const connectedServer = server.listen(8080, () => {
  console.log(`El servidor HTTP está escuchando en el puerto ${connectedServer.address().port} `);
});

// NPM es un administrador de paquetes de Node JS. Podemos usar módulos para usarlos en nuestro proyecto
// crear servidor con HTTP
// investigar mejor lo de los puesrtos en los servidores y como funcionan
//

const PORT = 8080;

const servidorConectado = server.listen(PORT, () => {
  console.log("Servidor Http");
});

// express
console.log(`\n ------ Servidor HTTP en Express ----- \n`);

// Express framework es un módulo externo que cuenta con las siguientes caracteristicas:
// Es facil de usar y muy popular.
// Nos facilitara la tarea de crear puntos de entrada de nuestro servidor.
// cada petición será más simple y rápida.

