# Cookies, sesiones y Storages

son contenidos que pueden ser almacenados en el navegador del cliente, por lo general s guardan datos no sendibles, como pueden ser la fecha, algunos datos de usuario o cosas por el estilo. Se crean a travez de un servidor y se pueden validar para saber si son modificadas por terceros para que no influyan dentro del backend, tambien podremos crear cookies desde el front para ser validados y procesados por el backend

`npm i cookie-parser`

# Session

Es un paquete de node, el cual permite que una variable sea accesible desde cualquier lugar del sitio. Se almacena del lado del servidor.

- La información se almacena del lado del servidor
- Del lado del cliente se crea un identificador unico para poder acceder a la información desde el navegador
- Los datos almacenados en `session` se borran al cerrar la ventana del navegador
- se utiliza para guardar los datos del usuario al iniciar sesión.

dependencia recomendada:

`npm i express-session `

