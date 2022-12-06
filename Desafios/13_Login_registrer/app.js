import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressSession from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

import indexRouter from './routes/index.js';
import productosTest from './routes/productosTest.js';
import UserModel from './model/user.js';

var app = express();
const advancedOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Midelware de autenticación

app.use(
    expressSession({
        store: MongoStore.create({
            mongoUrl: 'mongodb+srv://root:root@cluster0.exdktjn.mongodb.net/?retryWrites=true&w=majority',
            mongoOptions: advancedOptions,
            ttl: 600,
        }),
        secret: 'ctJiRS5*1#1r',
        resave: true,
        saveUninitialized: true,
    }),
);

(() => {
    try {
        const URL = 'mongodb+srv://root:root@cluster0.exdktjn.mongodb.net/test';
        mongoose.connect(URL);
        console.log('Database connected.');
    } catch (error) {
        console.error('Error to connecto to database', error.message);
    }
})();

// Autenticación podemos autenticarnos de muchas maneras (google, twiter, facebook, local, etc...)

passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'username', // Estas opciones es para especificar cuales campos buscar en la autenticación
            passwordField: 'password',
        },
        (username, password, done) => {
            UserModel.findOne({ username })
                .then((user) => {
                    if (!user) {
                        console.log(`El usuario ${username} no existe.`);
                        return done(null, false);
                    }
                    if (password !== user.password) {
                        console.log('Invalid Password');
                        return done(null, false);
                    }
                    return done(null, user);
                })
                .catch((error) => {
                    console.log('Error in sign-in', error.message);
                    done(error);
                });
        },
    ),
);

passport.use(
    'registrer',
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            // passReqToCallback: true, // Este parametro si esta en true, especifica que el callback reciba el objeto req (request)
        },
        (username, password, done) => {
            UserModel.findOne({ username })
                .then((user) => {
                    console.log(user);
                    if (user) {
                        console.log(`El usuario ${username} ya existe.`);
                        return done(null, false);
                    }
                    UserModel.create({ username, password });
                })
                .then((newUser) => {
                    console.log(`El usuario ${newUser.username} se registro de manera satisfactoria.`);
                    done(null, newUser);
                })
                .catch((error) => {
                    console.log('Error al registrar usuario', error.message);
                    done(error);
                });
        },
    ),
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((_id, done) => {
    UserModel.findById(_id)
        .then((user) => done(null, user))
        .catch((error) => {
            console.log(`Error en deserealizar el usuario ${error.message}`);
        });
});

app.use(passport.initialize());
app.use(passport.session());

// view engine setup

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// rutas

app.use('/', indexRouter);
app.use('/api', productosTest);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;
