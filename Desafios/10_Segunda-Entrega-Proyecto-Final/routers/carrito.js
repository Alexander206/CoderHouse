const { response } = require('express');
const express = require('express');
const { Router } = express;

const GestorCarrito = require('../handlers/gestorCarrito');
const carrito = new GestorCarrito('../data/carrito.json', '../data/productos.json');
const router = Router(Router);

const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
};

// Middleware para verificar si es administrador

const administrador = (req, res, next) => {
    if (req.params.value) {
        console.log('Es administrador');
        next();
    }
    res.status(STATUS_CODE.NOT_FOUND).send({ error: 'Ups, no tienes permiso para acceder a esta función' });
};

// Rutas

router.get('/carrito', (req, res) => {
    carrito.getCarrito().then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.post('/carrito', (req, res) => {
    carrito.new().then((response) => {
        res.status(STATUS_CODE.CREATED).send(response);
    });
});

router.delete('/carrito/:id', (req, res) => {
    carrito.delete(req.params.id).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.get('/carrito/:id/productos', (req, res) => {
    carrito.getProducts(req.params.id).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.post('/carrito/:id/productos/:id_prod', (req, res) => {
    carrito.postProduct(req.params.id, req.params.id_prod).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.delete('/carrito/:id/productos/:id_prod', (req, res) => {
    carrito.deleteProduct(req.params.id, req.params.id_prod).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

module.exports = router;
