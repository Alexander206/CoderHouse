var express = require("express");
var router = express.Router();

var passport = require("passport");

const usuarios = require('../db/usuarios.js')

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("registrer");
});

router.post("/registrer", passport.authenticate("registrer"), (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (req.session.password || req.session.username) {
        res.render("index", { name: req.session.username });
    } else {
        req.session.username = username;
        req.session.password = password;
        res.render("login");
    }
});

/* 
router.post("/login", (req, res) => {
    const { username } = req.body;

    if (username || req.session.username) {
        req.session.username = username;
        req.session.isAuth = true;
        res.render("index", { name: req.session.username });
    } else {
        res.render("login");
    }
});

router.get("/aplication", auth, function (req, res, next) {
    res.render("index", { name: req.session.username });
});

router.get("/bye", auth, function (req, res, next) {
    res.render("bye", { name: req.session.username });
});

router.delete("/logout", auth, (req, res) => {
    req.session.destroy((error) => {
        if (!error) {
            res.render("bye");
        } else {
            res.send("Ah ocurrido un error al cerrar sesion", error.message);
        }
    });
}); */

module.exports = router;
