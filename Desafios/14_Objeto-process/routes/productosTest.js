var express = require('express');
var router = express.Router();

const generarProductoFake = require('../utils/generador.js');
const productosdb = require('../db/productosdb.js');

async function fakeProducts(cant) {
    await productosdb.crearTabla();

    for (let i = 0; i < cant; i++) {
        await productosdb.guardarProducto(generarProductoFake());
    }
}

/* GET users listing. */
router.get('/productos-test', function (req, res, next) {
    fakeProducts(5);
    res.send('5');
});

module.exports = router;
