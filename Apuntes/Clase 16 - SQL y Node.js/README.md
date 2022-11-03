# SQL & Node.js

- ### KNEX.JS

KENEX.JS es un generador de consultas para SQL con "Baterías incluidas" para postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle y Amazon, diseñado para ser flexible, portatil y facil de usar

- Cuenta con una interfaz basada en `callbacks` y en `promesas`
- Knex se puede utilizar como un generador de consulta SQL en Node.JS.
- Se instala desde npm
- npm i -> pg (para PostgreSQL y Amazon)
- npm i -> mysql (Para MySQL y MariaDB)
- npm i -> sqlite3 (para SQLite3)
- npm i -> mssql (Para MSSQL)

KNX.JS página y documentación en -> http://www.knexjs.org/

Comandos para KNEX.JS se recomienda la página -> https://devhints.io/knex

Para instalar la dependencia KNEX con MySQL es con el comando `npm i knex mysql`

en el package.json se crea un comando `"type": "module"` que nos ayuda a trabajar con módulos

### `Solución al error de los permisos`: https://www.youtube.com/watch?v=flIY94N0dBA

# SQLite

Es una biblioteca en el lenguaje C, que implementa un motor de base de datos SQL pequeño, rapido, autonomo, de alta confiabilidad y con todas las funciones. El formato de archivo de SQLite es estable, multiplataforma y compatible con versiones anteriores. La ultima version es la version 3. Es de dominio publico.

para trabajar con SQLite, tienes que instalar la dependencia `npm i sqlite3`
