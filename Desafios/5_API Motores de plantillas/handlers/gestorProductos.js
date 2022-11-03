class GestorProductos {
  constructor(archivo) {
    this.archivo = archivo;
  }

  verificarExistencia() {
    {
      return this.archivo.length > 0;
    }
  }

  mostrarProductos() {
    return this.verificarExistencia()
      ? this.archivo
      : { error: "La lista de productos está vacia" };
  }

  buscarProducto(identificador) {
    let temp = this.archivo.find((i) => i.id == identificador);
    return temp !== undefined && this.verificarExistencia()
      ? temp
      : { error: "Producto no encontrado" };
  }

  guardarProducto(nuevoProducto) {
    let nuevoId = this.archivo.length + 1;
    if (this.verificarExistencia()) {
      let objetoTemp = {
        id: nuevoId.toString(),
        nombre: nuevoProducto.nombre,
        precio: nuevoProducto.precio,
        thumbnail: nuevoProducto.thumbnail,
      };

      this.archivo.push(objetoTemp);
      return objetoTemp.id;
    } else {
      console.log(`No existen productos, crearemos un producto nuevo.`);
      let objetoTemp = {
        id: nuevoId.toString(),
        nombre: nuevoProducto.nombre,
        precio: nuevoProducto.precio,
        thumbnail: nuevoProducto.thumbnail,
      };

      this.archivo.push(objetoTemp);
      return objetoTemp.id;
    }
  }

  actualizarProducto(identificador, nuevoProducto) {
    if (identificador > 0 && identificador <= this.archivo.length) {
      this.archivo[identificador - 1].nombre = nuevoProducto.nombre;
      this.archivo[identificador - 1].precio = nuevoProducto.precio;
      this.archivo[identificador - 1].thumbnail = nuevoProducto.thumbnail;
      return this.mostrarProductos();
    } else {
      return { error: "Producto no encontrado" };
    }
  }

  borrarProducto(identificador) {
    if (identificador > 0 && identificador <= this.archivo.length) {
      this.archivo.splice(identificador - 1, 1);
      return this.mostrarProductos();
    } else {
      return { error: "Producto no encontrado" };
    }
  }
}

module.exports = GestorProductos;
