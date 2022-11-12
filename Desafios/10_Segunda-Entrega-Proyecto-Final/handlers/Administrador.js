const admin = process.env.ADMIN;

// Middleware

const administrador = (req, res, next) => {
    if (admin) {
        console.log('Es administrador');
        next();
    } else {
        res.status(STATUS_CODE.NOT_FOUND).send({ error: 'Ups, no tienes permiso para acceder a esta función' });
    }
};

export default administrador;
