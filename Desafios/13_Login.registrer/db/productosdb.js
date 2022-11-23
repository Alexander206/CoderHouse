const knex = require('knex');

// opciones para MySQL / MariaDB

const optionsMariaDB = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'productosdb'
    },
}

// Funciones para MySQL / MariaDB

async function crearTabla() {
    const knexInstance = knex(optionsMariaDB)
    try {
        const exist = await knexInstance.schema.hasTable('productos')
        if (exist) {
            console.log('La tabla productos ya existe');
            return true
        }
        await knexInstance.schema.createTable('productos', table => {
            table.increments('id').notNullable()
            table.string('nombre').notNullable()
            table.integer('precio').notNullable()
            table.string('thumbnail').notNullable()
            table.primary('id')
        })
        console.log('Tabla productos creada');
    } catch (error) {
        console.log(error.message);
    } finally {
        knexInstance.destroy();
    }
}

async function verificarExistencia() {
    const knexInstance = knex(optionsMariaDB)
    try {
        const rows = await knexInstance('productos').select('*');
        return rows.length > 0;
    } catch (error) {
        console.error(error.message);
    }
}

async function mostrarProductos() {
    const knexInstance = knex(optionsMariaDB)
    const productos = await knexInstance('productos').select('*')
    return this.verificarExistencia()
        ? productos
        : { error: "La lista de productos está vacia" };
}

async function guardarProducto(nuevoProducto) {
    const knexInstance = knex(optionsMariaDB)
    if (this.verificarExistencia()) {
        let objetoTemp = {
            nombre: nuevoProducto.nombre,
            precio: nuevoProducto.precio,
            thumbnail: nuevoProducto.thumbnail,
        };
        const result = await knexInstance('productos').insert(objetoTemp);
        console.log("Personas creadas: ", result);
        return result;
    } else {
        console.log(`No existen productos, crearemos un producto nuevo.`);
        let objetoTemp = {
            nombre: nuevoProducto.nombre,
            precio: nuevoProducto.precio,
            thumbnail: nuevoProducto.thumbnail,
        };
        const result = await knexInstance('productos').insert(objetoTemp);
        console.log("Personas creadas: ", result);
        return result;
    }
}

module.exports = {
    crearTabla,
    verificarExistencia,
    mostrarProductos,
    guardarProducto
};