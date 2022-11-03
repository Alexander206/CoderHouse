const express = require("express");
const path = require("path");
const cors = require("cors");

const productos = require("./routers/productos");

const app = express();

const PORT = process.env.NODE_PORT || 8080;
const ENV = process.env.NODE_ENV || local;

app.use(cors());

app.use("/", express.static(path.join(__dirname, "public/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("FormProducto");
});
app.use("/api", productos);

const server = app.listen(PORT, () => {
  console.log(`Servidor http esta escuchando en el puerto ${server.address().port}`);
  console.log(`http://localhost:${server.address().port}`);
  console.log(`Environment:${ENV}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
