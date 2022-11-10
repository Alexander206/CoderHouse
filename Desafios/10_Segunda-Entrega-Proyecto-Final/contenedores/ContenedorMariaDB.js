import knex from 'knex';

const options = {
    client: 'mysql',
    conecction: {
        host: '127.0.0.1',
        port: '3306',
        user: 'master',
        password: 'master',
        database: 'ecommerce',
    },
};

const knexInstance = knex(options);

export function createTable() {
    try {
        knexInstance.schema.createTable('productos', (table) => {
            table.string('id');
            table.string('timestamp');
            table.string('nombre');
            table.string('descripcion');
            table.string('codigo');
            table.string('foto');
            table.integer('precio');
            table.integer('stock');
        });
    } catch (error) {}

    console.log('Tabla creada productos');
}
