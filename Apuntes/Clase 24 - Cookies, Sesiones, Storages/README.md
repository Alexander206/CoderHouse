# MemoryStore

- Cuando manejamos con session-memory, de forma predeterminada estaremos utilizando el almacenamiento en memoria el memoryStore
- Al reiniciar el servidor, estos datos se borran, de modo que no tienen persistencia, por eso, memorySore solo está disponible en desarrollo

se crea una carpeta de archivos en donde se almacenan los datos de session. Estos tendrán persistencia, ya que quedarán guardados en el servidor.

`npm i session-file-store`

cuando se crea usa sesion los datos se guardan en la carpeta sesions, pero las sesiones guardadas tienen el nombre de la cookie generada a la hora de acceder a la ruta del usuario.

# Redis y Redislab

Es un servidor de direccionarios remoto(Remote Dictionary Server)
Almacén de datos clave-valor en memoria de código abierto que se puede utilizar como base de datos, caché y agente de mensajes
Como todas las bases de datos, hay que hacer una instalación

Se puede hacer desde linux y windows

- Los datos de redis se almacenan en memoria del servidor, por lo que el acceso a los mismos es muy rapido.
- Tiene mucha flexibilidad en cuanto a las estructuras de datos que admite (Strings, listas, hashes, sets, entre otros)
- Para acceder a los datos de Redis, es necesario hacer comandos con SET y GET

Cliente recomendado: `https://goanother.com/`

Para usar redis con node se debe instalar con npm de la siguiente forma: `npm i redis connect-redis --save`

### RedisLaps

Es un servidor de redis para manejarlo en la nube asi parecido con Mongo Atlas, tiene una interfaz gráfica amigable