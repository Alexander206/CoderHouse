# Desafio 8 Bases de datos

![Image text](https://www.inecol.mx/inecol/images/ciencia_hoy/base_datos/base_1346px.jpg)

# Instalación del proyecto

Crear un archivo .dev con las siguientes variables de entorno:

    NODE_PORT=3000
    NODE_ENV=local
    BASE_HOST=http://localhost:3000

Instalar dependencias de npm

`npm i`

# Consigna 1

Tomando como base las clases Contenedor en memoria y en archivos, desarrollar un nuevo contenedor con idénticos métodos pero que funcione sobre bases de datos, utilizando Knex para la conexión. Esta clase debe recibir en su constructor el objeto de configuración de Knex y el nombre de la tabla sobre la cual trabajará. Luego, modificar el desafío entregable de la clase 11”Chat con Websocket”, y:

- cambiar la persistencia de los mensajes de filesystem a base de datos SQLite3.
- cambiar la persistencia de los productos de memoria a base de datos MariaDB.

  Desarrollar también un script que utilizando knex cree las tablas necesarias para la persistencia en cuestión (tabla mensajes en sqlite3 y tabla productos en mariaDb).

## Aspectos a incluir en el entregable:

Definir una carpeta DB para almacenar la base datos SQLite3 llamada ecommerce
