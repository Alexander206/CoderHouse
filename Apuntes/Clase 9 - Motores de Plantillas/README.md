# Motores de plantillas

Un motor de plantilla es un algoritmo que leer un archivo de texto (Plantilla) que contiene la presentación `ya preparada de un lenguaje Pseudo HTML` e inserta en el la información dinámica y está le ordena al controlador que represente una vista con esta información.

- Nos permite separar la lógica del cliente y el servidor.
- Permite tener equipos de frontend y backend.
- Código reutilizable
- Código mas facil de mantener y comprender.

## vista controlador

En programación web existe un patrón de diseño llamado MVC o `Modelo vista controlador` separando los datos de su presentación, por lo general se separan entre el programador web y el diseñador web.

las `plantillas` (templates) son una aproximación más para resolver este problema.

`Cliente` --> `Controlador` --> `Modelo` --> `Controlador` --> `Vista` --> `Cliente`

## Handlebars

Es un motor de plantillas que tienen sus propios lenguaje simple y permite generar HTML u otros formatos de texto.

- Es necesario importar un script en el html y usar una notación especifica.

        const text = `<h1>Hola {{nombre}}, te damos la bienvenida</h1> <h2> Te regalamos {{porcentaje}} % para tu próxima compra`

# Crear un motor de plantillas custom para express

- Utilizamos el metodo `app.engine('ext', callback)` ext es la extención del archivo usado en el callback
- El método `app.set('views', path)` especifica la carpeta de plantillas.
- El método `app.set('view engine', 'nombre')` registra el motor de plantillas.
- Hay que renderizar desde el objeto respuesta, en el endpoind que lo requiera `res.render('plantilla', data)`

Por lo general se crea una carpeta llamada layouts la cual tiene los archivos de plantillas en su interior con la extención de archivo `handlebars`