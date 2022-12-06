# Autorización y autenticación

Es el medio por el cual identificamos un usuario y asi poder asegurar su identidad. Existen diferentes metodos para probar la autenticación, siendo contraseñas el más conocido y utilizado.

1. Definir los recursos a los que el sistema habilita al usuario cuando está autenticado. (Roles, Privacidad, Nivel de acceso)
2. Por lo general se habilita acceso a usuarios casuales, clientes inscritos y administradores. Dependiendo de la complejidad que tenga el sistema, nos podemos apoyar en el Midleware

Autenticación: Verifica la identidad del usuario.
Autorización: Verifica los permisos del rol

## Métodos de autenticación:

-   `Usuario y contraseñas:` Es el método tradicional más utilizado, donde el usuario ingresa username o email y password para autenticarse.
-   `Sin contraseña (passwordless):` Consiste en que cada vez que queramos iniciar sesión a un recurso, se nos enviará al email un enlace que nos permitirá acceder sin necesidad de contraseña.
-   `Por redes sociales:` Se usan directamente los datos de la red social para hcer el inicio de sesión.
-   `Datos biomédicos:` Autentica usuarios mediante hardware que identifique cualidades fisicas: huellas digitales, retina, etc.
-   `JWT(JSON Web Token):` Este método open source permite la transmisión segura de datos entre las distintas partes. Por medio de llaves publicas y privadas.
-   `OAuth 2.0:` Autenticaciones por medio de una API. complejizando el proceso de eutenticación y los proveee u tercero

## Passport

Es un midellware de terceros que se encarga de realizar autenticaciones de NodeJS
Maneja diferentes tipos de autenticación

Strategy (tipos de autenticación) disponibles:

-   `Passpor-localt:` para autenticación de usuarios mediante nombre de usuario y contraseña
-   `Passport-openid:` para autenticación mediante Openld(Estandar abierto para la autenticación federada)
-   `Passport- oauth:` para autenticación mediante API de otros proveedores como de redes sociales.

## passport local

https://www.passportjs.org/packages/passport-local/
