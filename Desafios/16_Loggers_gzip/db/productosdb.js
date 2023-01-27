import knex from 'knex';
import winston from 'winston';

/* Manejo de logs */

const logger = winston.createLogger({
  // Instancia de winston | Tipos de logs --> Silly, Debug, Verbose, Info, Warn, Error
  level: 'info', // Consifuración del logger
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'output.log', level: 'info' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

// opciones para MySQL / MariaDB

const optionsMariaDB = {
  client: process.env.MARIADB_CLIENT,
  connection: {
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
  },
};

// Funciones para MySQL / MariaDB

async function crearTabla() {
  const knexInstance = knex(optionsMariaDB);
  try {
    const exist = await knexInstance.schema.hasTable('productos');
    if (exist) {
      logger.info('La tabla productos ya existe');
      return true;
    }
    await knexInstance.schema.createTable('productos', (table) => {
      table.increments('id').notNullable();
      table.string('nombre').notNullable();
      table.integer('precio').notNullable();
      table.string('thumbnail').notNullable();
      table.primary('id');
    });
    logger.info('Tabla productos creada');
  } catch (error) {
    logger.error(error.message);
  } finally {
    knexInstance.destroy();
  }
}

async function verificarExistencia() {
  const knexInstance = knex(optionsMariaDB);
  try {
    const rows = await knexInstance('productos').select('*');
    return rows.length > 0;
  } catch (error) {
    logger.error(error.message);
  }
}

async function mostrarProductos() {
  const knexInstance = knex(optionsMariaDB);
  const productos = await knexInstance('productos').select('*');
  return this.verificarExistencia() ? productos : { error: 'La lista de productos está vacia' };
}

async function guardarProducto(nuevoProducto) {
  const knexInstance = knex(optionsMariaDB);
  if (this.verificarExistencia()) {
    let objetoTemp = {
      nombre: nuevoProducto.nombre,
      precio: nuevoProducto.precio,
      thumbnail: nuevoProducto.thumbnail,
    };
    const result = await knexInstance('productos').insert(objetoTemp);
    logger.info('Productos creados: ', result);
    return result;
  } else {
    logger.info(`No existen productos, crearemos un producto nuevo.`);
    let objetoTemp = {
      nombre: nuevoProducto.nombre,
      precio: nuevoProducto.precio,
      thumbnail: nuevoProducto.thumbnail,
    };
    const result = await knexInstance('productos').insert(objetoTemp);
    logger.info('PRoductos creados: ', result);
    return result;
  }
}

export default {
  crearTabla,
  verificarExistencia,
  mostrarProductos,
  guardarProducto,
};
