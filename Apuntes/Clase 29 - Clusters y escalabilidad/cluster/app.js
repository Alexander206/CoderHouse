import express from 'express';
import http from 'http';
import cluster from 'cluster'; // Forma parte de Node y podemos hacer un clon de procesos 
import os from 'os'; // Nos dice la cantidad de CPU que tienen nuestro computador

if (cluster.isMaster) {
    const numCPUs = os.cpus().length; // Aqui vemos cuantos procesadores tenemos
    console.log('CPU length', numCPUs);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker killed ${worker.process.pid} | code ${code} | signal ${signal}`);
    });
} else {
    const app = express();

    const PORT = process.env.NODE_PORT || 3000;

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res, next) => {
        res.send(`<h1>Hola mundo desde el proceso ${process.pid}</h1>`);
    });

    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log(`El servidor esta escuchando en http://localhost:${PORT} y esta en el proceso: ${process.pid}`);
    });
}
