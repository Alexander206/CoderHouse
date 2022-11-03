const express = require("express");
const { Router } = express;

const GestorProductos = require("../handlers/gestorProductos");
const archivoProductos = require("../productos.json");
const productos = new GestorProductos(archivoProductos);

const router = Router(Router);

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

router.get("/productos", (req, res) => {
  res.status(STATUS_CODE.OK).render("FormProducto", productos.mostrarProductos());
});

router.post("/productos", (req, res) => {
  const body = req.body;
  body.precio = Number(body.precio);
  productos.guardarProducto(body);

  const listaProductos = productos.mostrarProductos();
  const data = {
    listaProductos,
    isEmpty: !listaProductos.length,
  };

  console.log(data);
  res.render("VerProductos", data);
});

module.exports = router;
