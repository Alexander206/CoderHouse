var express = require('express');
var router = express.Router();

const auth = require('../handlers/auth');

/* GET home page. */
router.get('/', auth, function (req, res, next) {
    res.render('login');
});

router.post('/login', (req, res) => {
    const { username } = req.body;

    if (username || req.session.username) {
        req.session.username = username;
        req.session.isAuth = true;
        res.render('index', { name: req.session.username });
    } else {
        res.render('login');
    }
});

router.post('/registrer', (req, res) => {
    const { username, password } = req.body;

    if (username || req.session.username) {
        req.session.username = username;
        req.session.isAuth = true;
        res.render('index', { name: req.session.username });
    } else {
        res.render('login');
    }
});

router.get('/aplication', auth, function (req, res, next) {
    res.render('index', { name: req.session.username });
});

router.get('/bye', auth, function (req, res, next) {
    res.render('bye', { name: req.session.username });
});

router.delete('/logout', auth, (req, res) => {
    req.session.destroy((error) => {
        if (!error) {
            res.render('bye');
        } else {
            res.send('Ah ocurrido un error al cerrar sesion', error.message);
        }
    });
});

module.exports = router;
