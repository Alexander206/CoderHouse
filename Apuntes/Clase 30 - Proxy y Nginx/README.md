# Proxy

Un servidor proxy es un `intermediario` entre las conexiones de un cliente y un servidor de destino, filtrando todos los paquetes entre ambos.

Sin el proxy, la conexión entre cliente y servidor de origen a través de la web es directa.

Se utiliza para navegar por internet de forma más anónima ya que ocultas las IP, sea del cliente o del servidor de origen

![img](https://www.researchgate.net/publication/327892898/figure/fig2/AS:675164312305665@1537983124995/Difference-between-Forward-Proxy-i-Reverse-Proxy-server-Source-Vivek-Srivastav-Proxy.jpg)

## forward proxy (usuario/cliente)

-   Es un servidor proxy que se coloca entre el cliente y la web.

-   Recibe la petición del cliente para acceder a un sitio web, y la transmite al servidor del sitio, para que este no se entere de qué cliente está haciendo la petición.

-   Lo utiliza un cliente cuando quiere anonimizar su IP.

-   Es útil para mejorar la privacidad, y para evitar restricciones de contenido geográfico (contenido bloqueado en cierta región).

## reverse proxy (servidor)

-   En este caso, el servidor proxy se coloca entre la web y el servidor de origen.

-   Entonces, el que se mantiene en el anonimato es el servidor de origen. Garantiza que ningún cliente se conecte directo con él y por ende mejore su seguridad.

-   En general el cigrado SSL de un sitio web seguro se crea en el proxy (y no directamente en el servidor).

-   Además, es útil para distribuir la carga entre varios servidores web.

## Similitudes y diferencias

-   Ambos pueden trabajar juntos, ya que no se superponen en su funcionamiento.

-   Los clientes/usuarios pueden utilizar proxy directo y los servidores de origen un proxy inverso.

# Utilizar proxy inverso en backend

Existen varios beneficios por lo que, al crear un sitio web, conviene utilizar un proxy iverso:

-   `Balancear la carga:` Un solo servidor de origen, en una página con millones de visitantes diarios, no puede manejar todo el tráfico entrante. El proxy inverso puede recibir el tráfico entrante antes de que llegue al servidor de origen. Si este está sobrecargado o cae completamente, puede distribuir el tráfico a otros servidores sin afectar la funcionalidad del sitio. Es el principal uso de los servidores proxy inversos.

-   `Seguirdad mejorada:` Al ocultar el proxy inverso la IP del servidor de origen de un sitio web, se puede mantener el anonimato del mismo, aumentando considerablemente su seguridad. Al tener al proxy como intermediario, cualquier atacante que llegue va a tener una traba más para llegar al servidor de origen.

-   `Potente caching:` Podemos utilizar un proxy inverso para propósitos de aceleración de la web, almacenando en caché tanto el contenido estático como el dinámico. Esto puede reducir la carga en el servidor de origen, resultando en un sitio web más rápido.

-   `Compresión superior:` Un proxy inverso es ideal para comprimir las respuestas del servidor. Esto se utiliza mucho ya que las respuestas del servidor ocupan mucho ancho de banda, por lo que es una buena práctica comprimirlas antes de enviarlas al cliente.

-   `Cifrado SSL optimizado:` Cifrar y descifrar las solicitudes SSL/TLS para cada cliente puede ser muy dificil para el servidor de origen. Un proxy inverso puede hacer esta tarea para liberar los recursos del servidor de origen para otras tareas importantes, como servir contenido.

-   `Monitoreo y registro del tráfico:` Un proxy inverso captura cualquier petición que pase por él. Por lo tanto, podemos usarlos como un centro de control para monitorear y registrar el tráfico. Incluso si utilizamos varios servidores web para alojar todos los componentes de nuestro sitio web, el uso de un troxy inverso facilitará la supervisión de todos los datos entrantes y salientes del sitio.

# NGINX

-   Es un servidor web, orientado a eventos (Como Node) que actúa como un proxy lo que nos permite redirecionar el tráfico entrante en función del dominio de dónde vienen, hacia el proceso y puerto que nos interese.

-   Se usa para solucionar el problema que se genera al correr nuestra app Node en el puerto 80, para qye sea accesible desde una IP o dominio, y que queremos utilizar el mismo puerto con otro proceso.

-   Ya Node no es el proveedor de ficheros estaticos, sino que lo hace NGINX

## Configurar Nginx para windows

-   Para configurar Nginx hay que descargarlo del link https://nginx.org/en/download.
-   Descargar la ultima versión Mainline

### Configurar Nginx con proxy inverso

-   Se debe de cambiar el codigo del archivo nginx.conf de la carpeta conf del Nginx por el siguiente código:
-   La carpeta esta ubicada en el disco local C.

        events {
        }

        http {
            include        mine.types;
            default_type   aplication/octet-stream;

            upstream node_app {
                server 127.0.0.1:8081;
                server 127.0.0.1:8082 weigth=3;  // va a atender el triple de solicitudes que la otra instancia
            }

            server{
                listen        80;
                server_name   mginx_node;
                root          ../NginxNode/public;

                location /datos/ {
                    proxy_pass http://node_app;
                }
            }
        }

Podemos usarlo como intermediario para generar escalabilidad horizontal de los servicios que damos por node

# Comandos con Nginx:

-   `Servicios iniciados:` tasklist /fi "imagename eq nginx.exe"
-   `Apagar servicios:` ./nginx.exe -s stop
-   `Apagarlo con mas flow:` ./nginx.exe -s quit
-   `Reiniciar el server:` ./nginx.exe -s reload
-   `Reabrir logs:` ./nginx.exe -s reopen

# Desplegando un servidor sencillo con Nginx

Toca cambiar la ruta dentro del archivo de configuración de Nginx y ejecurar en pm2 los proyectos, antes de inicializar en Nginx. Hay que tener en cuenta que funciona como proxy y balanceador de carga, nos distribulle en diferentes puertos dependeindo los requerimientos del cliente.

Nginx hace entrega de los recursos estaticos para no sobrecargar el servidor.