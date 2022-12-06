import express from 'express';
import passport from 'passport';

var router = express.Router();

const verifyAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ message: 'No puede ingresar a esta zona' });
    }
};

/* GET home page. */

router.get('/', function (req, res, next) {
    res.render('login');
});

router.post(
    '/registrer',
    passport.authenticate('registrer', {
        successRedirect: '/login',
        failureRedirect: '/registrer',
    }),
    (req, res) => {
        const { user } = req.body;
        console.log('El usuario: ', user.username, 'Se registro');
    },
);

router.post('/login', passport.authenticate('login'), (req, res) => {
    const { user } = req.body;

    if (!req.isAuthenticated()) {
        req.statusCode(401).json({ message: ' El usuario o la contraseña son invalidos' });
        return;
    } else {
        res.render('index');
    }
});

router.delete('/logout', (req, res, next) => {
    const { user } = req;
    req.logout((error) => {
        if (error) {
            return next(error);
        }
        res.render({ message: `Adios ${user.email}` });
    });
});

router.get('/registrer', (req, res) => {
    res.render('registrer');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/aplication', verifyAuth, function (req, res, next) {
    res.render('index', { name: req.session.username });
});

router.get('/bye', verifyAuth, function (req, res, next) {
    res.render('bye', { name: req.session.username });
});

export default router;
