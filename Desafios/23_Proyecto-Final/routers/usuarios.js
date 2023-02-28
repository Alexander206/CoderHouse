// Importando dependencias
import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Importando clases

const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
};

// Rutas

// [Midellware] usuario autenticado

const isAuth = (req, res, next) => {
    req.isAuthenticated() ? next() : res.send(false);
};

// [POST] ruta para iniciar sesión.

router.post(
    '/login',
    passport.authenticate('login', {
        failureRedirect: '',
        failureMessage: true,
    }),
    function (req, res) {
        res.status(STATUS_CODE.OK).send({ session: true });
    },
);

// [POST] ruta para registrarse.

router.post(
    '/registrer',
    passport.authenticate('registrer', {
        successMessage: true,
        failureMessage: false,
        successRedirect: '/login',
        failureRedirect: '/failRegistrer',
    }),
    function (req, res) {
        res.status(STATUS_CODE.OK).send({ session: true });
    },
);

export default router;
