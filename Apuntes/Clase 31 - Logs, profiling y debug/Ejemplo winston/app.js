import express from 'express';
import http from 'http';
import winston from 'winston'; // Libreria para manejar logs

const logger = winston.createLogger({
  // Instancia de winston | Tipos de logs --> Silly, Debug, Verbose, Info, Warn, Error
  level: 'debug', // Consifuración del logger
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'output.log', level: 'info' }),
  ],
});

logger.log('silly', '127.0.0.1 - log silly'); // Forma 1 de loggear
logger.silly('127.0.0.1 - log silly'); // Forma 2 de loggear

logger.log('debug', '127.0.0.1 - log debug');
logger.debug('127.0.0.1 - log debug');

logger.log('verbose', '127.0.0.1 - log verbose');
logger.verbose('127.0.0.1 - log verbose');

logger.log('info', '127.0.0.1 - log info');
logger.info('127.0.0.1 - log info');

logger.log('warn', '127.0.0.1 - log warn');
logger.warn('127.0.0.1 - log warn');

logger.log('error', '127.0.0.1 - log error');
logger.error('127.0.0.1 - log error');

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
