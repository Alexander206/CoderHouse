const { response } = require("express");
const fs = require("fs");

// generador de hora
const today = new Date();

// generador de id
const { v4: uuidv4 } = require("uuid");

class GestorCarrito {
    constructor(archivoCarrito, archivoProductos) {
        this.archivoCarrito = `${__dirname}/${archivoCarrito}`;
        this.archivoProductos = `${__dirname}/${archivoProductos}`;
    }

    async new() {
        try {
            let data = await this.leerArchivo();
            console.log(data);
            const now = today.toLocaleString();
            const nuevoCarrito = {
                id: uuidv4(),
                timestamp: now,
                productos: [],
            };
            data.push(nuevoCarrito);
            fs.writeFileSync(this.archivoCarrito, JSON.stringify(data, "", 4), "utf-8");
            return data[data.length - 1].id;
        } catch (error) {
            console.log(error.message);
        }
    }

    async delete(id) {
        try {
            let data = await this.leerArchivo();
            const [carrito] = data.filter((item) => item.id === id);
            const posCarrito = data.indexOf(carrito);
            if (this.verificarExistencia() && carrito) {
                data.splice(posCarrito, 1);
                fs.writeFileSync(this.archivoCarrito, JSON.stringify(data, "", 4), "utf-8");
                return true;
            } else {
                return { error: "No se pudo borrar el carrito" };
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async getProducts(id) {
        try {
            let data = await this.leerArchivo();
            const [carrito] = data.filter((item) => item.id === id);
            if (this.verificarExistencia() && carrito) {
                return carrito.productos;
            } else {
                return { error: "No hay productos asociados a esa id" };
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async postProduct(idCarrito, idProducto) {
        try {

            let data = await this.leerArchivo();
            const productos = await this.leerProductos();
            const [carrito] = data.filter((item) => item.id === idCarrito);
            let [producto] = productos.filter((item) => item.id === idProducto);

            if (this.verificarExistencia && carrito && producto) {
                const now = today.toLocaleString();
                producto.id = uuidv4();
                producto.timestamp = now;
                carrito.productos.push(producto);
                fs.writeFileSync(this.archivoCarrito, JSON.stringify(data, "", 4), "utf-8");
                return true
            } else {
                return { error: "No se pudo agregar el producto al carrito" };
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async deleteProduct(idCarrito, idProducto) {
        try {

            let data = await this.leerArchivo();
            const [carrito] = data.filter((item) => item.id === idCarrito);
            const [producto] = carrito.productos.filter((item) => item.id === idProducto);
            const posProducto = carrito.productos.indexOf(producto);

            if (this.verificarExistencia && carrito && producto) {
                carrito.productos.splice(posProducto, 1);
                fs.writeFileSync(this.archivoCarrito, JSON.stringify(data, "", 4), "utf-8");
                return true;
            } else {
                return { error: "No se pudo borrar el producto del carrito" };
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    leerArchivo() {
        try {
            const data = fs.readFileSync(this.archivoCarrito, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.log("No se puede leer el archivo", error.message);
        }
    }

    leerProductos() {
        try {
            const data = fs.readFileSync(this.archivoProductos, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            console.log("No se puede leer el archivo de los productos", error.message);
        }
    }

    verificarExistencia() {
        return this.leerArchivo().length > 0;
    }
}


module.exports = GestorCarrito;
