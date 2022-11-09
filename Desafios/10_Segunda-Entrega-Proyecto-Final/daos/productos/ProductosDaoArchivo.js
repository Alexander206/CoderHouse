// Clases importadas
const ContenedorArchivo = require('../../contenedores/ContenedorArchivo');

class ProductosDaoArchivo extends ContenedorArchivo {
    // Ruta del archivo de productos
    constructor() {
        super('productos.json');
    }
}

module.exports = ProductosDaoArchivo;
