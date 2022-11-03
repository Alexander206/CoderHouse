const { response } = require("express");
const express = require("express");
const { Router } = express;

const GestorProductos = require("../handlers/gestorProductos");
const productos = new GestorProductos("../data/productos.json");
const router = Router(Router);

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

const admin = true;

// Middleware

const administrador = (req, res, next) => {
  if (admin) {
    console.log("Es administrador");
    next();
  } else {
    res.status(STATUS_CODE.NOT_FOUND).send({ error: "Ups, no tienes permiso para acceder a esta función" });
  }
};

// Rutas

router.get("/productos", (req, res) => {
  productos.get().then(response => {
    res.status(STATUS_CODE.OK).send(response);
  })
});

router.get("/productos/:id", (req, res) => {
  productos.getID(req.params.id).then(response => {
    res.status(STATUS_CODE.OK).send(response);
  })
});

router.post("/productos", administrador, (req, res) => {
  productos.post(req.body).then(response => {
    res.status(STATUS_CODE.CREATED).send(response);
  })
});

router.put("/productos/:id", administrador, (req, res) => {
  productos.put(req.params.id, req.body).then(response => {
    res.status(STATUS_CODE.CREATED).send(response);
  })

});

router.delete("/productos/:id", administrador, (req, res) => {
  productos.delete(req.params.id).then(response => {
    res.status(STATUS_CODE.OK).send(response);
  })

});

module.exports = router;
