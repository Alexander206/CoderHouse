import express from 'express';
import http from 'http';
import minimist from 'minimist';
import sendMail from './mails.js';

const options = {
  alias: {
    b: 'body',
    s: 'subject',
  },
};

const { body, subject } = minimist(process.argv.slice(2), options);

if (!body) {
  console.error('Error: El body es requerido');
  process.exit(1);
}

if (!subject) {
  console.error(' Error el subject es requerido');
  process.exit(1);
}

sendMail(subject, body);

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
