var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var expressSession = require("express-session");
var MongoStore = require("connect-mongo");
var passport = require("passport");
var Strategy = require("passport-local");
const LocalStrategy = Strategy;

var indexRouter = require("./routes/index");
var productosTest = require("./routes/productosTest");

var app = express();
const advancedOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    expressSession({
        store: MongoStore.create({
            mongoUrl:
                "mongodb+srv://root:root@cluster0.exdktjn.mongodb.net/?retryWrites=true&w=majority",
            mongoOptions: advancedOptions,
            ttl: 600,
        }),
        secret: "ctJiRS5*1#1r",
        resave: true,
        saveUninitialized: true,
    })
);

// Autenticación

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: "name",
        },
        (name, password, done) => {
            UserModel.findOne({ name })
                .then((user) => {
                    if (!user) {
                        console.log(`User with ${name} not found.`);
                        return done(null, false);
                    }
                    if (password !== user.password) {
                        console.log("Invalid Password");
                        return done(null, false);
                    }
                    done(null, user);
                })
                .catch((error) => {
                    console.log("Error in sign-in", error.message);
                    done(error);
                });
        }
    )
);

passport.use(
    "registrer",
    new LocalStrategy(
        {
            usernameField: "username",
            passReqToCallback: true,
        },
        (req, username, done) => {
            UserModel.findOne({ username })
                .then((user) => {
                    if (user) {
                        console.log(`El usuario ${username} ya existe.`);
                        return done(null, false);
                    }
                    return UserModel.create(req.body);
                })
                .then((newUser) => {
                    console.log(
                        `El usuario ${newUser.username} se registro de manera satisfactoria.`
                    );
                    done(null, newUser);
                })
                .catch((error) => {
                    console.log("Error al registrar usuario", error.message);
                    done(error);
                });
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((_id, done) => {
    UserModel.findOne({ _id })
        .then((user) => done(null, user))
        .catch(done);
});

// rutas

app.use("/", indexRouter);
app.use("/api", productosTest);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
