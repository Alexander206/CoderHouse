// Return implícito en funciones:
console.log("-------- Return implícito  ---------\n");
// funciones flecha: una sola linea
const sum = (a, b) => a + b;
console.log(sum(2, 3));

// funciones flecha: multiples instruciones
const sum2 = (a, b) => {
  let s = a + b;
  return s;
};
console.log(sum2(2, 3));

// funciones flecha: un solo argumento
const sum3 = (a) => a ^ 2;
console.log(sum3(2));

// Retornar una array function
const getPersona = () => ({ nombre: "Juan", edad: 34 });
console.log(getPersona());

// Calbacks
console.log("-------- Calbacks ---------\n");
// Son funciones que reciben como parametro mas funciones

function operacion(a, b, ope) {
  console.log("");
  return ope(a, b);
}

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const modulo = (a, b) => a % b;

console.log(`La suma es de: ${operacion(2, 3, sumar)}`);
console.log(`La resta es de: ${operacion(2, 3, restar)}`);
console.log(`La multiplicación es de: ${operacion(2, 3, multiplicar)}`);
console.log(`La división es de: ${operacion(2, 3, dividir)}`);
console.log(`El módulo es: ${operacion(2, 3, modulo)}`);

// timers
// Son funciones ya dispuestas dentro de JavaScript que ayudan a trabajar con variables temporales, los datos de entrada por lo general se calculan en milisegundos. Funciona mediante modelos asincronicos no bloqueantes.

// SetTimeout
console.log(`--------- SetTimeout ----------\n`);

// Es una función call0back que ejecuta la funcion despues de un periodo de tiempo, se mide en milisegundos.

let name = "Jeisson";

setTimeout(saludar, 2000, name);

function saludar(saludo) {
  console.log(`hola ${name}, ¿Cómo estás?`);
}

// setInterval
console.log(`--------- setInterval ---------\n`);

// Al igual que setTimeout, es una función nativa. Tambien recibe un callback, pero, ya no se ejecuta cuando termine el contador, si no, se ejecuta una y otra vez cuando el periodo de tiempo es completado.

// de igual manera funciona con un modelo asincrónico no bloqueante

// Se ejecutará hasta que se ejecute el comando cleanInterval() o se cierre la ventana.
let contador = 0;

let conteoSetInterval = setInterval(mostrarNumeros, 1000);

function mostrarNumeros() {
  console.log(contador);
  contador++;
  if (contador > 10) {
    clearInterval(conteoSetInterval);
  }
}

// Promesas
console.log(`------- Promesas --------\n`);

// Las promesas son un objeto que representa la terminación o fracaso de un proceso asincronico, nos permite tratar datos alojados en APIs, Bases de datos y demas elementos relacionados con la red.
// Una promesa tiene 3 estados: pendiente, cumplido, rechazado.
// Apoyado con platzi

// ejemplo de platzi

const vacas = 15;

// Declaración de la promesa, dentro de la promesa tenemos un resolve que equivale a una respuesta positiva y despues tenemos un reject que equivale a un error en la lógica.
const contarLeche = new Promise((resolve, reject) => {
  if (vacas > 10) {
    resolve(`Tenemos ${vacas} en la granja`);
  } else {
    reject(`No tenemos vacas suficientes en la granja`);
  }
});

// Aqui llamamos la promesa y utilizamos them para las respuestas positivas y catch para los errores. Usar finally sirve para ejecutar cualquier acción despues de culminar la promesa, sin importar el resultado.
contarLeche
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log(`Finalizo la ejecución`));

// Ejemplo de promesas => Lanzamiento de un cohete.

function cuentaRegresiva(inicio) {
  return new Promise((resolve) => {
    let conteo = inicio;
    let intervalo;
    console.log(`Iniciando cuenta regresiva... ⏳`);
    intervalo = setInterval(() => {
      console.log(`⏰ ${conteo}`);
      if (conteo <= 0) {
        clearInterval(intervalo);
        resolve("Se lanzó el cohete! 🚀👨‍🚀");
      }
      conteo--;
    }, 1000);
  });
}

cuentaRegresiva(9).then((result) => console.log(result));
