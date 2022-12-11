# Argumentos de la linea de comandos

Son cadenas de texto que se utilizan para pasar información adicional a un programa, cuando se ejecuta una aplicación a travez del interfaz de linea de comandos (CLI) de un sistema operativo

Se suele incluir información que se utilkiza para establecer la configuración o los valores de propiedad de una aplicación. En la mayoria de los casos, los argumentos se pasan despúes del nombre del programa en su indicador. Un ejemplo de la sintaxis de los argumentos de la línea de comandos de ve así:

`$ [runtime] [script_name] [argument-1 argument-2 argument-3 ...argument-n]`

El tiemmpo de ejecución `runtime` en este caso es Node.

# Objeto Global PROCESS

process.argv[0] es un array -> Ruta del sistema de archivos que apunta al Node ejecutable.
process.argv[1] es el nombre de archivo Js que se está ejecutando.
process.argv[2] es el nombre real del primer argumento que paso el usuario

ejemplo de sintaxis:

`node app.js -p 3000 -e qa`

# MINIMIST

Otra forma de recuperar argumentos de línea de cpmando en una plicación Node es usando el módulo minimist. Nos permite analizar un array de string (usualmente obtenido de los argumentos ingresados por línea de comando) y lo transformará en un objeto más fácil de usar, ya que nos permite acceder a los elementos mediante su nombre.

intalación: `npm install minimist`
requerir: `const parseArgs = requiere('minimist');`

# yargs

Es otro modulo que nos ayudará a analizazr los argumentos de la línea de comandos pasados a los programas de Node es el módulo de yargs. Inicialmente funciona igual que minimist, con algunas modificaciones en su sintaxis. Sin embargo, esta libreria posee muchisimas más funcionalidades.

instalación: `npm i yargs`
uso: `const yargs = require('yargs/yargs')(process.argv.slice(2))`
uso: `const args = yargs.argv`

# Variables de entorno

con el objeto `process.env` podemos agregarle un nombre a un valor. Normalmente, nuestras aplicaciónes requieren que se establezcan muchas variables de entorno para que funcionen. Al confiar en configuraciones externas, nuestra aplicación se puede implementar fácilmente en diferentes entornos.

# dotenv

instalación: `npm i dotenv` crea un archivo .env en donde se agregan las variables de entorno
uso: `import dotenv from 'dotenv/config.js'`
