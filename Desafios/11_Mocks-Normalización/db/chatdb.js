const knex = require('knex');
const { reverse } = require('lodash');

// Opciones para SQLite3

const optionsSQLite3 = {
    client: 'sqlite3',
    connection: {
        filename: './db/ecommerce.sqlite'
    },
}

// Funciones para MySQL / MariaDB

async function crearTabla() {
    const knexInstance = knex(optionsSQLite3)
    try {
        const exist = await knexInstance.schema.hasTable('mensajes')
        if (exist) {
            console.log('La tabla mensajes ya existe');
            return true
        }
        await knexInstance.schema.createTable('mensajes', table => {
            table.string('hora')
            table.string('correo')
            table.string('mensaje')
        })
        console.log('Tabla mensajes creada');
    } catch (error) {
        console.log(error.message);
    } finally {
        knexInstance.destroy();
    }
}

async function verificarExistencia() {
    const knexInstance = knex(optionsSQLite3)
    try {
        const rows = await knexInstance('mensajes').select('*');
        return rows.length > 0;
    } catch (error) {
        console.error(error.message);
    }
}

async function mostrarMensajes() {
    const knexInstance = knex(optionsSQLite3)
    const mensajes = await knexInstance('mensajes').select('*')
    return this.verificarExistencia()
        ? mensajes.reverse()
        : { error: "La lista de mensajes está vacia" };
}

async function guardarMensajes(nuevoMensaje) {
    const knexInstance = knex(optionsSQLite3)
    let objetoTemp = {
        correo: nuevoMensaje.correo,
        hora: `[${nuevoMensaje.hora}]`,
        mensaje: nuevoMensaje.mensaje,
    };
    const result = await knexInstance('mensajes').insert(objetoTemp);
}

module.exports = {
    crearTabla,
    verificarExistencia,
    mostrarMensajes,
    guardarMensajes,
};