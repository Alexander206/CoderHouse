# ¿ Qué es un compilador?

Es un programa que traduce código escrito en un lenguaje de programación a otro lenguaje. En este tipo de traductor el leguaje fuente es generalmente un lenguaje de alto nivel y el objeto un lenguaje de bajo nivel, como assembly o código máquina por ejemplo.

# ¿ Qué es un transpilador?

Es un tipo especial de copilador que traduce de un lenguaje fuente a otro fuente, tambien de un nivel de abstracción parecido.

La transpilación es un caso particular de la compilación

algunos ejemplos de transpiladores son:

- Babel
- Typescript (No es un transpilador pero tiene una funcionalidad interna que lo hace)

## Babel

Babel es un transpilador que nos permite transformar codigo JS de ultima generación a cualquier navegador o version de node, Babel funciona con plugins para especificar que transformación vamos a hacer, por ejemplo con el plugin `babel-plugin-transform-es2015-arrow-functions` podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales.

página: https://babeljs.io/

Instalar babel como una dependencia de desarrollo por lo general

`npm i @babel/core @babel/cli @babel/preset-env`

- core: comprende todos los procesos de transpilación
- cli: interfaz para babel
- present-env: plugin

crear un archivo de babel que almacena la configuración de babel, es un objeto.

`.babelrc`

Luego en el package.json hay que crear un script que nos ayude en la creación del archivo transpilado, el comando es:

`"build": "babel ./index.js -o ./output.js"`
