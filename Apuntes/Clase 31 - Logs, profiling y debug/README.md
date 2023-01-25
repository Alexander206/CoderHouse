# Logs, profiling y debug

No sirve de mucho realizar aplicaciones sumamente complejas si los usuarios luego no podrán usarlas.

El rendimiento y el consumo de recursos resulta una preocupación clave. Buscamos siempre generar un rendimiento óptimo con un tiempo de inactividad mínimo.

# Cosas que hacer en el código

## Realizar un registro correcto

- Para mejorar el rendimiento de la aplicación podemos usar la compresión con gzip.
- Aumenta la velocidad si lo usamos como un middleware. Es decision de nosotros usarlo en rutas especificas o todas las rutas.
- No es tan buena decicion con una aplicación con una ruta elevada.
- Evitar trabajar con funciones sincronicas.
- Cuando la aplicación tiene mucho trafico, cada llamada asincrona, por mas pequeña que sea, se va sumando y afecta el rendimiento de la aplicación.

## Manejar las excepciones correctamente

- El uso del `Console.log()` o `console.err()` para imprimir mensajes de registro en el terminal es una practica no recomendable en el proceso de producción.
- Depuración: en vez de usar console.log, usar el módulo de depuración especial como debug.
- Para registrar la actividad de la aplicación: en vez de manejar console.log, utilice bibliotecas como Winston o Bunyan.
- Manejar las exepciones, si no lo hacemos, el servicio puede caerse y estar fuera de linea
- Podemos uar librerias como try/catch y promises.

## Establecer NODE_ENV en producción

Jamas se debe desarrollar directamente en producción.

- Express almacena en caché las plantillas de vistas y los archivos CSS generador y genera menos mensajes de error detallados.
- Si necesitamos escribir código específico del entorno, podemos comprobar el valor de NODE_ENV con process.env.NODE_ENV
- Tener en cuenta que comprobar el valor de una variable de entorno supone una reducción de rendimiento, por lo que debe hacerse de forma moderada.

## Que la App se reinicia automáticamente

Manejar el clouster en la aplicación. No podemos dejar que nuestra aplicación esté fuera de linea en ningún momento.

- Utilizar un gestor de procesos para reiniciar la aplicación (y Node) cuando se bloquea
- Utilizar el sistema init que proporciona su OS para reiniciar el gestor de procesos cuando se bloquea el OS

## Ejecutar un balanceador de carga

- Utilizar un sistema multinúcleo, podemos multiplicar el rendimiento de una aplicación node iniciando un clúster de proceos.
- En las aplicaciones en clúster, los procesos worker pueden bloquearse individualmente sin afectar al resto de los procesos.
- Aislamiento de errores siempre que se bloquee un proeso worker, hay que asegurarse de registrar el suceso y generar un nuevo proceso utilizando cluster.fork().
- Usar un proxy inverso que orquesta el tráfico hacia y desde los servidores y las instancias de la aplicación.

## Almacenar en caché los resultados de la solicitud

- Almacenar en cahé el resultado de las solicitudes, para que la aplicación no repita la operaci´´on de dar servicio a la misma solicitud repetidamente.
- Utilizar un servidor de almacenamiento en memoria caché como Nginx, mejora significativamnete la velocidad y el rendimiento de la aplicación.

## Utilizar un proxy inverso

- Realizar operaciones de protexión, manejo de errores, compresión, almacenamiento en chaché, servicio de archivos y equilibrio de carga, entre otros.
- Se recomienda hacer uso de Express detras de Nginx en producción.

# Usar GZIP

Instalar `npm i compression` se usará como midelware, permite comprimir las respuestas de las peticiones del servidor web.

# Loggers

Son modulos de terceros, que facilitan la configuración y el seguimiento con los logs en la aplicación. Esto nos ayuda a identificar errores, o anomalias en la ejecución.

`Historial de log refiere al registro secuancial de cada uno de los eventos que afectan un proceso particular constituyendo una evidencia del comportamiento del sistema.`

- los `Loggers` son librerias para dacilitar la impresión de un identificador único.
- Tienen la ventaja de que no necesitamos usar console.log para el registro de sucesis en el servidor, lo cual es más eficiente y persiten clasificar los mensajes por niveles de debug y enviarlos a distintos medios: file, database, email, consola, etc.

Modulos: `winston, `

- ## winston

Instalación: `npm i winston`

podemos definir dentro del `level` podemos definir cuales podemos visualizar y cuales no.
tenemos los siguientes niveles: `Silly, Debug, Verbose, Info, Warn, Error` si definimos uno dentro de `logger.level = '';` se verá todos los logs que siguen, pero no los que están antes de el.

Podemos definir 'Transportes' para crear un archivo en el que vamos manejando esos logs y se van guardando de manera aislada. Podemos crear un nivel por cada transporte que queramos

- ## Pino

Instalación: `npm i Pino`

Podemos proveer los métodos de logging `Trace, Debug, Info, Warn, Error y Fatal`, todos los métodos tienen una forma genérica de sintaxis:

        logger.method([mergingObject], [message], [...interpolationValues])
