import express from 'express';
import expressSession from 'express-session'; // Este es un midleware de aplicación es diferente al midleware de ruta
import http from 'http';
import sessionFileStore from 'session-file-store';

const app = express();
const PORT = 3000;
const fileStore = sessionFileStore(expressSession);

app.use(express.json());

app.use(
    expressSession({
        store: new fileStore({
            path: './sessions', // Se recomienda colocar la carpeta fuera del proyecto para qu cuando tengamos que transladar el proyecto, no nos llevemos la carpeta "../sessions"
            ttl: 60,
            retries: 2,
        }),
        secret: 'ctJiRS5*1#1r', // al colocar un parametro en la expressSession.secret: ya tendriamos un elemento 'secreto'
        resave: true, // para que el usuario no pueda tener varias sessiones abiertas
        saveUninitialized: true,
    }),
);

// Cierra la sesion

app.delete('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (!error) {
            res.send('Adios');
        } else {
            res.send('Ah ocurrido un error al cerrar sesion', error.message);
        }
    });
});

const USERNAME = 'jeisson';
const PASSWORD = 'piopio';

// -------------------------------------------------------------------------------------

// Midelware

const auth = (req, res, next) => {
    const { isAuth } = req.session;
    if (isAuth) {
        next();
    } else {
        res.status(403).send('No tienes permiso de estar aqui');
    }
};

// -------------------------------------------------------------------------------------

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
        req.session.username = username;
        req.session.isAuth = true;
        res.send('Auth OK');
    } else {
        res.status(401).send('Usuario o contraseña invalida');
    }
});

// Acceso a lugares privados

app.get('/private', auth, (req, res) => {
    const { username } = req.session;
    res.send(`Hola ${username}`);
});

// -------------------------------------------------------------------------------------

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Servidor en el puerto:', PORT);
});
