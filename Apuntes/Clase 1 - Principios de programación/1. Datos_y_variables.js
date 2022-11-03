console.log("------ Tipos de datos y variables -----\n");

// JavaScript maneja 2 tipos de datos principales, los primitivos y los de tipo objeto.
// Los primitivos son Strings, num, bulean, undefind y null.
// Los tipo objeto son los class, array y object

// Ejemplo práctico de la declaración de algunas varibles:

let nombre = "pepe";  // variable tipo String
let edad = 50;  // Variable tipo number
let precio = 99.9;  // Varible tipo number
let seriesFavorita = [ // Variable tipo objeto
  {
    nombre: "Dark",
    año: 2017,
    protagonistas: [
      "Jonas Kahnwald",
      "Michael Kahnwald",
      "Hannah Kahnwald",
      "Ines Kahnwald",
    ],
  },
  {
    nombre: "Mr Robot",
    año: 2019,
    protagonistas: [
      "Elliot Alderson",
      "Darlene Alderson",
      "Angela Moss",
      "Tyrell Wellick",
    ],
  },
  {
    nombre: "Castlevania",
    año: 2017,
    protagonistas: ["Sumi", "Miranda", "Godbrand"],
  },
];

console.log(nombre);
console.log(edad);
console.log("$" + precio);
console.log(seriesFavorita);

edad++;
console.log(edad);

seriesFavorita.push({
  nombre: "The Sandman",
  año: 2022,
  protagonistas: ["Ameni Rozsa", "Lauren Bello", "Andi Baiz", "Jay Franklin"],
});

console.log(seriesFavorita);
