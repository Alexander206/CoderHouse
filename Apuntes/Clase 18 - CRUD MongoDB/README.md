# MongoDB

Recordemos que el lenguaje usado es JAvascript, tambien el modelo de documento es no relacional y tambien es muy parecido y compatible con los archivos JSON. Es gratuito.

Para crear una base de datos de manera local con `MongoD` se hace lo siguiente:

    1. Se crea un carpeta en dodne vamos a crear nuestra base de datos.

    2. Se escribe el comando mongod --dbpath "Ruta de la carpeta"

    3. En otra terminal se hace el comando `mongosh` para poder ver las bases de datos disponibles

- ### ADVERTENCIA, La carpeta creada debe comprimirse y enviarse para los efectos del curso.

Importante tambien ver que cuando hacemos `.findOne` nos devolvera un objeto y cuando hacemos un find nos devolera un array con un objeto en su interior

- # Usuarios y permisos

es posible crear usuarios y asignarles acceso mediante rolas.

- Usuario lector: tendrá `acceso de lectura` a la base de datos.
- Usuario escritor: tendra `acceso de lectura y escritura a la base de datos` 