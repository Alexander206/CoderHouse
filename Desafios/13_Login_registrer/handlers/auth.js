const auth = (req, res, next) => {
    const { isAuth } = req.session;
    if (isAuth) {
        next();
    } else {
        res.render('login');
    }
};

module.exports = auth;
