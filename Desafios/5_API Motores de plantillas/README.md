# Desafio 5 Utilización de motores de plantillas

## ACLARACIÓN

    Se utilizó como recurso un proyecto real de un sitio web que se está desarrollando La
    empresa se llama Rimeliny y autorizo el uso de sus recursos para desarrollarlo mediante
    se desarrolle el curso de Backend

## SE USO EL MOTOR DE PLANTILLAS Ejs

Se selecciono Ejs

### Producto de prueba

    nombre : Zapato mujer

    Presio : 160.000

    URL Imagen : https://cdn0.iconfinder.com/data/icons/women-shoes-line-color-pinky-fashion/512/Platform_pump-512.png

# Instalación del proyecto

Crear un archivo .dev con las siguientes variables de entorno:

    NODE_PORT=3000
    NODE_ENV=local
    BASE_HOST=http://localhost:3000

Instalar dependencias de npm

`npm i`

Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:

| Rutas                 | Acción                                                         |
| --------------------- | -------------------------------------------------------------- |
| GET '/api/productos'  | devuelve todos los productos.                                  |
| POST '/api/productos' | recibe y agrega un producto, y lo devuelve con su id asignado. |

Cada producto estará representado por un objeto con el siguiente formato:

    {

        title: (nombre del producto),

        precios: (precios),

        thumbnail: (url al logo o foto del producto),

    }

Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.

Para el caso de que un producto no exista, se devolverá el objeto:

`{ error : 'producto no encontrado' }`

- Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
- Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.
- Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.

## Aspectos a incluir en el entregable:

Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)

En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.

## Sugerencias:

Utilizar iconfinder (https://www.iconfinder.com/free_icons) para obtener la url de las imágenes de los productos (click derecho sobre la imagen -> copiar dirección de la imagen)
