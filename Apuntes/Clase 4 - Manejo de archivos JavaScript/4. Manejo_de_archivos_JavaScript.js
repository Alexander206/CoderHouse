// rutas relativas y rutas absulutas
console.log(`------ Rutas relativas y rutas absolutas -------\n`);

// las rutas absolutas son las que nacen desde el inicio del sistema de archivos.
// Ejemplo:  C:\Users\Amaro\OneDrive\Documentos\Desarrollo de software\5. Cursos\Desarrollo-Backend_CoderHouse

// las rutas relativas, hacen referencia a un archivo  dentro del directorio en el que se encuentra.
// Ejemplo: ./4. Manejo_de_archivos_JavaScript.js

// hay diferentes formas de acceder a rutas relativas. Se recomienda mirar mas a profundidad.

console.log(`------ Manejo de archivos con Node.js (JavaScript) -----\n`);

const { error } = require("console");
// Los archivos son una forma de almacenar datos que persistan más allá de la ejecución del programa. Segun el caso hay ventajas o desventajas en usar archivos como medio de almacenamiento de información.

// Ventajas:
// Son faciles de usar, no requiere el uso de programas externos, son faciles de compartir.

// Desventajas:
// Podria saturar el sistema ya que los archivos podrian velverse pesados. Dependiendo el sistema operativo, podria generar problemas.

// Para el manejo de archivos con jode.js es necesario usar el módulo nativo file system: fs
// Importar fs en nuestro código:

const fs = require("fs");
fs.writeFileSync("4. text-file.txt", "Soy un archivo fachero facherito creado desde fs 🤯");

// Operaciones sincrónicas con fs: todas las funciones asincrónicas terminan con "Sync"

console.log(`\n------ readFileSync ------\n`);

// readFileSync => leer un archivo
// Parametros ('String con ruta del archivo', 'tipo de archivo')
console.log(`🤖 Preparando la lectura del archivo`);
let data = fs.readFileSync("4. text-file.txt", "utf-8");
console.log(`👽 finalizó la lectura del arcivo`);
console.log(`📲 Este es el contenido: \n`, data);

console.log(`\n------ writeFileSync ------\n`);
// writeFileSync => escribir un archivo, si no existe el archivo, lo crea.
// Parametros ('String con ruta del archivo', CONTENIDO)

console.log(`🤖 Preparando la escritura del archivo`);
let contenido = "Hola, soy un texto kawai introducido en este archivo... 🐈\n";
fs.writeFileSync("4. text-file.txt", contenido);
console.log(`👽 finalizó la escritura del arcivo`);

data = fs.readFileSync("4. text-file.txt", "utf-8");
console.log(`📲 Este es el contenido: \n`, data);

console.log(`\n------ appendFileSync ------\n`);
// appendFileSync => actualizar un archivo, agregando contenido y si no existe el archivo, lo crea.
// Parametros ('String con ruta del archivo', CONTENIDO)

console.log(`🤖 Preparando para agregar contenido al archivo`);
contenido = "Este texto está feliz por que fue agregado con fs 😎\n";
fs.appendFileSync("4. text-file.txt", contenido);
console.log(`👽 finalizó la escritura del arcivo`);

data = fs.readFileSync("4. text-file.txt", "utf-8");
console.log(`📲 Este es el contenido: \n`, data);

console.log(`\n------ unlinkSync ------\n`);
// unlinkSync => borrar un archivo
// Parametros ('String con ruta del archivo');

console.log(`Preparando archivo para ser borrado... 🤬`);
fs.unlinkSync("4. text-file.txt");
console.log(`Se borro el archivo 🙀`);

console.log(`\n------ mkdirSync ------\n`);
// mkdirSync => crear una carpeta
console.log(`Queda de tarea jajaja`);

console.log(`\n------ Manejo de errores con try catch ------\n`);
// manejo de errores en archivos. Se hace mediante el try catch, por lo general se usa para no bloquear el flujo de codigo y evaluar una zona en la que podrian haber errores.

// try {
//    logica en la que podria aber un error
//  } catch (error) {
//  console.log("texto que queramos añadir al error", error);
//  }

// Error a proposito en leer un archivo que ya se elimino
try {
  data = fs.readFileSync("4. text-file.txt", "utf-8");
  console.log(`📲 Este es el contenido: \n`, data);
} catch (error) {
  console.log("El archivo fue eliminado, no se puede leer 🙄", error.message);
}

console.log(`\n------ Ejercicio en clase ------\n`);
// Guardar fecha y hora en un archivo

const escribirArchivo = (ruta, contenido) => {
  try {
    console.log(`Creando el nuevo archivo con la fecha y hora actual...`);
    fs.writeFileSync(ruta, contenido, "utf-8");
    console.log(`Se creo el archivo con la fecha y hora actual 😎`);
  } catch (error) {
    console.log("Algo malo ocurrio! 🤯 no se creo nuestro archivo...", error);
    throw new Error(error.message);
  }
};

const leerArchivo = (ruta) => {
  try {
    console.log(`Se está leyendo nuestro archivo 📲`);
    let archivo = fs.readFileSync(ruta, "utf-8");
    console.log(`El contenido de nuestro nuevo archivo es:\n`, archivo);
  } catch (error) {
    console.log("Algo malo ocurrio! 🤯 no se leyo nuestro archivo...", error);
    throw new Error(error.message);
  }
};

try {
  let ruta = "./fyh.txt";
  let hyfActual = new Date().toLocaleString();
  escribirArchivo(ruta, hyfActual);
  leerArchivo(ruta);
  fs.unlinkSync(ruta);
} catch (error) {
  console.log(
    "Occurrio un error en la operación, es raro por que yo hago todo perfecto",
    error.message
  );
}

console.log(`\n------ Fs asincrónico ------\n`);
// FS Asincronico tiene los mismos nombres pero sin la palabra Sync, estas operaciones son no bloqueantes. Reciben un nuevo parametro que es un callback. estos callbacks pueden recibir un primer parametro relacionado al error si tuviese error. No es necesario usar try catch

// creando archivo para no generar errores.
fs.writeFile(
  "4. text-file.txt",
  "Soy un archivo fachero facherito ASINCRÓNICO creado desde fs 🤯",
  (error) => {
    if (error) {
      console.log(`No!! ocurrio un error en la creación del archivo! 😨`, error.message);
    }
  }
);

console.log(`\n------ readFile ------\n`);

// readFile => leer un archivo
// Parametros ('String con ruta del archivo', 'tipo de archivo', (error, contenido) =>{
//    if (error) {
//          hubo un error, no pude leerlo, hacer algo!
//    } else {
//          En este punto del código, puedo acceder a todo el contenido del archivo a través de la variable "Contenido"
//    }
// });

console.log(`🤖 Preparando la lectura del archivo asincrónico...`);
fs.readFile("4. text-file.txt", "utf-8", (error, contenido) => {
  if (error) {
    console.log(`No!! ocurrio un error en la lectura del archivo! 😨`, error.message);
  } else {
    console.log(`👽 finalizó la lectura del arcivo`);
    console.log(`📲 Este es el contenido: \n`, contenido);
  }
});

console.log(`\n------ writeFile ------\n`);

// writeFile => Escribir un archivo
// Parametros ('String con ruta del archivo', 'contenido a escribir', (error) =>{
//    if (error) {
//          hubo un error, no pude escribir ni crear el archivo, hacer algo!
//    } else {
//          En este punto del código, se puede hacer acciones justo despues de escribir o crear el archivo
//    }
// });

console.log(`🤖 Preparando la escritura del archivo asincrónico...`);
fs.writeFile(
  "4. text-file.txt",
  "Hola, soy un texto ASINCRÓNICO kawai introducido en este archivo... 🐈\n",
  (error) => {
    if (error) {
      console.log(
        `No!! ocurrio un error en la escritura o creación del archivo! 😨`,
        error.message
      );
    } else {
      console.log(`👽 finalizó la escritura del arcivo`);
    }
  }
);

console.log(`\n------ appendFile ------\n`);
// appendFileSync => actualizar un archivo, agregando contenido y si no existe el archivo, lo crea.
// Parametros ('String con ruta del archivo', CONTENIDO, (error) =>{
//    if (error) {
//          hubo un error, no pude agregar ni crear el archivo, hacer algo!
//    } else {
//          En este punto del código, se puede hacer acciones justo despues de escribir o crear el archivo
//    }
// });

console.log(`🤖 Preparando para agregar contenido al archivo`);
contenido = "Este texto está feliz por que fue agregado con fs 😎\n";
fs.appendFile("4. text-file.txt", contenido, (error) => {
  if (error) {
    console.log(`No!! ocurrio un error en la escritura o creación del archivo! 😨`, error.message);
  } else {
    console.log(`👽 finalizó la escritura del arcivo`);
  }
});

console.log(`\n------ unlink ------\n`);
// unlinkSync => borrar un archivo
// Parametros ('String con ruta del archivo', (error) =>{
//    if (error) {
//          hubo un error, no pude agregar ni crear el archivo, hacer algo!
//    } else {
//          En este punto del código, se puede hacer acciones justo despues de escribir o crear el archivo
//    }
// });

console.log(`Preparando archivo para ser borrado... 🤬`);
fs.unlink("4. text-file.txt", (error) => {
  if (error) {
    console.log(`No!! ocurrio un error borrando el archivo! 😨`, error.message);
  } else {
    console.log(`Se borro el archivo 🙀`);
  }
});

console.log(`\n------ mkdir ------\n`);
// mkdir => crear una carpeta
console.log(`Queda de tarea xd xd jajaja`);

console.log(`\n------ promesas con archivos fs ------\n`);
// Ahora podemos operar mediante promesas, en el espacio de las callbacks, ademas se hará uso de asyc y away.
// Para poder operar con promesas, es necesario añadir despues del "fs" => promises. De la siguiente manera:

// creando el archivo
fs.promises
  .writeFile(
    "4. text-file-promises.txt",
    "Soy un archivo fachero facherito ASINCRÓNICO creado desde fs 🤯"
  )
  .then(() => {
    // borrando el archivo
    fs.promises
      .unlink("4. text-file-promises.txt")
      .then(() => {})
      .catch((error) => {
        console.log(`No!! ocurrio un error en la creación del archivo! 😨`, error);
      });
  })
  .catch((error) => {
    console.log(`No!! ocurrio un error en la creación del archivo! 😨`, error);
  });
