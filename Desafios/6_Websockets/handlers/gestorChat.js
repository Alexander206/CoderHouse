class GestorChat {
  constructor(archivo) {
    this.archivo = archivo;
  }

  guardarChat(nuevoMensaje) {
    let objetoTemp = {
      correo: nuevoMensaje.correo,
      hora: `[${nuevoMensaje.hora}]`,
      mensaje: nuevoMensaje.mensaje,
    };

    this.archivo.push(objetoTemp);

    return this.archivo;
  }

  estaEscribiendo() {
    setTimeout(() => {
      return false;
    }, 2000);
  }
}

module.exports = GestorChat;
