# Tercera entrega del proyecto final

Es un servidor web de un eCommerce basado en Node.js y el módulo de Express. Este proyecto implementa una interfaz backend API con la arquitectura de software RESTful construyendo los verbos CRUD. Se maneja 2 rutas diferentes: `'/productos'` y `'/carrito'`, ademas cuenta con funcionalidades diferentes para usuarios y administradores

## ACLARACIÓN

    Se utilizó como recurso un proyecto real de un sitio web que se está desarrollando La
    empresa se llama Rimeliny y autorizo el uso de sus recursos para desarrollarlo mediante
    se desarrolle el curso de Backend

## Instalación del proyecto:

- Crear un archivo `.env` y agregar las siguientes variables de entorno:

        NODE_PORT=8080

        NODE_ENV=local

- Instalar dependencias con `npm i`

- Para utilizar postman se recomienda usar el archivo: `Primera Entrega.postman_collection.json`

## Variable de admiistrador

La variable se encuentra en `./routers/productos.js` y se llama admin, esta por defecto en `true` y tiene habilitada las funcionalidades de administrador en el servidor.

![](public/assets/img/proyecto.png)
