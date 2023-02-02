import express from 'express';
import http from 'http';
import nodemailer from 'nodemailer'; // Dependencia para usar correo electronico

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'odie.fadel@ethereal.email',
    pass: 'J9rG7wqwHP45hFnUvN',
  },
});

const opts = {
  from: 'Servidor Node',
  to: 'amarok.no.seishin.260@gmail.com',
  subject: 'Hola, estoy hablandote desde un servidor en Node',
  html: '<h1>Hola, estoy hablandote desde un servidor en Node</h1>',
};

try {
  const result = await transporter.sendMail(opts);
  console.log('result', result);
} catch (error) {
  console.error(error.message);
}

const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`);
});
