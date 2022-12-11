# Global y Clild process

## Objeto process

Podemos extraer datos de todo el proceso como por ejemplo:

Directorio actual del trabajo
Id del proceso
Version de node
Titulo del proceso
Sistema operativo
Uso de memoria

podemos acabar una aplicación con el metodo exit()

    process.exit();

Podemos agregarle un codigo de salida:

    process.exit(3);

## Función on()

La mayor funcionalidad de process está contenida en la función de on() se ejecuta como un evento en Js, con un identificador de evento y un callback

    process.on('evento', callback = () => {})

### Eventos:

-   `beforeExit`: Podemos hacer un programa con llamadas asincronicas que nos permite controlar caundo hay terminaciones del servidor
-   `exit`: Es un evento que se enciende cuando está a punto de acaberse el proceso de node
-   `uncaughtException`: Es un mecanismo para manejar errores

## process.execPath

Muestra la ruta del proceso por lo general es la ruta de `node`

## process.stdout.write()

Es un proceso muy parecido al de console.log() imprime en pantalla, pero no tiene salto de linea

# Single Thread (único hilo)

los programas en nodeJs se disponen de un unico hilo de ejecución
pero podemos crear proesos secundarios con el módulo `child_process`.

## Proceso hijo

Un proceso hijo es un proceso creado por un proceso padre, hay 4 tipos de procesos hijo que podemos crear:

-   `exec()`
-   `spawn()`
-   `execFile()`
-   ``

para usar los procesos hijos hay que importar un modulo interno de node js llamado `child_process`;

## Proceso hijo: exec() o execFile()

se le colocan 2 parametros, el primero es el comando `ls-lh` un comando de consola, el segundo un callback a su vez ese callbacl tendria 3 parametros (error, stdout, stderr)

o podemos tener un archivo llamado script.sh en donde guardamos todos los comandos que se ejecutan

## Proceso hijo: exec()

el primer argumento del spawn es el comando `find`, el segundo argumento es un array que contiene los argumentos para el comando ejecutado

## Proceso hijo: fork()

Es una variación de spawn que permite la comunicación entre el proceso principal y el segundario este es un proceso MUY IMPORTANTE
