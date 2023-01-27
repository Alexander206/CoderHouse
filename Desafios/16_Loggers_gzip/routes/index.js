import { Router } from 'express';
import passport from 'passport';
import compression from 'compression';
import winston from 'winston';

/* Manejo de logs */

const logger = winston.createLogger({
  // Instancia de winston | Tipos de logs --> Silly, Debug, Verbose, Info, Warn, Error
  level: 'info', // Consifuración del logger
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({ filename: 'output.log', level: 'info' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

let router = Router();

// [Midellware] usuario autenticado

const isAuth = (req, res, next) => {
  req.isAuthenticated() ? next() : res.render('login');
};

// [GET] pagina de inicio.

router.get('/', isAuth, compression(), (req, res, next) => {
  res.redirect('/aplication');
});

// [GET] pagina de la aplicación.

router.get('/aplication', isAuth, compression(), (req, res, next) => {
  const { user } = req;
  logger.info('El usuario :' + user.email + ' se conecto');
  res.render('index', {
    name: `${user.firstname} ${user.lastname}`,
    correo: user.email,
    nombre: user.firstname,
    apellido: user.lastname,
    edad: user.age,
    alias: user.alias,
    avatar: user.avatar,
  });
});

// [GET] pagina de registro.

router.get('/registrer', compression(), (req, res, next) => {
  res.render('registrer');
});

// [GET] pagina de registro fallido.

router.get('/failRegistrer', compression(), (req, res, next) => {
  res.render('failRegistrer', { email: 'yo' });
});

// [GET] pagina de inicio de sesion.

router.get('/login', isAuth, compression(), (req, res, next) => {
  res.render('login');
});

// [GET] pagina de inicio de sesion fallido.

router.get('/failLogin', compression(), (req, res, next) => {
  res.render('failLogin', { email: req.email });
});

// [GET] pagina de cierre.

router.get('/bye', isAuth, compression(), (req, res, next) => {
  const { user } = req;
  res.render('bye', { name: `${user.firstname} ${user.lastname}` });
});

// [POST] ruta para iniciar sesion.

router.post(
  '/login',
  passport.authenticate('login', {
    failureRedirect: '/failLogin',
    failureMessage: true,
  }),
  function (req, res) {
    res.redirect('/login');
  },
);

// [POST] ruta para registrarse.

router.post(
  '/registrer',
  passport.authenticate('registrer', {
    successRedirect: '/login',
    failureRedirect: '/failRegistrer',
  }),
);

// [POST] ruta para cerrar sesion.

router.post('/logout', (req, res, next) => {
  const { user } = req;
  req.logout((error) => {
    if (!error) {
      // res.status(200).render('adios', { user: user.email });
    } else {
      res.send('Ocurrio un  error', error.message);
    }
  });
});

export default router;
