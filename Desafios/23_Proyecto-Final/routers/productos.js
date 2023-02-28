// Importando dependencias
import { Router } from 'express';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path'; // Manejo de rutas de archivos
const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Imprtando clases
import { Producto } from '../daos/index.js';
const gestorProductos = Producto;

// [Midellware] usuario autenticado
import administrador from '../handlers/Administrador.js';

import uploadFile from '../utils/uploadFile.js';
import deleteFile from '../utils/deleteFile.js';

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

const directorioProductos = '/../public/imgProductos/';

/* ----- Rutas CRUD ----- */

// -> Ver todos los productos

router.get('/productos', (req, res) => {
  gestorProductos.listarTodos().then((response) => {
    res.status(STATUS_CODE.OK).send(response);
  });
});

// -> Ver un solo producto por ID

router.get('/productos/:id', (req, res) => {
  gestorProductos.listar(req.params.id).then((response) => {
    res.status(STATUS_CODE.OK).send(response);
  });
});

// -> Agregar un solo producto

router.post('/productos', administrador, (req, res) => {
  gestorProductos.nuevo(req.body).then((response) => {
    res.status(STATUS_CODE.CREATED).send(response);
  });
});

// -> Modificar un producto mediante su ID

router.put('/productos/:id', administrador, (req, res) => {
  gestorProductos.modificar(req.params.id, req.body).then((response) => {
    res.status(STATUS_CODE.CREATED).send(response);
  });
});

// -> Eliminar un producto mediante su ID

router.delete('/productos/:id', administrador, (req, res) => {
  gestorProductos.borrar(req.params.id).then((response) => {
    res.status(STATUS_CODE.OK).send(response);
  });
});

/* ----- Rutas Generales ----- */

// -> Subir las fotos de los productos

router.post('/productos/upload', administrador, (req, res) => {
  const response = uploadFile(req, directorioProductos);
  res.status(STATUS_CODE.OK).send(response);
});

// -> Eliminar las fotos de los productos

router.post('/productos/delete', administrador, (req, res) => {
  console.log('Parametros de la eliminación: ', req.body.image);
  const response = deleteFile(req.body.image);
  console.log(response);
  res.status(STATUS_CODE.OK).send(response);
});

export default router;
