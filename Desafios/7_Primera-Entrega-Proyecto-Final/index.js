const express = require("express");
const path = require("path");

const productos = require("./routers/productos");
const carrito = require("./routers/carrito");

const app = express();

const PORT = process.env.NODE_PORT || 8080;
const ENV = process.env.NODE_ENV || local;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", productos);
app.use("/api", carrito);

const server = app.listen(PORT, () => {
  console.log(`Servidor http esta escuchando en el puerto ${server.address().port}`);
  console.log(`http://localhost:${server.address().port}`);
  console.log(`Environment:${ENV}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
