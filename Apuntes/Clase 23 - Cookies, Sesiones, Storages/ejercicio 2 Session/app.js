import express from 'express';
import expressSession from 'express-session'; // Este es un midleware de aplicación es diferente al midleware de ruta
import http from 'http';

const app = express();
const PORT = 3000;

app.use(
    expressSession({
        secret: 'ctJiRS5*1#1r', // al colocar un parametro en la expressSession.secret: ya tendriamos un elemento 'secreto'
        resave: true, // para que el usuario no pueda tener varias sessiones abiertas
        saveUninitialized: true,
    }),
);

app.get('/', (req, res) => {
    if (req.session.contador) {
        req.session.contador += 1;
        res.send(`Hola esta es tu visita numero ${req.session.contador}`);
    } else {
        req.session.contador = 1;
        res.send('Bienvenido');
    }
});

app.delete('/', (req, res) => {
    req.session.destroy((error) => {
        if (!error) {
            res.send('Adios');
        } else {
            res.send('Ah ocurrido un error al cerrar sesion');
        }
    });
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Servidor en el puerto:', PORT);
});
