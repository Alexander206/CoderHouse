// Importando dependencias
import { Router } from 'express';
const router = Router();

// Importando clases
import { Carrito } from '../daos/index.js';
const gestorCarrito = Carrito;

const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
};

// Rutas

router.get('/carrito', (req, res) => {
    gestorCarrito.listarTodos().then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.post('/carrito', (req, res) => {
    gestorCarrito.nuevo().then((response) => {
        res.status(STATUS_CODE.CREATED).send(response);
    });
});

router.delete('/carrito/:id', (req, res) => {
    gestorCarrito.borrar(req.params.id).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.get('/carrito/:id/productos', (req, res) => {
    gestorCarrito.verProductos(req.params.id).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.post('/carrito/:id/productos/:id_prod', (req, res) => {
    gestorCarrito.guardarProducto(req.params.id, req.params.id_prod).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.delete('/carrito/:id/productos/:id_prod', (req, res) => {
    gestorCarrito.borrarProducto(req.params.id, req.params.id_prod).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

export default router;
