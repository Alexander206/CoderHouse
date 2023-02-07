## KOA

Se modifica para poder adaptarlo con KOA

## Configuración

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
