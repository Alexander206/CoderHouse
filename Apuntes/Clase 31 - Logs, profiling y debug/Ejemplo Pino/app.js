import express from 'express';
import http from 'http';
import pino from 'pino'; // Libreria para manejar logs

let logger = pino();

logger.level = 'info';

// Cuando loggeemos estos datos, el level, se verá representado por un numero [Eso lo hace menos intuitivo de ver los logs]

logger.info('Hola Mundo'); //Formas diferentes de concatenar y preseentar los logs con Pino
logger.warn('La respuesta es %d', 42);
logger.error({ a: 42 }, 'Hola bundo');
logger.fatal('La respuesta es %d', 42);
logger.debug({ a: 42 }, 'Hola bundo');

const child = logger.child({ flow: 'Contexto' }); // Crea un contexto para realizar los logs
child.info('Se agrego un nuevo elemento'); // Ejecuta el log sobre ese contexto

const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`);
});

function saludo(max = 1000) {
  const text = 'Hola que tal\n \n';
  return text.repeat(max);
}
