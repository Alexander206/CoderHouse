# Webpack

Es un empaquetador de módulos que genera un archivo único con todos los módulos que necesita la aplicación para suncionar. Esto es una herramienta de build muy versátil.

Cada vez que se hagan cambios en el proyecto, se requiere actualizar el archivo generado por webpack

- Generar fragmentos de Js que realmente necesita cada pagina haciendola mas rapida
- Disponer de varios loaders para importar y empaquetar tambien otros recursos(CSS, templates, ...) o otros lenguajes como (ES6 con babel, TypeScript, SaSS, ...)
- Utilizar plugins que permiten hacer otras tareas importantes como minificar o ofuscar el código

instalar webpack

`npm i webpack`

script en package.json

`"build": "webpack archivos --mode=production"`

hay un archivo llamado `webpack.config.js` para aplicar configuraciones al webpack
