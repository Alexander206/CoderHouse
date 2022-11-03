# Router & Multer

- Router nos permite confirmar las rutas de nuestros endpoints

- Multer nos permite hacer un trabajo mas facil con respecto a la subida de archivos

## use

El `use` son pasos preliminares antes de realizar las peticiones y respuestas del servidor.

Se estructura de la siguiente manera:

    app.use((req, res, next) => {
        acciones del servidor;
        next();
    })

# Router:

El router nos permite realizar acciones antes de hacer endpoints, además tambien nos ayuda a organizar y fraccionar mejor el codigo para que sea mas entendible y facil de leer.

Preferiblemente routers debe de estar en una carpeta aparte para englobar en un archivo el tratado de un recurso.

## Archivos estáticos

Son archivos que van a estar en el servidor, no van a tener nunguna modificación y pueden ser consultados por el cliente. Por lo general encontramos archivos como : Imagenes, archivos CSS y archivos JavaScript, esto se hace mediante express.static.

Esta función recibe como parámetro el nombre del directorio que contiene los archivos estáticos.

El siguiente código configura el servicio en un directorio denominado public:

`app.use(express.static('public'))`

`app.use('/static', express.static(path.join(__dirname, "public")));`

## Middleware

Son funciones que tienen acceso al objeto de solicitud (req) al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación (next) 

`Funcionalidades:`

- Ejecutar cualquier código.
- Realizar cambios en la solicitud y los objetos de respuesta.
- Finalizar el ciclo de solicitud/respuesta.
- Invocar la siguiente función de middleware en la pila.

- ### Middleware a nivel de la aplicación

Se realiza al inicio de todas las rutas y afectan a todas las rutas

- ### Middleware a nivel de ruta

Se realiza aplicandola como parametro en algunas rutas, especificando todas las rutas que se quieran afectar

- ### Middleware a nivel de router

Se aplica solammente a un router, sin embargo no discrimina a todo el router que se especifique

- ### Middleware para manejo de errores

Debe de tener una sintaxis muy especifica:

    app.use(function(err, req, res, next){
        console.log(err.stack)
        res.status(500).send('Something broke!')
    })

- ### Middleware de terceros

Es un midleware que lo administran desde otro lugar o servidor en la red y que no están ubicadas en el entorno de desarrollo o de ejecución.

# Multer

Es un middleware para Express que facilita el uso de archivos estaticos desde express `Aclaración: ` revisar la version desde npm cual es la mas estable y recomendable para trabajar con multer. Multer afecta a solo unas rutas especificadas para subir archivos al servidor. 