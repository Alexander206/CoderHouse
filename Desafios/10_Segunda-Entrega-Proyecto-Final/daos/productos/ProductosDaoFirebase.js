// Clases importadas
const ContenedorFirebase = require('../../contenedores/ContenedorFirebase');

class ProductosDaoArchivo extends ContenedorFirebase {
    // Ruta del archivo de productos
    constructor() {
        super('productos');
    }
}

module.exports = ProductosDaoArchivo;
