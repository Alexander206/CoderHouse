const url = '/api/carrito';
let respuesta;
let datalistCarrito = document.getElementById('carritos');
let form__CarritoBuscar = document.querySelector('.listaCarritos');

carritoGET();

// funciones CRUD

async function carritoGET() {
    let componente = '';

    await fetch(url)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    for (let i = 0; i < respuesta.length; i++) {
        componente = componente + `<option value="${respuesta[i].id}">`;
    }

    datalistCarrito.innerHTML = componente;
}

async function carritoPOST() {
    await fetch(url, { method: 'POST' });
    carritoGET();
}

async function eliminar_producto__carrito(idCarrito, idProducto) {
    const optionsDELETE = {
        method: 'DELETE',
        body: JSON.stringify(),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    await fetch(`${url}/${idCarrito}/productos/${idProducto}`, optionsDELETE)
        .then((res) => res.json())
        .then((response) => console.log(response));
    let listaCarritos__input = document.querySelector('.listaCarritos__input');

    await fetch(`${url}/${listaCarritos__input.value}/productos`)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    let componente = '';
    let contadorTotal = 0;

    for (let i = 0; i < respuesta.length; i++) {
        componente =
            componente +
            `<tr>
            <td>${respuesta[i].codigo}</td>
            <td>${respuesta[i].id}</td>
            <td>${respuesta[i].nombre}</td>
            <td class="numeric">$${respuesta[i].precio}</td>
            <td>
                <button class="btn__eliminar-producto__carrito" onclick="eliminar_producto__carrito('${listaCarritos__input.value}', '${respuesta[i].id}')">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </td>
            </tr>`;
        contadorTotal = contadorTotal + respuesta[i].precio;
    }

    contadorTotal = `$ ${contadorTotal}`;

    document.getElementById('resultados__carrito').innerHTML = componente;
    document.getElementById('carrito__id').innerHTML = listaCarritos__input.value;
    document.getElementById('contadorTotal').innerHTML = contadorTotal;
}

form__CarritoBuscar.addEventListener('submit', async (event) => {
    event.preventDefault();

    let listaCarritos__input = document.querySelector('.listaCarritos__input');

    await fetch(`${url}/${listaCarritos__input.value}/productos`)
        .then((res) => res.json())
        .then((response) => (respuesta = response));

    let componente = '';
    let contadorTotal = 0;

    for (let i = 0; i < respuesta.length; i++) {
        componente =
            componente +
            `<tr>
            <td>${respuesta[i].codigo}</td>
            <td>${respuesta[i].id}</td>
            <td>${respuesta[i].nombre}</td>
            <td class="numeric">$${respuesta[i].precio}</td>
            <td>
                <button class="btn__eliminar-producto__carrito" onclick="eliminar_producto__carrito('${listaCarritos__input.value}', '${respuesta[i].id}')">
                    <ion-icon name="trash-outline"></ion-icon>
                </button>
            </td>
            </tr>`;
        contadorTotal = contadorTotal + respuesta[i].precio;
    }

    contadorTotal = `$ ${contadorTotal}`;

    document.getElementById('resultados__carrito').innerHTML = componente;
    document.getElementById('carrito__id').innerHTML = listaCarritos__input.value;
    document.getElementById('contadorTotal').innerHTML = contadorTotal;
});
