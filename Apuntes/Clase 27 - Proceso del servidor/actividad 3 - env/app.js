import express from 'express';
import http from 'http';
import config from './config.js';

const app = express();

const PORT = config.NODE_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Corriendo en ', config.NODE_ENV);
    console.log('Server corriendo en:', `http://${config.HOST}:${config.NODE_PORT}`);
});
