import express from 'express';
import http from 'http';

const app = express();

const nombres = ['Luis', 'Lucia', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Magenta'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomUser() {
    return {
        nombre: nombres[random(0, 4)],
        apellido: apellidos[random(0, 4)],
        color: colores[random(0, 4)],
    };
}

app.get('/test', (req, res) => {
    const data = [];

    for (let index = 0; index < 10; index++) {
        data.push(getRandomUser());
    }

    res.json(data);
});

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});
