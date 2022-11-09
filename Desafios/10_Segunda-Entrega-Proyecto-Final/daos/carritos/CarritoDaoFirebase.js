// Clases importadas
const ContenedorFirebase = require('../../contenedores/ContenedorFirebase');
const ProductoDaoFirebase = require('../productos/ProductosDaoFirebase.js');

// Generador de hora
const today = new Date();

// Generador de id
const { v4: uuidv4 } = require('uuid');

// Instancia de productos

const archivoProductos = new ProductoDaoFirebase();

class CarritoDaoArchivo extends ContenedorFirebase {
    // Ruta del archivo de productos

    constructor() {
        super('carrito');
    }

    // Método modificado para la el archivo carrito

    async nuevo(carrito = { productos: [] }) {
        return await super.nuevo(carrito);
    }

    // Método para ver los productos del carrito

    async verProductos(id) {
        try {
            let objeto = await super.listar(id);
            if (objeto.productos.length > 0) {
                return objeto.productos;
            } else {
                return { error: 'No hay productos asociados a esa id' };
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // Método para agregar productos a un carrito por su ID

    async guardarProducto(idCarrito, idProducto) {
        try {
            let carrito = await super.listar(idCarrito);
            const producto = await archivoProductos.listar(idProducto);

            if (Object.values(producto).length > 1 && Object.values(carrito).length > 1) {
                const now = today.toLocaleString();
                producto.id = uuidv4();
                producto.timestamp = now;
                carrito.productos.push(producto);
                super.modificar(idCarrito, carrito);
                return true;
            } else {
                return { error: 'No se pudo agregar el producto al carrito' };
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // Método para borrar productos

    async borrarProducto(idCarrito, idProducto) {
        try {
            let carrito = await super.listar(idCarrito);
            let producto = 0;

            if (Object.values(carrito).length > 1) {
                [producto] = await carrito.productos.filter((item) => item.id === idProducto);
            } else {
                return { error: `El carrito con la id: ${idCarrito} no existe` };
            }

            if (!producto == null) {
                const posProducto = await carrito.productos.indexOf(producto);
                carrito.productos.splice(posProducto, 1);
                super.modificar(idCarrito, carrito);
                return true;
            } else {
                return {
                    error: `No se pudo borrar el producto del carrito el producto con el id: ${idProducto} no se encuentra`,
                };
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

let prueba = new CarritoDaoArchivo();

prueba.guardarProducto('729b9d30-237a-4e2e-aad2-48a3fbaae056', '1532273f-2711-479e-b923-cd033dab51eb');

module.exports = CarritoDaoArchivo;