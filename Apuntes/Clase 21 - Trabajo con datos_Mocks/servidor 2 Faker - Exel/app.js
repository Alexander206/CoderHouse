import express from 'express';
import http from 'http';
import { faker } from '@faker-js/faker/locale/es_MX';
import { writeFile } from 'fs/promises';

const { name, internet, color } = faker;

const app = express();

function getRandomUser() {
    return {
        nombre: name.firstName(),
        apellido: name.lastName(),
        color: color.human(),
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
