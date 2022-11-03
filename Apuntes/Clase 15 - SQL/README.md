# Bases de datos:

- La base de datos es un `repositorio persistente` que nos permite almacenar gran número de información de una forma `organizada` para `futuras consultas`

- Un `servidor de bases de datos` es un contenedor que puede alojar un gran número de bases de datos y ofrece los servicios para conectarlas a los clientes.

- Mediente los clientes podemos interactuar con las bases de datos y estos pueden estar implementados en modo consola, en modo aplicación graficas y demas.

## Tipos de clientes de bases de datos

- `Cliente CLI` (Command Line Interface): Es un cliente que interactua con la base de datos `mediante` el uso de una `consola`

- `Cliente GUI` (Graphical user interface): Es un clinete que interactua con la base de datos `mediante` el uso de una `aplicación gráfica`

- `Cliente de aplicación` Es un cliente que está implementado `dentro` de nuestra aplicación de `backend` y sirve para que nuestro programa se conecte e interactue con la base de datos.

# SQL

La sigla `sql` corresponde a la expresión inglesa `Structured Query Language` (lenguaje de consulta estructurado). Es un tipo de lenguaje vinculado con la `géstion de bases de datos de carácter relacional`, que permite especificación de distintas clases de operaciones entre estas

SQL, utiliza el algebra y los calculos relaciones para hacer consultas mas facilmente.

## ¿Qué podemos hacer con SQL?

- Asignar permisos a tablas, procedimientos y vistas
- Ejecutar consultas
- Recuperar datos
- Insertar / Actualizar / Borrar registros
- Crear base de datos
- Crear procedimientos almacenados
- Crear nuevas tablas en la base de datos
- Crear vistas

## MySQL & MariaDB

- `MySQL` es un sisyema de gestión de bases de datos relacionales desarrollado bajo licencia dual: Licencia pública general/ Licencia comercial por Oracle Corporation y está considerada como la `base de datos de codigo abierto mas popular del mundo `

- `MariaDB` Es un sistema de gestipon de bases de datos derivado de MySQL con licencia GPL (General Public License)

- `MySQL y MariaDB` son compatibles entre si a nivel funcinal.

## Instalación del servidor y cliente de base de datos MySQL / MariaDB

Servidor MariaDB -> XAMPP: Web oficial
https://www.apachefriends.org/es/

Se puede usar XAMPP desde el cliente apache y ahi podremos configurar y editar mediante un interfaz gráfica, pero si quieremos iniciar el cliente desde la terminal, tendremos que acceder a la terminal como administrador y llegar a esta ruta: `C:\xampp\mysql\bin` y ejecutar el siguiete comando: `mysql.exe -u root`

Página recomendada para saber de comandos de SQL https://devhints.io/mysql

Se recomienda instalar `MySQL Workbench` para crear scripts de desarrollo a la hora de hacer bases de datos https://dev.mysql.com/downloads/workbench/

## ¿Cómo gestionar una Base de Datos?

Basado con MySQL Workbench

comando para crear y usar la base de datos:

    CREATE DATABASE nombre-base-de-datos;

    USE DATABASE nombre-base-de-datos1;

Para agregar contenido a las filas se hace mediante el siguiente comando:

    INSERT INTO nombre-BaseDatos (nombre, propiedad, ...) VALUES ( "valor", 23, ...);

Para `VER` 👀 el contenido de la base de datos se usa:

    SELECT * FROM usuarios;

Ejemplo 2: Con condicionales 🧐

    SELECT nombre, apellido FROM usuarios WHERE id = 2;

Para borrar contenido ❌:

    DELETE FROM tabla WHERE condición

Para actualizar el contenido ⏫:

    UPDATE tabla SET atributo = "nuevo valor" WHERE condicion;