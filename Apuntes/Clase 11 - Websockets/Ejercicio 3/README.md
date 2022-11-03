# SERVIDOR CON WEBSOCKET -3

Basado en el ejercicio que vimos realizado, ahora los mensajes enviados por los clientes deberán ser almacenador en el servidor y reflejados por debajo del elemento de entrada de texto cada vez que el usuario haga un envio. La estructura de almacenamiento será un array de objetos, donde cada objeto tendra la siguiente estructura:

        {
            socketId : (El socket id del que envio el mensaje),
            mensaje : (Texto enviado)
        }

- Cada cliente que se conecte recibirá la lista de mensajes completa.
- Modificar el elemento de entrada en el cliente para que disponga de un botón de envio de mensaje.
- Cada mensaje de cliente se representaria en un renglón aparte, anteponiendo el socket id.
