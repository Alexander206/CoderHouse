# Desafio 19 Arquitectura por capas

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

Modificar la capa de persistencia incorporando los conceptos de Factory, DAO, y DTO.

➔ Los DAOs deben presentar la misma interfaz hacia la lógica de negocio de nuestro servidor.
➔ El DAO seleccionado (por un parámetro en línea de comandos como lo hicimos anteriormente) será devuelto por una Factory para que la capa de negocio opere con el.
➔ Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.
➔ Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.
➔ Implementar el patrón Repository para la persistencia de productos y mensajes.
