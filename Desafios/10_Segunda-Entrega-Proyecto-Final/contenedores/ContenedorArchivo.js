const fs = require('fs');
const path = require('path');
// generador de hora
const today = new Date();

// generador de id
const { v4: uuidv4 } = require('uuid');

class ContenedorArchivo {
    constructor(archivo) {
        this.archivo = path.join(__dirname, '/../db/Archivo', archivo);
    }

    leerArchivo() {
        try {
            const data = fs.readFileSync(this.archivo, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.log('No se puede leer el archivo', error.message);
        }
    }

    verificarExistencia() {
        return this.leerArchivo().length > 0;
    }

    // Método que obtiene un objeto por su ID

    async listar(id) {
        try {
            let data = await this.leerArchivo();
            const [objeto] = data.filter((item) => item.id === id);
            if (this.verificarExistencia() && objeto) {
                return objeto;
            } else {
                return { error: `No se encuentra el id: ${id}` };
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    // Método que obtiene todos los objetos

    async listarTodos() {
        try {
            if (this.verificarExistencia()) {
                let data = await this.leerArchivo();
                return data;
            } else {
                return { error: 'el archivo está vacio' };
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    // Método que crea un nuevo objeto

    async nuevo(objeto) {
        try {
            let data = await this.leerArchivo();
            const hora = today.toLocaleString();
            const nuevoObjeto = {
                id: uuidv4(),
                timestamp: hora,
                ...objeto,
            };
            data.push(nuevoObjeto);
            fs.writeFileSync(this.archivo, JSON.stringify(data, '', 4), 'utf-8');
            return data[data.length - 1].id;
        } catch (error) {
            console.log(error.message);
        }
    }

    // Método que modifica algun objeto por su ID

    async modificar(id, nuevoObjeto) {
        try {
            let data = await this.leerArchivo();
            const [objeto] = data.filter((item) => item.id === id);
            const posObjeto = data.indexOf(objeto);
            const now = today.toLocaleString();
            if (this.verificarExistencia() && objeto) {
                data[posObjeto] = {
                    id: id,
                    timestamp: now,
                    ...nuevoObjeto,
                };
                fs.writeFileSync(this.archivo, JSON.stringify(data, '', 4), 'utf-8');
                return true;
            } else {
                return { error: 'No se encuentra el objeto' };
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // Nétodo que borra un objeto por su ID

    async borrar(id) {
        try {
            let data = await this.leerArchivo();
            const [objeto] = data.filter((item) => item.id === id);
            const posObjeto = data.indexOf(objeto);
            if (this.verificarExistencia() && objeto) {
                data.splice(posObjeto, 1);
                fs.writeFileSync(this.archivo, JSON.stringify(data, '', 4), 'utf-8');
                return true;
            } else {
                return { error: 'No se pudo borrar el objeto' };
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = ContenedorArchivo;
