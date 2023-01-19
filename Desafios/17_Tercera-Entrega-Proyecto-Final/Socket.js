import { Server } from 'socket.io';

let io;

let today = new Date();
let now = today.toLocaleString();

// import productosdb from './db/productosdb.js';
// import chatdb from './db/chatdb.js';
// const chat = new chatdb();
// chat.archivo[0].hora = now;

function initSocket(httpServer) {
    io = new Server(httpServer);
    setEvents(io);
}

function setEvents(io) {
    console.log('Configurando el socket');
    io.on('connection', async (socketClient) => {
        console.log('Se conecto el cliente con el id ', socketClient.id);

        socketClient.on('disconnect', () => {
            console.log('Cliente desconectado');
        });

        /* Aqui va el código */
    });
}

export default initSocket;
