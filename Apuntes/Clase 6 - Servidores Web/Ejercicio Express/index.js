const express = require("express");
const app = express();
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  const saludo = "<h1 style='color: blue;'>Bienvenidos al servidor express</h1>";
  res.send(saludo);
});

app.set("cantidad", 0);

app.get("/visitas", (req, res) => {
  let cantidad = app.get("cantidad");
  cantidad += 1;
  res.send(`La cantidad de visitas es: ${cantidad}`);
  app.set("cantidad", cantidad);
});

app.get("/fyh", (req, res) => {
  res.send({ mensaje: "Hola mundo" });
});
