# Clusters y escalabilidad

## ¿Qué es Cluster?

Cuando hablamos de cluster nos referimos al uso de subprocesos que permite aprovechar la capacidad del procesador del servidor donde se ejecute la aplicación.

nos permite utilizar en su maxima capacidad un proesador multihilo

## ¿Cómo funciona?

Node nos proveee un nodulo llamado cluster para hacer uso del mismo, y nos permite crear facilmente procesos hijo.

Proceso poadre -> `Master`
Proceso hijo -> `Worker`

Similar a lo que vimos con `Fork` podemos crear procesos para evitar que el servidor se sature, ademas si algun proceso se mure, podriamos ahcer un algoritmo que permite crear un nuevo proceso hijo para sustituir el que se destruyo

## ¿Qué es forever?

Podemos arrancar un programa logrando tener la terminal libre para seguir ejecutando comandos y tambien pidemos programarlo para que el proceso se re inicie si hay una caida.

`npm i -g forever`

## nodemon vs forever

nodemon solo se puede usar en desarrollo y no se reinicia si hay un fallo del mismo
forever si se puede usar en producción y se reinicia ante los fallos del servicio

Hay que instalar forever de manera global.

## Comandos mas usados de Forever

-   forever list
-   forever start
-   forever stop
-   forever stopall
-   forever --help

En windows hay que habilitar el uso de scripts

# PM2

Es un gestor de procesos, es decir, un programa que controla la ejecución de otro proceso. Permite chequear si el proceso se está ejecutando, reiniciar el servidor si este se detiene por alguna razón, gestionar los logs, etc.

ayuda a que las aplicaciones de Node se puedan ejecutasr como cluster. MP2 nos ayuda a despreocuparnos de cluster y el mismo se encarga de crear un número dado de worker processes para ejecutar la aplicación

# ¿Cómo usarlo?

`npm i -g pm2`

para iniciar la ejecución de forma generica con el comando `pm2 start app.js`

podemos darle un nombre de servicio con `pm2 start app.js --name="Server1" --watch -- 8080`

tiene 2 modos: `cluster` `fork`

## comandos:

-   `pm2 stop`
-   `pm2 restart`
-   `pm2 delete`
-   `pm2 describe <id|app_name>`
-   `pm2 monit`
-   `pm2 --hept`
