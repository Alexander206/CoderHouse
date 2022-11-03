import knex from 'knex'

const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'ecommerce'
    },
}

export async function createTable() {
    const knexInstance = knex(options)
    try {
        const exist = await knexInstance.schema.hasTable('productos')
        if (exist) {
            console.log('La tabla productos ya existe');
            return
        }
        await knexInstance.schema.createTable('productos', table => {
            table.increments('id').notNullable()
            table.string('nombre', 15).notNullable()
            table.string('codigo', 10).notNullable()
            table.float('precio')
            table.integer('stock')
            table.primary('id')
        })
        console.log('Tabla productos creada');
    } catch (error) {
        console.log(error.message);
    } finally {
        knexInstance.destroy();
    }
}

export async function insertarProductos(productos) {
    const knexInstance = knex(options)
    try {
        const result = await knexInstance('productos').insert(productos);
        console.log("Productos creadas: ", result);
    } catch (error) {
        console.log(error.message);
    } finally {
        knexInstance.destroy();
    }
}

export async function borrarProductos() {
    const knexInstance = knex(options)
    try {
        const result = await knexInstance('productos').del()
        console.log('productos eliminados', JSON.stringify(result));
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}

export async function verProductos() {
    const knexInstance = knex(options)
    try {
        const rows = await knexInstance('productos').select('*');
        console.log('productos encontrados: ', rows.length);
        return rows
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}

export async function modificarProductos(data, conditions) {
    const knexInstance = knex(options)
    try {
        const result = await knexInstance('productos').update(data).where(...conditions)
        console.log('productos modificados', JSON.stringify(result));
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}

export async function borrarProducto(conditions) {
    const knexInstance = knex(options)
    try {
        if (conditions) {
            await knexInstance.from('productos').del().where(conditions)
            console.log('producto eliminado')
        } else {
            await knexInstance.from('productos').del()
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}