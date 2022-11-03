const express = require("express");
const { Router } = express;

const GestorProductos = require("../handlers/gestorProductos");

const router = Router(Router);

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

const productos = new GestorProductos([
  {
    id: "1",
    nombre: "Tela Deportivo",
    precio: 150000,
    thumbnail: "7",
  },
  {
    id: "2",
    nombre: "Cuero formal",
    precio: 180000,
    thumbnail: "4",
  },
  {
    id: "3",
    nombre: "Cuero Casual",
    precio: 170000,
    thumbnail: "10",
  },
]);

router.get("/productos", (req, res) => {
  res.status(STATUS_CODE.OK).send(productos.mostrarProductos());
});

router.get("/productos/:id", (req, res) => {
  res.status(STATUS_CODE.OK).send(productos.buscarProducto(req.params.id));
});

router.post("/productos", (req, res) => {
  res.status(STATUS_CODE.OK).send(productos.guardarProducto(req.body));
});

router.put("/productos/:id", (req, res) => {
  res.status(STATUS_CODE.OK).send(productos.actualizarProducto(req.params.id, req.body));
});

router.delete("/productos/:id", (req, res) => {
  console.log(req.params.id);
  res.status(STATUS_CODE.OK).send(productos.borrarProducto(req.params.id));
});

module.exports = router;
