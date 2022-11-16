import express from 'express';
import cookieParser from 'cookie-parser'; // Este es un midleware de aplicación es diferente al midleware de ruta
import http from 'http';

const app = express();
const PORT = 3000;

app.use(cookieParser('ctJiRS5*1#1r')); // al colocar un parametro en la cookieParser ya tendriamos un elemento 'secreto'

app.get('/cookie-insert', (req, res) => {
    res.cookie('fecha', new Date().toString(), { maxAge: 30000, signed: true }).send('Cookie insertada');
});

app.get('/cookie-obtener', (req, res) => {
    res.send(req.signedCookies.fecha); // Si no es una cooke firmada no se le coloca 'signedCookies' sino 'cookies'
});

app.get('/cookie-borrar', (req, res) => {
    res.clearCookie('fecha').send('Cookie limpiada'); // para borrar las cookies
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Servidor en el puerto:', PORT);
});
