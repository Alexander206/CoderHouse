import express from 'express';
import http from 'http';
import minimist from 'minimist';
import cluster from 'cluster'; // Forma parte de Node y podemos hacer un clon de procesos
import os from 'os'; // Nos dice la cantidad de CPU que tienen nuestro computador

const opts = {
    default: {
        p: 8080,
    },
    alias: {
        p: 'port',
    },
};

// Se busca cambiar de master a primary para evitar la relación de maestro y esclavo

if (cluster.isPrimary) {
    const numCPUs = os.cpus().length; // Aqui vemos cuantos procesadores tenemos
    console.log('CPU length', numCPUs);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker killed ${worker.process.pid} | code ${code} | signal ${signal}`);
        console.log(`Setup nre worker...`);
        cluster.fork();
    });
} else {
    const app = express();

    const { port: PORT } = minimist(process.argv.slice(2), opts);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res, next) => {
        res.send(
            `<h1>Servidor en express en el puerto: ${PORT} desde el proceso ${process.pid}</h1>
            <p>${new Date().toLocaleString()}</p>`,
        );
    });

    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log(`El servidor esta escuchando en http://localhost:${PORT} y esta en el proceso: ${process.pid}`);
    });
}
