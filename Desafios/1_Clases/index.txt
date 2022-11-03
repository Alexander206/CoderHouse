class Usuario {
  nombre = "";
  apellido = "";
  libros = [];
  mascotas = [];

  constructor(nombre, apellido, libros, mascotas) {
    validarCampos(nombre, apellido, libros, mascotas);

    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(titulo, autor) {
    this.libros.push({
      titulo,
      autor,
    });
  }

  getBookNames() {
    return this.libros.map((libro) => libro.titulo);
  }
}

function validarCampos(nombre, apellido, libros, mascotas) {
  if (typeof nombre != "string" || typeof apellido != "string") {
    throw new Error("nombre o apellido no son string");
  }

  if (typeof libros != "object" || Object.keys(libros).length == 0) {
    throw new Error("libros no es un aray con objetos");
  }

  if (typeof mascotas != "object") {
    throw new Error("Mascotas no es un array");
  }
}

let usuario = new Usuario(
  "Jeisson",
  "Gavilán",
  [
    {
      titulo: "La máquina del tiempo",
      autor: "Herbert George Wells",
    },
    {
      titulo: "En las montañas de la locura",
      autor: "H.P. Lovecraft",
    },
    {
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
    },
  ],
  ["Gato", "Perro"]
);

console.log(`El nombre del usuario es: ${usuario.getFullName()}\n`);

console.log(
  `La cantidad de mascotas que tiene ${
    usuario.nombre
  } son ${usuario.countMascotas()} \n`
);

usuario.addMascota("pato");

console.log(
  `${usuario.nombre} agrego una nueva mascota, sus mascotas son las siguientes:`
);

console.log(`${usuario.mascotas}\n`);

console.log(
  `Ahora la cantidad de mascotas que tiene ${
    usuario.nombre
  } son ${usuario.countMascotas()} \n`
);

console.log(
  `${usuario.nombre} tiene los siguientes libros: \n${usuario.getBookNames()}\n`
);

usuario.addBook("Soy leyenda", "Richard Matheson");

console.log(
  `${
    usuario.nombre
  } agrego un libro mas, ahora tiene los siguientes libros: \n${usuario.getBookNames()}`
);
