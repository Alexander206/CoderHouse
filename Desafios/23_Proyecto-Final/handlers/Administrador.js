const admin = process.env.ADMIN;

// [Midellware] usuario autenticado
const administrador = (req, res, next) => {
  req.isAuthenticated() ? next() : res.send(false);
};

export default administrador;
