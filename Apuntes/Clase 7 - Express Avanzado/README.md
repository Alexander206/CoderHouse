# Servidores web

## npm Package.json

Realizar dependencias de producción, de desarrollo y de prueba, por lo general se usan: `dependencies` `devDependencies` y `test`

El siguiente Script ayudará a ejecutar un entorno de desarrollo, desde `nodemon` y junto con otra dependencia llamada `dotenv`

Script : `"dev": "NODE_ENV=Local ./node_modules/nodemon/bin/nodemon.js --exec 'node -r dotenv/config' ./index.js"`

Nueva biblioteca usada --> `Express-useragent` Nos permite extraer datos del cliente como los siguientes: Hay que usarla en el callback en el parametro req (request) de cada endpoint

{

"isMobile":false,

"isDesktop":true,

"isBot":false,

.....

"browser":"Chrome",

"version":"17.0.963.79",

"os":"Windows 7",

"platform":"Microsoft Windows",

"source":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79..."

}

# Protocolo HTTP

Esto nos permite la comunicación entre un cliente y un servidor por medio de un `protocolo de transferencia de hipertexto`, el protoolo se basa en un esquema de `solicitud - respuesta` Estos protocolos funcionan a traves de el protocolo HTTP, saber cual es el recurso que estamos solicitando (Crear un usuario, enviar una imagen, editar un usuario, etc..) SI el servidor maneja otros protocolos, no será posible la comunicación.

## Códigos de estado

Los codigos de estado nos ayudan a saber que tipo de estado esta la conección y se clasifican de la siguiente manera:

-> 1xx (Informativ): La peticion fue recibida y continua su procesamiento.

-> 2xx (Éxito): La petición fue recibida con éxito, comprendida y procesada.

-> 3xx (Redirección): Más acciones son requeridas para completar la petición.

-> 4xx (Error del cliente): La petición tiene algun error. no pudo ser procesada.

-> 5xx (Error del servidor): El servidor falló al intentar procesar una peticón aparentemente válida.

Tambien podemos crear nuestros propios codigos de estado, para comprender mejor la conección.

los mas comunes son los: 200, 400, 404, 500.

# API & REST

## ¿Qué es una API?

Es una `interfaz de programación de aplicaciones`, bastante robusta y estructurada que permite comunicarse con otros sistemas. Es nesesario que una API tenga una interfaz simple, tenga reglas y brinden servicios o productos sin necesidad de que el consumidor sepa como están implementados. Ejemplos:

-> Google Maps

-> Twilio

-> AWS

-> YouTube

-> Mercado Pago

-> Mandrill

-> Cloudinary

-> IMDb

Se debe mantener el enfoque en los `Recursos` y cada recurso deberia tener sus propios `identificadores` y `peticiones ` en `HTTP` como lo son `POST` `GET` `PUT` `DELETE`

| RECURSO      | POST            | GET            | PUT                    | DELETE              |
| ------------ | --------------- | -------------- | ---------------------- | ------------------- |
| /usuario     | Crea(201)       | Obtener(200)   | ActualizarTodos❌(204) | BorrarTodos ❌(204) |
| /usuario/001 | No permitido ❌ | ObtenerId(200) | ActualizarId(204)      | BorrarId (204)      |

Estos son los verbos básicos que nos permite hacer el `CRUD`

`C`reate `R`ead `U`pdate `D`elete

### RECURSOS

Los recursos se nombran como sustantivos: `usuarios`, `productos`, `proveedores`, `estudiantes`

## ¿Qué es REST?

Es una `arquitectura de software` que impone condiciones y recomendaciones para standarizar el funcionamiento de APIs. Por lo general se standariza desde el enviar datos hasta el recibirlos, las API que siguen el estilo arquitectónico de REST se llaman `API REST` y los servicios web que implementen arquitectura RES se llaman `API RESTful`

## Principios REST

#### Interfaz uniforme:

Cuando nosotros definimos una solicitud y respuesta, los datos deberian ser del mismo tipo.

#### Tecnología sin estado:

Las solicitudes realizadas no deberian tener un metodo de comunicación que complete solicitudes sin necesitar requerimientos previos.

#### Sistema por capas:

Debe funcionar como una caja negra, no es necesario que el cliente sepa de la forma en la que se realiza el proecesamiento, simplemente recibe su respuesta y ya.

#### Almacenamiento en caché:

Soportar el almacenamiento de respuestas en memoria caché para mejorar la eficiencia.

#### Código bajo demanda:

Los servidores pueden extender o personalizar temporalmente la funcionalidad del cliente transfiriendole codigo de la programación backend. Este concepto fue mejorado con los hipermedios.

## Formatos de comunicación de datos XML y JSON

Son datos que se usan de manera standar para transmitir datos, en un principio se usaba XML y hoy dia es mas usado el formato JSON.

# Postman

Es una aplicación que nos permite realizar solicitudes HTTP y poder definir métodos, parámetros, cabeceras (header) con tipos de datos, en el body enviamos datos que segurmante se van a guardar en nuestro servidor API (raw -> luego tipo de dato, por lo general es JSON)

otras herramientas son:

-> `Pre-request script` que nos ayuda a hacer condiciones antes de la solicitud

-> `Test` que nos ayuda a hacer cosas despues de la solicitud

# ¡¡IMPORTANTE!!

Hay dos configuraciones importantes para que los elementos de query y body los trnasforme a json

app.use(express.json())

app.use(express.urlencoded({ extended:true }))
