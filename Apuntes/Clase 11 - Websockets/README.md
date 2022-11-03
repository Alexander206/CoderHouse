# Websockets

Es un protocolo de red basado en `TCP` que se establece cómo debe de intercambiarse datos entre redes bidireccionales. Permite acceder a información y comunicación directa y en tiempo real, ya no esperamos a que el cliente interactue con el servidor, para que funcione, sino, que es bidireccional.

Antes de crear la conexion tiene que hacer un protocolo como de identificación o de autenticación llamado handshake "apreton de manos"

¿Para qué se utiliza el websocket?

- Para hacer conexiones de forma rapida. Por ejemplo: `Chats asistencia técnica, tickers de noticias, juegos en tiempo real, transmisiones en directo`
- Disminuir el tiempo de latencia en la conexión.
- No es un sustituto de HTTP, pero sirve para aplicaciones web que necesiten la información en tiempo real.

## socket.io

Es una biblioteca de javaScript que permite hacer conecciones de tipo websotkect, nos da algunas ventajas:

- Transmisión a múltiples sockets
- Fiabilidad
- Soporte de reconexión automática
- Detección de desconexión
- Soporte binario -> ArrayBuffer y Blob en el navegador --> ArrayBuffer y Buffer en Node.js

### Página de Socket.io

https://socket.io/
