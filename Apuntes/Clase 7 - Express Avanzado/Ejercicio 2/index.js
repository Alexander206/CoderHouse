const express = require("express");
const app = express();

const frase = "Hola mundo cómo están";
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

// Estas dos lineas siguientes nos permite interpretar de manera automatica mensajes de tipo JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/frase", (req, res) => {
  res.status(STATUS_CODE.OK).send(frase);
});

app.get("/api/letras/:num", (req, res) => {
  let num = req.params.num; // dentro de params se encuentra todos los parametros de la dirección. En este caso: "/api/letras/:num" osea num
  const respuesta = validarNum(num, frase);

  console.log(respuesta);

  if (respuesta === true) {
    num = parseInt(num);
    res.status(STATUS_CODE.OK).send(frase[num - 1]);
  } else {
    res.status(STATUS_CODE.BAD_REQUEST).json(respuesta);
  }
});

app.get("/api/palabras/:num", (req, res) => {
  let num = req.params.num;
  const palabras = frase.split(" ");
  const respuesta = validarNum(num, palabras);

  console.log(respuesta);

  if (respuesta === true) {
    num = parseInt(num);
    res.status(STATUS_CODE.OK).send(palabras[num - 1]);
  } else {
    res.status(STATUS_CODE.BAD_REQUEST).json(respuesta);
  }
});

function validarNum(numero, frase) {
  if (!esNumero(numero)) {
    return { error: "El parametro no es un numero" };
  }

  if (!enRango(numero, frase)) {
    return { error: "El parametro esta fuera de rango" };
  }

  return true;
}

function esNumero(numero) {
  return numero == parseInt(numero);
}

function enRango(numero, frase) {
  return parseInt(numero) > 0 && parseInt(numero) <= frase.length;
}
