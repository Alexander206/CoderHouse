import knex from 'knex'

const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'dataBaseDemo'
    },
}

export async function createTable() {
    const knexInstance = knex(options)
    try {
        const exist = await knexInstance.schema.hasTable('personas')
        if (exist) {
            console.log('La tabla persona ya existe');
            return
        }
        await knexInstance.schema.createTable('personas', table => {
            table.increments('id').notNullable()
            table.string('fullname', 25).notNullable()
            table.integer('age').notNullable()
            table.string('email', 45).notNullable()
            table.string('phone', 20).notNullable()
            table.primary('id')
        })
        console.log('La tabla personas creada');
    } catch (error) {
        console.log(error.message);
    } finally {
        knexInstance.destroy();
    }
}

export async function insertPerson(persons) {
    const knexInstance = knex(options)
    try {
        const result = await knexInstance('personas').insert(persons);
        console.log("Personas creadas: ", result);
    } catch (error) {
        console.log(error.message);
    } finally {
        knexInstance.destroy();
    }
}

export async function deletePersons() {
    const knexInstance = knex(options)
    try {
        const result = await knexInstance('personas').del()
        console.log('Personas eliminadas', JSON.stringify(result));
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}

export async function getPersons() {
    const knexInstance = knex(options)
    try {
        const rows = await knexInstance('personas').select('*');
        console.log('Personas encontradas', rows.length);
        return rows
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}

export async function updatePersons(data, conditions) {
    const knexInstance = knex(options)
    try {
        const result = await knexInstance('personas').update(data).where(...conditions)
        console.log('Personas modificadas', JSON.stringify(result));
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}

export async function deletePerson(conditions) {
    const knexInstance = knex(options)
    try {
        if (conditions) {
            await knexInstance.from('personas').del().where(conditions)
            console.log('Persona eliminada')
        } else {
            await knexInstance.from('personas').del()
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        knexInstance.destroy()
    }
}