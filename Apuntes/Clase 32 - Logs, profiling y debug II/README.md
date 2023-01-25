# Artillery

Es un módulo de Node js para realizar test de manera muy potente y facil. Los test que se realizarán a los servidores es sobre la carga.

Cuanta con un conjunto de herramientas para test de performance que se usa para enviar aplicaciones escalables que se mantengan eficaces y resistentes bajo cargas elevadas.

Se pueden hacer dos tipos de pruebas:

- `Pruebas de carga (Estrés)`
- `Pruebas funcionales`

`[Solo puede ser utilizado en sistemas backend]`

# Usando Artillery

Instalamos con: `npm i -g artillery`

Iniciamos el servidor, puede ser en modo fork o en modo cluster.

Para hacer un test de carga de estres se hace el siguiente comando en otra terminal:

`artillery quick --count 50 -n 40 http://localhost:3000\?max\=100000 > result_fork.txt`

        --count: Cantidad de usuarios
        -n: Cantidad de peticiones
        > Nombre del archivo en el que se guarda el resultado

Vamos a comparar el archivo generado, con otro archivo pero en una ejecución cluster

## Conclusiones

podemos ver que la medida de respuesta es mas rapida en el cluster.

# Profiling

Es el analisis de rendimiento. Es la investigación del comportamiento de un programa usando información reunida desde el análisisdinámico del mismo.

El objetivo es averiguar el tiempo dedicado a la ejecución de diferentes partes del programa para detectar los puntos problematicos y las áreas donde sea posible llevar a cabo una optimización del rendimiento (ya sea en velocidad o en consumo de recursos).

Los navegadores mas modernos y actualizados, tienen un built-in profiler integrado en las DevTools, esta registra la información sobre las funciones y cuánto tiempo lleva ejecutarlas en un archivo de registro.

Luego, el navegador analiza el archivo de log, brindandonos información legible sobre lo que está sucediendo

`Node` tambien tiene un built-in, pero lo hace con un archivo de logs, necesitando una herramienta externa para analizar esta información.

para ejecutar el profiling hay que arrancar nuestro servicio con el siguiente comando: `node --prof app.js` y aqui podemos realizar las pruebas haciendo peticiones y monitoreandolas con `Artillely`

para poder decodificar la información del archivo generado `nombre-archivo.log`

        node --prof-process nombre-archivo.log > result_nombre-archivo.txt

Ahí podemos encontrar la información del proceso dentro de la ejecución del programa. Para este caso, podemos evidenciar que el proceso bloqueante no es tan recomendable, como la no bloqueante.

# Node inspect

Otra forma de hacer lo ya mensionado antes, pero de una forma mas facil.

- Ejecutar el servidor con el comando `node --inspect server.js`

- En el navegador Google Chrome, poemos `chrome://inspect`

- Abrimos el DevTools.

Ahí podemos poner a 'Grabar' el proceso y se hace la misma acción de estar haciendo peticiones para poder ver en que partes del cósigo enceuntra un rendimiento mayor o menor.

# Autocannon y 0x

- Autocannon -> Es una dependencia de Node (Similar a Artillery) que nos ayuda a realizar los test de carga. Es una herramienta de evaluación comparativa http

- 0x -> Es una dependencia que perfila y genera un gráfico de flama interactivo para un proceso Node en uns solo comando.

## Realizando test de carga

1. Crear un servidor. Vamos a usar el mismo ejercicio de Profiling.
2. Generamos rutas de registro de usuario, login bloqueante y no bloqueante
3. Instalamos Autocannon y 0x: autocannon en el proyecto y 0x de forma global.

Despues de instalar 0x debemos realizar algunos cambios en la configuración del package.json. debemos agregar un nuevo script con:

        0x app.js

        node benchmark.js

4. Al final se ejecuta el `npm test` para hacer un test del rendimiento.


