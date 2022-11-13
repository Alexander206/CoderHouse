# Desafio 11 Mocks y Normalización

![Image text](https://media.makeameme.org/created/mock-calls.jpg)

# Instalación del proyecto

Crear un archivo .dev con las siguientes variables de entorno:

    NODE_PORT=3000
    NODE_ENV=local
    BASE_HOST=http://localhost:3000

Instalar dependencias de npm

`npm i`

# Consigna 1

Sobre el desafío entregable de la clase 16 (sql y node: nuestra primera base de datos), crear una vista en forma de tabla que consuma desde la ruta ‘/api/productos test’ del servidor una lista con 5 productos generados al azar utilizando Faker.js como generador de información aleatoria de test (en lugar de tomarse desde la base de datos). Elegir apropiadamente los temas para conformar el objeto ‘producto’ (nombre, precio y foto).

# Consigna 2
Ahora, vamos a reformar el formato de los mensajes y la forma de comunicación del chat (centro de mensajes)

    {
      author: {
        id:'mail del usuario',
        nombre: 'nombre del usuario',
        apellido:'apellido del usuario',
        edad:'edad del usuario',
        alias:'alias del usuario',
        avatar:'url avatar (foto, logo) del usuario',
     },
      text:'mensaje del usuario'
    }
