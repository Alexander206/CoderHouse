# Desafio 14 Objeto process

<img src="https://desarrolloweb.com/media/395/variables-de-entorno-nodejs.jpg" alt="" width="300">

# Instalación del proyecto

Crear un archivo .dev con las siguientes variables de entorno:

    Ejemplo:
    CLAVE=VALOR

    PORT = 8080
    NODE_ENV = local
    BASE_HOST = http://localhost:8080
    MONGODB_URL = 'url'
    SECRET_SESSION = 'clave'

    Configuraciónes de MariaDB:

    MARIADB_CLIENT = 'mysql'
    MARIADB_HOST = 'localhost'
    MARIADB_PORT = 3306
    MARIADB_USER = 'root'
    MARIADB_PASSWORD = ''
    MARIADB_DATABASE = 'productosdb'

Instalar dependencias de npm

`npm i`

# Consigna

Tomando con base el proyecto que vamos realizando, agregar un parámetro más en la ruta de comando que permita ejecutar al servidor en modo fork o cluster. Dicho parámetro será 'FORK' en el primer caso y 'CLUSTER' en el segundo, y de no pasarlo, el servidor iniciará en modo fork.

- Agregar en la vista info, el número de procesadores presentes en el servidor.

- Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el número de procesos tomados por node.

- Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su correcta operación. Listar los procesos por Forever y por sistema operativo.

- Ejecutar el servidor (con los parámetros adecuados: modo FORK) utilizando PM2 en sus modos modo fork y cluster. Listar los procesos por PM2 y por sistema operativo.

- Tanto en Forever como en PM2 permitir el modo escucha, para que la actualización del código del servidor se vea reflejado inmediatamente en todos los procesos.

- Hacer pruebas de finalización de procesos fork y cluster en los casos que corresponda.
