(function () {
    const socket = io();

    const formProductos = document.getElementById('form-productos');
    const inputNombre = document.getElementById('input-nombre');
    const inputPrecio = document.getElementById('input-precio');
    const inputThumbnail = document.getElementById('input-thumbnail');

    const resultados = document.getElementById('resultados');

    const procentajeCompresionText = document.querySelector('.porcentaje');

    const chatContenedor = document.getElementById('chat__contenedor');
    const formChat = document.getElementById('form-chat');
    const inputCorreo = document.getElementById('input-email');
    const inputNombreChat = document.getElementById('input-nombreChat');
    const inputApellido = document.getElementById('input-apellido');
    const inputEdad = document.getElementById('input-edad');
    const inputAlias = document.getElementById('input-alias');
    const inputAvatar = document.getElementById('input-avatar');
    const inputMensaje = document.getElementById('input-mensaje');

    const estadoEscritura = document.getElementById('estado-escritura');

    let today = new Date();
    let now = today.toLocaleString();

    // Conectar el servidor

    socket.on('connect', () => {
        console.log('Conectados al servidor');
    });

    // Recibir datos de productos

    socket.on('setData', (data) => {
        mostrarProductos(data);
    });

    // Evento envio de productos

    formProductos.addEventListener('submit', (eventFormProductos) => {
        eventFormProductos.preventDefault();
        let producto = {
            nombre: inputNombre.value,
            precio: Number(inputPrecio.value),
            thumbnail: inputThumbnail.value,
        };
        socket.emit('getData', producto);
    });

    // Recibir el chat

    socket.on('setChat', (data) => {
        mostrarChat(data);
    });

    // Enviar chat
    formChat.addEventListener('submit', (eventFormChat) => {
        eventFormChat.preventDefault();
        let message = {
            author: {
                id: inputCorreo.value,
                nombre: inputNombreChat.value,
                apellido: inputApellido.value,
                edad: inputEdad.value,
                alias: inputAlias.value,
                avatar: inputAvatar.value,
            },
            text: inputMensaje.value,
            hora: now,
        };

        socket.emit('getChat', message);
    });

    // Está escribiendo...

    socket.on('setTeclear', (data) => {
        estaEscribiendo(data);
    });

    inputMensaje.addEventListener('keyup', () => {
        let dataTeclear = {
            correo: inputCorreo.value,
            estado: true,
        };

        socket.emit('getTeclear', dataTeclear);
    });

    // funciones

    function mostrarProductos(data) {
        let tablaProductos = `
    <tr>
    <th>ID</th>
    <th>NOMBRE</th>
    <th>PRECIO</th>
    <th>IMAGEN</th>
    </tr>`;
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                tablaProductos = `${tablaProductos} <td> ${data[i].id} </td>`;
                tablaProductos = `${tablaProductos} <td> ${data[i].nombre} </td>`;
                tablaProductos = `${tablaProductos} <td> ${data[i].precio} </td>`;
                tablaProductos = `${tablaProductos} <td> <img src =" ${data[i].thumbnail}" /> </td>`;
                tablaProductos = `${tablaProductos}</tr><tr>`;
            }
        } else {
            tablaProductos = `<tr><td> No hay productos </td></tr>`;
        }
        resultados.innerHTML = `${tablaProductos}`;
    }

    function mostrarChat(data) {
        let dataNormalizada = JSON.stringify(data).length;
        data = desnormalizacion(data);
        let dataDesnormalizada = JSON.stringify(data).length;

        const procentajeCompresion = ((dataNormalizada * 100) / dataDesnormalizada).toFixed(2);

        procentajeCompresionText.innerText = `Compresión: ${procentajeCompresion} %`;

        chatContenedor.innerHTML = '';
        let listaChat;
        for (let i = 0; i < data.mensajes.length; i++) {
            listaChat = `
            <span class = "imagen"> <img src="${data.mensajes[i].author.avatar}" alt="Avatar"> </span>
            <span class = "correo"> ${data.mensajes[i].author.id} </span>
            <span class = "hora"> ${data.mensajes[i].hora} </span>
            <span class = "mensaje"> ${data.mensajes[i].text} </span>`;
            let li = document.createElement('li');
            li.innerHTML = listaChat;
            chatContenedor.appendChild(li);
        }
    }

    function estaEscribiendo(data) {
        if (data.estado && data.correo.length > 1) {
            estadoEscritura.innerHTML = `<p> ${data.correo} Está escribiendo ... </p>`;
        } else {
            estadoEscritura.innerHTML = '<p></p>';
        }
    }

    // Normalización y desnormalización

    function desnormalizacion(archivo) {
        const autorScheme = new normalizr.schema.Entity('author', {}, { idAttribute: 'id' });
        const mensajeScheme = new normalizr.schema.Entity('mensajes', {
            author: autorScheme,
        });

        const mensajesScheme = new normalizr.schema.Entity('mensajes', {
            mensajes: [mensajeScheme],
        });

        const dataDenormalize = normalizr.denormalize(archivo.result, mensajesScheme, archivo.entities);

        return dataDenormalize;
    }
})();
