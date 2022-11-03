const express = require("express");
const handlers = require("./handlers/ProductsHandler.js");
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", handlers.initProducts);

app.get("/productos", handlers.getAllProducts);

app.get("/productoRandom", handlers.getRandomProduct);
