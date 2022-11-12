// Importando dependencias
import { Router } from 'express';
const router = Router();

// Imprtando clases
import { Producto } from '../daos/index.js';
const gestorProductos = Producto;

import administrador from '../handlers/Administrador.js';

const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
};

// Rutas

router.get('/productos', (req, res) => {
    gestorProductos.listarTodos().then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.get('/productos/:id', (req, res) => {
    gestorProductos.listar(req.params.id).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

router.post('/productos', administrador, (req, res) => {
    gestorProductos.nuevo(req.body).then((response) => {
        res.status(STATUS_CODE.CREATED).send(response);
    });
});

router.put('/productos/:id', administrador, (req, res) => {
    gestorProductos.modificar(req.params.id, req.body).then((response) => {
        res.status(STATUS_CODE.CREATED).send(response);
    });
});

router.delete('/productos/:id', administrador, (req, res) => {
    gestorProductos.borrar(req.params.id).then((response) => {
        res.status(STATUS_CODE.OK).send(response);
    });
});

export default router;
