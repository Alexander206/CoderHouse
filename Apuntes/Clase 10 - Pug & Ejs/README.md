# Express generator

Es una herramienta que ayuda a crear un proyecto mas facil y mas rapido, ya crea archivos estáticos, routers, vistas por motores de plantillas.

se instala con el siguiente comando `npm install express-generator -g` y se instala de forma global como lo dice ya el comando.

Para crear el proyecto con la vista en handlebars se usa al siguiente comando: `express --view=hbs nombreCarpeta`

# Handlebars, PUG y Ejs

Son basicamente otros motores de plantillas que se caracteriza por tener otra sintaxis en HTML y formas diferentes de escribir las variables o datos desde el servidor.

# Pug

Es un motor de plantillas que nos permite utilizar archivos estáticos como plantillas, enviando valores para luego ser remplazados por variables dentro de las mismas.

instalar pug en con `npm install pug`
colocar esta linea de codigo en el index.js `app.set('view engine', 'pug')`

- Es facil de trabajar e implementar con express.

## Pug: sintaxis

    html
          head
               title= title
               link(rel='stylesheet', href='/stylesheets/style.css')
           body
               block content

tambien podemos introoducir controles de flujo como los `if`

# EJs

Al igual que las anteriores, tambien es un motor de plantillas para enviar desde el servidor, su sintaxis es un poco mas parecida a PHP, con etiquetas HTML y identificadores para colocar variables y datos.

## EJs: sintaxis

    