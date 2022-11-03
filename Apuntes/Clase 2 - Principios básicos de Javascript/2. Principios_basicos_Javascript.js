// Objetivos:
// 1. Fundamentos de sintaxis y escritura
// 2. EcmaScript 6

// funciones
console.log("---------- Funciones ----------\n");

// son bloques de codigo que permite reutilizar dicho codigo en otras secciones del mismo
// Ejemplo:

let yo = "Jeisson";

// Desfinición de la función
function hola(name) {
  console.log(`Hola ${name}`);
}

// Ejecución de la función
hola(yo);

// funciones anonimas.
console.log("---------- Funciones Anónimas ----------\n");

// Pueden haber funciones sin nombre y estas son definidas como funciones anonimas. Estas funciones sin nombre tienen la particularidad de que no se puede referenciar en diferentes lugares dentro del codigo y son usadas por lo general en callbacks y closure. Comunmente se asignan estas funciones a una variable.
// Ejemplo 1:

let saludar = function (name) {
  console.log(`Hola ${name}`);
};

saludar(yo);

// Ejemplo 2:

function saludar2() {
  return function (name) {
    console.log(`Hola ${name}`);
  };
}

const saludarEjemplo2 = saludar2(yo);
saludarEjemplo2();

//Ejemplo 3:

(function (name) {
  console.log(`Hola ${name}`);
})(yo);

// funciones IIFE.
console.log("---------- Funciones IIFE ----------\n");

// Son funciones que se ejecutan justo despues de ser definidas.
// Ejemplo:

(function (name) {
  console.log(`Hola ${name}`);
})(yo);

// funcion closure
console.log("---------- Funciones Closure ----------\n");

// Las funciones closure guarda rferencias del estado adyacente (ámbito léxico). Es decir que podemos a acceder al ambito de una funcion exterior, desde una funcion interior.
// Ejemplo:

function saludarClosure(name) {
  const question = "¿Cómo estás?";
  return function () {
    console.log(`Hola ${name} ${question}`);
  };
}

const saludarPreguntar = saludarClosure(yo);
saludarPreguntar();

// Template String
console.log("---------- Template String ----------\n");

// templates string: utilizando comillas invertidas y soporta multilinea, ayuda a concatenar de manera mas eficiente el codigo.
// Ejemplo:

console.log(`Esto es una prueba de template String:
Hola ${yo}`);

// Ejercicio en clase
console.log(
  "---------- Ejercicio en clase (Funciones y cLousures) ----------\n"
);

// 1. Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.

// 2. Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.

// 3. Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

let listaDatos = ["Dato 1", "Dato 2", "Dato 3", "Dato 4", "Dato 5"];

mostrarLista(listaDatos);

function mostrarLista(datos) {
  if (!datos.length == 0) {
    for (i = 0; i < datos.length; i++) {
      console.log(datos[i]);
    }
  } else {
    console.log("Lista vacía");
  }
}

(function (datos) {
  if (!datos.length == 0) {
    for (i = 0; i < datos.length; i++) {
      console.log(datos[i]);
    }
  } else {
    console.log("Lista vacía");
  }
})(listaDatos);

function crearMultriplicador(x) {
  return function (y) {
    return y * x;
  };
}

let multiplicar = crearMultriplicador(5);
console.log(multiplicar(6));

// Objetos
console.log("------- clases ---------\n");

// Aqui trabajamos con un paradigma de programación, la cual es la programación orientada a objetos o POO. Todas las clases tienen atributos, metodos y un constructor.

class Contador {
  static cuentaGlobal = 0;

  constructor(name, conteo) {
    this.name = name;
    this.conteo = conteo;
  }

  obtenerResponsable() {
    return this.name;
  }

  obtenerCuentaIndividual() {
    return this.conteo;
  }

  static obtenerCuentaGlobal() {
    return this.cuentaGlobal;
  }

  contar() {
    this.conteo++;
    Contador.cuentaGlobal++;
  }
}

const contador1 = new Contador("Jeisson", 0);
const contador2 = new Contador("Liliana", 0);
const contador3 = new Contador("Pilar", 0);
const contador4 = new Contador("Vivian", 0);

console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());
console.log(contador2.obtenerResponsable());
console.log(contador2.obtenerCuentaIndividual());
console.log(contador3.obtenerResponsable());
console.log(contador3.obtenerCuentaIndividual());
console.log(contador4.obtenerResponsable());
console.log(contador4.obtenerCuentaIndividual());

contador1.contar();
contador2.contar();
contador3.contar();
contador4.contar();

console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());
console.log(contador2.obtenerResponsable());
console.log(contador2.obtenerCuentaIndividual());
console.log(contador3.obtenerResponsable());
console.log(contador3.obtenerCuentaIndividual());
console.log(contador4.obtenerResponsable());
console.log(contador4.obtenerCuentaIndividual());

console.log(Contador.obtenerCuentaGlobal());

// Arguments & this
console.log(`--------- Arguments & this --------\n`);
