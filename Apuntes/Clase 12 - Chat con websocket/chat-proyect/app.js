const express = require("express"); // biblioteca para hacer servidores
const http = require("http"); // modulo interno de node
const path = require("path"); // para manejar rutas

const { initSocket } = require("./socket");
const indexRouter = require("./routes/index");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

const server = http.createServer(app);
initSocket(server);

server.listen(PORT, () => {
  console.log("Servidor conectado en el puerto", PORT);
});
