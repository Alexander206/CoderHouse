const fs = require("fs");

// generador de hora
const today = new Date();

// generador de id
const { v4: uuidv4 } = require("uuid");

class GestorProductos {
  constructor(archivo) {
    this.archivo = `${__dirname}/${archivo}`;
    this.data;
  }

  async get() {
    try {
      const data = await this.leerArchivo();
      if (this.verificarExistencia()) {
        return data;
      } else {
        return { error: "No hay productos" };
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async getID(id) {
    try {
      const data = await this.leerArchivo();
      let [temp] = data.filter((item) => item.id === id);
      if (this.verificarExistencia() && temp) {
        return temp;
      } else {
        return { error: "No se encuentra el producto" };
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async post(nuevoProducto) {
    try {
      let data = await this.leerArchivo();
      const now = today.toLocaleString();
      nuevoProducto = {
        id: uuidv4(),
        timestamp: now,
        ...nuevoProducto,
      };
      data.push(nuevoProducto);
      fs.writeFileSync(this.archivo, JSON.stringify(data, "", 4), "utf-8");
      return true
    } catch (error) {
      console.log(error.message);
    }
  }

  async put(id, nuevoProducto) {
    try {
      let data = await this.leerArchivo();
      const [producto] = data.filter((item) => item.id === id);
      const posProducto = data.indexOf(producto);
      const now = today.toLocaleString();
      if (this.verificarExistencia() && producto) {
        data[posProducto] = {
          id: id,
          timestamp: now,
          ...nuevoProducto,
        };
        fs.writeFileSync(this.archivo, JSON.stringify(data, "", 4), "utf-8");
        return true;
      } else {
        return { error: "No se encuentra el producto" };
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async delete(id) {
    try {
      let data = await this.leerArchivo();
      const [producto] = data.filter((item) => item.id === id);
      const posProducto = data.indexOf(producto);
      if (this.verificarExistencia() && producto) {
        data.splice(posProducto, 1);
        fs.writeFileSync(this.archivo, JSON.stringify(data, "", 4), "utf-8");
        return true;
      } else {
        return { error: "No se pudo borrar el archivo" };
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  leerArchivo() {
    try {
      const data = fs.readFileSync(this.archivo, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.log("No se puede leer el archivo", error.message);
    }
  }

  verificarExistencia() {
    return this.leerArchivo().length > 0;
  }
}

module.exports = GestorProductos;
