const express = require("express");
const app = express();

const PORT = 8080;
const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/sumar/:num1/:num2", (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;

  res.status(STATUS_CODE.OK).send(sumar(num1, num2));
});

app.get("/api/sumar", (req, res) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;

  res.status(STATUS_CODE.OK).send(sumar(num1, num2));
});

app.get("/api/operacion/:expresion", (req, res) => {
  const expresion = req.params.expresion.split("+");
  const num1 = expresion[0];
  const num2 = expresion[1];

  res.status(STATUS_CODE.OK).send(sumar(num1, num2));
});

function sumar(numero1, numero2) {
  let solucion = parseInt(numero1) + parseInt(numero2);
  return String(solucion);
}
